
const GITHUB_USERNAME = "tunyarzartoe";
const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

const QUERY = `
  query ($login: String!) {
    user(login: $login) {
      login
      name
      avatarUrl
      url
      bio

      followers {
        totalCount
      }

      following {
        totalCount
      }

      repositories(
        first: 100
        ownerAffiliations: OWNER
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        totalCount

        nodes {
          name
          description
          url
          stargazerCount
          forkCount
          isFork
          isArchived

          primaryLanguage {
            name
            color
          }
        }
      }

      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            forkCount

            primaryLanguage {
              name
              color
            }
          }
        }
      }

      contributionsCollection {
        contributionCalendar {
          totalContributions

          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

const LEVEL_MAP = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");

    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return res.status(500).json({
      error: "GITHUB_TOKEN is not configured.",
    });
  }

  try {
    const response = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "YarZarPortfolio",
      },

      body: JSON.stringify({
        query: QUERY,
        variables: {
          login: GITHUB_USERNAME,
        },
      }),
    });

    const json = await response.json();

    if (!response.ok || json.errors?.length) {
      console.error("GitHub GraphQL error:", {
        status: response.status,
        statusText: response.statusText,
        errors: json.errors,
      });

      return res.status(502).json({
        error: "Failed to fetch GitHub data.",
        status: response.status,
        statusText: response.statusText,
        details:
          json.errors?.map((error) => error.message) ||
          "GitHub API error",
      });
    }

    const user = json.data?.user;

    if (!user) {
      return res.status(404).json({
        error: "GitHub user not found.",
        username: GITHUB_USERNAME,
      });
    }

    const calendar =
      user.contributionsCollection?.contributionCalendar;

    const contributions =
      calendar?.weeks?.flatMap((week) =>
        week.contributionDays.map((day) => ({
          date: day.date,
          count: day.contributionCount,
          level: LEVEL_MAP[day.contributionLevel] ?? 0,
        }))
      ) ?? [];

    const repositories =
      user.repositories?.nodes
        ?.filter(
          (repo) =>
            repo &&
            !repo.isFork &&
            !repo.isArchived
        )
        .map((repo) => ({
          repo: repo.name,
          description: repo.description,
          link: repo.url,
          stars: repo.stargazerCount ?? 0,
          forks: repo.forkCount ?? 0,
          language: repo.primaryLanguage?.name ?? null,
          languageColor: repo.primaryLanguage?.color ?? null,
        })) ?? [];

    const pinned =
      user.pinnedItems?.nodes
        ?.filter(Boolean)
        .map((repo) => ({
          repo: repo.name,
          description: repo.description,
          link: repo.url,
          stars: repo.stargazerCount ?? 0,
          forks: repo.forkCount ?? 0,
          language: repo.primaryLanguage?.name ?? null,
          languageColor: repo.primaryLanguage?.color ?? null,
        })) ?? [];

    const languageMap = {};

    repositories.forEach((repo) => {
      if (!repo.language) return;

      if (!languageMap[repo.language]) {
        languageMap[repo.language] = {
          name: repo.language,
          color: repo.languageColor,
          count: 0,
        };
      }

      languageMap[repo.language].count += 1;
    });

    const languages = Object.values(languageMap)
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);

    const totalStars = repositories.reduce(
      (sum, repo) => sum + repo.stars,
      0
    );

    const totalForks = repositories.reduce(
      (sum, repo) => sum + repo.forks,
      0
    );

    res.setHeader(
      "Cache-Control",
      "s-maxage=300, stale-while-revalidate=600"
    );

    return res.status(200).json({
      username: user.login,
      name: user.name,
      avatar: user.avatarUrl,
      profile: user.url,
      bio: user.bio,

      followers: user.followers?.totalCount ?? 0,
      following: user.following?.totalCount ?? 0,

      repositories: user.repositories?.totalCount ?? 0,

      totalStars,
      totalForks,

      pinned,
      languages,

      contrib: {
        total: {
          total: calendar?.totalContributions ?? 0,
        },

        contributions,
      },
    });
  } catch (error) {
    console.error(
      "GitHub stats fetch failed:",
      error
    );

    return res.status(500).json({
      error: "Unable to load GitHub statistics.",
      details:
        error instanceof Error
          ? error.message
          : "Unknown error",
    });
  }
}