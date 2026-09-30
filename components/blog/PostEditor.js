import React, { useState, useMemo, useCallback, useRef } from "react";
import { BLOG_POSTS } from "@/app/constants/blogData";
import {
  HiPlus,
  HiTrash,
  HiClipboardDocument,
  HiCheck,
  HiPencilSquare,
  HiExclamationTriangle,
  HiCodeBracket,
  HiEye,
  HiPhoto,
  HiXMark,
  HiDocumentPlus,
  HiPencil,
  HiOutlineTrash,
} from "react-icons/hi2";

/**
 * No backend: every mode below produces code to paste into
 * app/constants/blogData.js yourself. Nothing here writes to disk.
 *  - Create: builds a new post object to add to BLOG_POSTS.
 *  - Edit:   loads an existing post's fields, then outputs the
 *            full replacement object for that entry.
 *  - Delete: shows the entry to find and remove, with its slug/id.
 */

const MODES = [
  { id: "create", label: "New post", icon: <HiDocumentPlus /> },
  { id: "edit", label: "Edit post", icon: <HiPencil /> },
  { id: "delete", label: "Delete post", icon: <HiOutlineTrash /> },
];

const CATEGORY_OPTIONS = [
  "Next.js",
  "React",
  "TypeScript",
  "Java",
  "Node.js",
  "Japanese",
  "CSS",
  "DevOps",
];

const GRADIENT_OPTIONS = [
  { label: "Rose / Pink", value: "from-rose-500 to-pink-500" },
  { label: "Cyan / Blue", value: "from-cyan-500 to-blue-500" },
  { label: "Orange / Red", value: "from-orange-500 to-red-500" },
  { label: "Green / Emerald", value: "from-green-500 to-emerald-500" },
  { label: "Purple / Indigo", value: "from-purple-500 to-indigo-500" },
  { label: "Slate", value: "from-slate-500 to-slate-700" },
  { label: "Teal / Cyan", value: "from-teal-500 to-cyan-500" },
];

const MAX_IMAGE_MB = 1.5;

const todayISO = () => new Date().toISOString().slice(0, 10);

const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const blankSection = () => ({
  title: "",
  content: "",
  bullets: "",
  codeSnippet: "",
  codeLanguage: "",
});

const emptyForm = () => ({
  title: "",
  titleJa: "",
  slug: "",
  slugTouched: false,
  category: CATEGORY_OPTIONS[0],
  date: todayISO(),
  readTime: "5 min read",
  excerpt: "",
  emoji: "📝",
  gradient: GRADIENT_OPTIONS[0].value,
  featured: false,
  tags: "",
  coverImage: "",
  author: { name: "", avatar: "/images/avatar.jpg", location: "", role: "" },
  sections: [blankSection()],
});

/** Load an existing BLOG_POSTS entry into editable form shape. */
const postToForm = (post) => ({
  title: post.title || "",
  titleJa: post.titleJa || "",
  slug: post.slug || "",
  slugTouched: true,
  category: post.category || CATEGORY_OPTIONS[0],
  date: post.date || todayISO(),
  readTime: post.readTime || "5 min read",
  excerpt: post.excerpt || "",
  emoji: post.emoji || "📝",
  gradient: post.gradient || GRADIENT_OPTIONS[0].value,
  featured: !!post.featured,
  tags: (post.tags || []).join(", "),
  coverImage: post.coverImage || "",
  author: {
    name: post.author?.name || "",
    avatar: post.author?.avatar || "/images/avatar.jpg",
    location: post.author?.location || "",
    role: post.author?.role || "",
  },
  sections:
    post.sections?.length > 0
      ? post.sections.map((s) => ({
          title: s.title || "",
          content: s.content || "",
          bullets: (s.bullets || []).join("\n"),
          codeSnippet: s.codeSnippet || "",
          codeLanguage: s.codeLanguage || "",
        }))
      : [blankSection()],
});

/* ---------- JS-ish formatter (double-quoted values, bare keys) ---------- */

const toObjectLiteral = (value, indent = 0) => {
  const pad = "  ".repeat(indent);
  const padIn = "  ".repeat(indent + 1);

  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const items = value.map((v) => `${padIn}${toObjectLiteral(v, indent + 1)}`);
    return `[\n${items.join(",\n")}\n${pad}]`;
  }

  if (value && typeof value === "object") {
    const keys = Object.keys(value);
    if (keys.length === 0) return "{}";
    const lines = keys.map((k) => {
      const safeKey = /^[A-Za-z_$][\w$]*$/.test(k) ? k : JSON.stringify(k);
      return `${padIn}${safeKey}: ${toObjectLiteral(value[k], indent + 1)}`;
    });
    return `{\n${lines.join(",\n")}\n${pad}}`;
  }

  if (typeof value === "string") return JSON.stringify(value);
  return String(value);
};

/* ---------- shared bits ---------- */

const inputClass =
  "w-full px-3.5 py-2.5 rounded-xl text-sm bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-rose-400 dark:focus:border-rose-500 transition-colors";

const Field = ({ label, hint, children }) => (
  <div>
    <div className="flex items-baseline justify-between mb-1.5">
      <label className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        {label}
      </label>
      {hint && (
        <span className="text-xs text-gray-400 dark:text-gray-500">
          {hint}
        </span>
      )}
    </div>
    {children}
  </div>
);

const CopyBlock = ({ label, code, disabled }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950 shadow-xl">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
        <span className="flex items-center gap-2 font-mono text-xs text-slate-400 font-semibold uppercase tracking-wider">
          <HiCodeBracket />
          {label}
        </span>
        <button
          onClick={handleCopy}
          disabled={disabled}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {copied ? (
            <>
              <HiCheck className="text-emerald-400 text-sm" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <HiClipboardDocument className="text-slate-400 text-sm" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-slate-200 max-h-[420px]">
        <code>{code}</code>
      </pre>
    </div>
  );
};

/** File → compressed base64 data URL, resized so it stays reasonably small. */
const fileToDataUrl = (file, maxWidth = 1200, quality = 0.82) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new window.Image();
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement("canvas");
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });

const ImageUploadField = ({ value, onChange }) => {
  const inputRef = useRef(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const handleFile = async (file) => {
    if (!file) return;
    if (file.size > MAX_IMAGE_MB * 1024 * 1024 * 4) {
      setError(`That file is quite large — try something under a few MB.`);
      return;
    }
    setError("");
    setBusy(true);
    try {
      const dataUrl = await fileToDataUrl(file);
      onChange(dataUrl);
    } catch {
      setError("Couldn't read that image — try a different file.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <Field label="Cover image (optional)">
      {value ? (
        <div className="relative group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value}
            alt="Cover preview"
            className="w-full h-40 object-cover rounded-xl border border-gray-200 dark:border-gray-700/50"
          />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-white hover:bg-black/80 transition-colors"
            aria-label="Remove image"
          >
            <HiXMark className="text-sm" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={busy}
          className="w-full flex flex-col items-center justify-center gap-2 h-32 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-500 hover:border-rose-400 hover:text-rose-500 transition-colors"
        >
          <HiPhoto className="text-2xl" />
          <span className="text-xs font-semibold">
            {busy ? "Processing..." : "Click to choose an image"}
          </span>
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
      {error && (
        <p className="mt-1.5 text-xs text-amber-600 dark:text-amber-400">
          {error}
        </p>
      )}
      <p className="mt-1.5 text-xs text-gray-400 dark:text-gray-500">
        Stored as embedded code (base64) in blogData.js — fine for a personal
        blog, but keeps the file bigger than a linked image would.
      </p>
    </Field>
  );
};

/* ============================== component ============================== */

const PostEditor = () => {
  const [mode, setMode] = useState("create");
  const [form, setForm] = useState(emptyForm);
  const [editSlug, setEditSlug] = useState("");
  const [deleteSlug, setDeleteSlug] = useState("");

  const existingIds = useMemo(() => BLOG_POSTS.map((p) => p.id), []);
  const existingSlugs = useMemo(
    () => new Set(BLOG_POSTS.map((p) => p.slug)),
    []
  );
  const suggestedId = useMemo(
    () => (existingIds.length ? Math.max(...existingIds) + 1 : 1),
    [existingIds]
  );

  const set = useCallback((patch) => setForm((f) => ({ ...f, ...patch })), []);
  const setAuthor = useCallback(
    (patch) => setForm((f) => ({ ...f, author: { ...f.author, ...patch } })),
    []
  );

  const onTitleChange = (title) => {
    setForm((f) => ({
      ...f,
      title,
      slug: f.slugTouched ? f.slug : slugify(title),
    }));
  };

  const setSection = (idx, patch) => {
    setForm((f) => {
      const sections = [...f.sections];
      sections[idx] = { ...sections[idx], ...patch };
      return { ...f, sections };
    });
  };
  const addSection = () =>
    setForm((f) => ({ ...f, sections: [...f.sections, blankSection()] }));
  const removeSection = (idx) =>
    setForm((f) => ({
      ...f,
      sections: f.sections.filter((_, i) => i !== idx),
    }));

  const switchMode = (m) => {
    setMode(m);
    if (m === "create") setForm(emptyForm());
  };

  const loadPostForEdit = (slug) => {
    setEditSlug(slug);
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (post) setForm(postToForm(post));
  };

  const selectedForDelete = useMemo(
    () => BLOG_POSTS.find((p) => p.slug === deleteSlug),
    [deleteSlug]
  );

  const slugTaken =
    mode === "create" && form.slug && existingSlugs.has(form.slug);

  const builtPost = useMemo(() => {
    const tags = form.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const sections = form.sections
      .filter((s) => s.title.trim() || s.content.trim())
      .map((s) => {
        const bullets = s.bullets
          .split("\n")
          .map((b) => b.trim())
          .filter(Boolean);
        const section = { title: s.title.trim(), content: s.content.trim() };
        if (bullets.length) section.bullets = bullets;
        if (s.codeSnippet.trim()) {
          section.codeSnippet = s.codeSnippet;
          section.codeLanguage = s.codeLanguage.trim() || "javascript";
        }
        return section;
      });

    let dateJa = "";
    try {
      dateJa = new Date(form.date).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      dateJa = "";
    }

    const existing =
      mode === "edit" ? BLOG_POSTS.find((p) => p.slug === editSlug) : null;

    const obj = {
      id: existing ? existing.id : suggestedId,
      slug: form.slug || slugify(form.title) || "untitled-post",
      title: form.title,
      titleJa: form.titleJa,
      category: form.category,
      date: form.date,
      dateJa,
      readTime: form.readTime,
      tags,
      excerpt: form.excerpt,
      emoji: form.emoji,
      gradient: form.gradient,
      featured: form.featured,
      author: { ...form.author },
      sections,
    };
    if (form.coverImage) obj.coverImage = form.coverImage;
    return obj;
  }, [form, suggestedId, mode, editSlug]);

  const generatedCode = useMemo(
    () => `${toObjectLiteral(builtPost)},`,
    [builtPost]
  );

  const canGenerate =
    form.title.trim() && form.excerpt.trim() && form.author.name.trim();

  return (
    <div>
      {/* Mode tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => switchMode(m.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              mode === m.id
                ? "bg-rose-500 text-white shadow-lg shadow-rose-500/25"
                : "bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 hover:border-rose-400/50"
            }`}
          >
            {m.icon}
            {m.label}
          </button>
        ))}
      </div>

      {/* ---------------- DELETE MODE ---------------- */}
      {mode === "delete" && (
        <div className="max-w-xl space-y-4">
          <Field label="Choose a post to delete">
            <select
              value={deleteSlug}
              onChange={(e) => setDeleteSlug(e.target.value)}
              className={inputClass}
            >
              <option value="">Select a post...</option>
              {BLOG_POSTS.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.title} ({p.slug})
                </option>
              ))}
            </select>
          </Field>

          {selectedForDelete && (
            <>
              <div className="flex items-start gap-3 rounded-2xl border border-amber-200 dark:border-amber-800/40 bg-amber-50 dark:bg-amber-950/20 p-4">
                <HiExclamationTriangle className="text-amber-500 text-xl shrink-0 mt-0.5" />
                <div className="text-sm text-amber-800 dark:text-amber-300">
                  <p className="font-semibold mb-1">
                    Nothing is deleted automatically.
                  </p>
                  <p>
                    In <code className="font-mono">blogData.js</code>, find
                    the object with{" "}
                    <code className="font-mono">
                      id: {selectedForDelete.id}
                    </code>{" "}
                    and{" "}
                    <code className="font-mono">
                      slug: "{selectedForDelete.slug}"
                    </code>
                    , then remove that whole object (and its trailing comma)
                    from the <code className="font-mono">BLOG_POSTS</code>{" "}
                    array.
                  </p>
                </div>
              </div>

              <CopyBlock
                label={`entry to remove — ${selectedForDelete.slug}`}
                code={`${toObjectLiteral(selectedForDelete)},`}
              />
            </>
          )}
        </div>
      )}

      {/* ---------------- CREATE / EDIT MODE ---------------- */}
      {mode !== "delete" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* ---------- Form ---------- */}
          <div className="space-y-6">
            {mode === "edit" && (
              <Field label="Choose a post to edit">
                <select
                  value={editSlug}
                  onChange={(e) => loadPostForEdit(e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select a post...</option>
                  {BLOG_POSTS.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.title} ({p.slug})
                    </option>
                  ))}
                </select>
              </Field>
            )}

            {(mode === "create" || editSlug) && (
              <>
                <Field label="Title">
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => onTitleChange(e.target.value)}
                    placeholder="Mastering Server Components in Next.js"
                    className={inputClass}
                  />
                </Field>

                <Field label="Title (Japanese)">
                  <input
                    type="text"
                    value={form.titleJa}
                    onChange={(e) => set({ titleJa: e.target.value })}
                    placeholder="Next.js のサーバーコンポーネントを極める"
                    className={inputClass}
                  />
                </Field>

                <Field
                  label="Slug"
                  hint={
                    slugTaken ? (
                      <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                        <HiExclamationTriangle className="text-sm" />
                        Already used by another post
                      </span>
                    ) : (
                      `/blog/${form.slug || "..."}`
                    )
                  }
                >
                  <input
                    type="text"
                    value={form.slug}
                    onChange={(e) =>
                      set({ slug: slugify(e.target.value), slugTouched: true })
                    }
                    disabled={mode === "edit"}
                    className={`${inputClass} disabled:opacity-60`}
                  />
                </Field>

                <ImageUploadField
                  value={form.coverImage}
                  onChange={(coverImage) => set({ coverImage })}
                />

                <div className="grid grid-cols-2 gap-4">
                  <Field label="Category">
                    <select
                      value={form.category}
                      onChange={(e) => set({ category: e.target.value })}
                      className={inputClass}
                    >
                      {CATEGORY_OPTIONS.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Emoji (used if no cover image)">
                    <input
                      type="text"
                      value={form.emoji}
                      onChange={(e) => set({ emoji: e.target.value })}
                      className={inputClass}
                      maxLength={4}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="Date">
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => set({ date: e.target.value })}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Read time">
                    <input
                      type="text"
                      value={form.readTime}
                      onChange={(e) => set({ readTime: e.target.value })}
                      placeholder="5 min read"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Gradient">
                  <select
                    value={form.gradient}
                    onChange={(e) => set({ gradient: e.target.value })}
                    className={inputClass}
                  >
                    {GRADIENT_OPTIONS.map((g) => (
                      <option key={g.value} value={g.value}>
                        {g.label}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Tags (comma separated)">
                  <input
                    type="text"
                    value={form.tags}
                    onChange={(e) => set({ tags: e.target.value })}
                    placeholder="react, nextjs, performance"
                    className={inputClass}
                  />
                </Field>

                <Field label="Excerpt">
                  <textarea
                    value={form.excerpt}
                    onChange={(e) => set({ excerpt: e.target.value })}
                    rows={3}
                    className={inputClass}
                  />
                </Field>

                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) => set({ featured: e.target.checked })}
                    className="w-4 h-4 rounded accent-rose-500"
                  />
                  Featured post
                </label>

                {/* Author */}
                <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 mt-4">
                    Author
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Name">
                      <input
                        type="text"
                        value={form.author.name}
                        onChange={(e) => setAuthor({ name: e.target.value })}
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Role">
                      <input
                        type="text"
                        value={form.author.role}
                        onChange={(e) => setAuthor({ role: e.target.value })}
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Location">
                      <input
                        type="text"
                        value={form.author.location}
                        onChange={(e) =>
                          setAuthor({ location: e.target.value })
                        }
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Avatar path">
                      <input
                        type="text"
                        value={form.author.avatar}
                        onChange={(e) =>
                          setAuthor({ avatar: e.target.value })
                        }
                        className={inputClass}
                      />
                    </Field>
                  </div>
                </div>

                {/* Sections */}
                <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-3 mt-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                      Article sections
                    </h3>
                    <button
                      type="button"
                      onClick={addSection}
                      className="flex items-center gap-1 text-xs font-semibold text-rose-500 hover:text-rose-600"
                    >
                      <HiPlus /> Add section
                    </button>
                  </div>

                  <div className="space-y-4">
                    {form.sections.map((section, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-gray-200 dark:border-gray-700/50 p-4 space-y-3 bg-gray-50/50 dark:bg-gray-900/40"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-gray-400">
                            Section {idx + 1}
                          </span>
                          {form.sections.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeSection(idx)}
                              className="text-gray-400 hover:text-red-500"
                              aria-label="Remove section"
                            >
                              <HiTrash className="text-sm" />
                            </button>
                          )}
                        </div>

                        <input
                          type="text"
                          value={section.title}
                          onChange={(e) =>
                            setSection(idx, { title: e.target.value })
                          }
                          placeholder="Section title"
                          className={inputClass}
                        />
                        <textarea
                          value={section.content}
                          onChange={(e) =>
                            setSection(idx, { content: e.target.value })
                          }
                          placeholder="Paragraph content"
                          rows={3}
                          className={inputClass}
                        />
                        <textarea
                          value={section.bullets}
                          onChange={(e) =>
                            setSection(idx, { bullets: e.target.value })
                          }
                          placeholder={"Bullet points, one per line"}
                          rows={2}
                          className={inputClass}
                        />
                        <div className="grid grid-cols-[1fr_auto] gap-2">
                          <textarea
                            value={section.codeSnippet}
                            onChange={(e) =>
                              setSection(idx, {
                                codeSnippet: e.target.value,
                              })
                            }
                            placeholder="Code snippet (optional)"
                            rows={2}
                            className={`${inputClass} font-mono text-xs`}
                          />
                          <input
                            type="text"
                            value={section.codeLanguage}
                            onChange={(e) =>
                              setSection(idx, {
                                codeLanguage: e.target.value,
                              })
                            }
                            placeholder="lang"
                            className={`${inputClass} w-20`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* ---------- Output ---------- */}
          <div className="lg:sticky lg:top-6 space-y-4">
            {(mode === "create" || editSlug) && (
              <>
                <div className="rounded-2xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-900/60 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <HiEye className="text-rose-500" />
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                      Preview
                    </h3>
                  </div>
                  {builtPost.coverImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={builtPost.coverImage}
                      alt="Cover"
                      className="w-full h-32 object-cover rounded-xl"
                    />
                  ) : (
                    <div
                      className={`rounded-xl p-4 bg-gradient-to-br ${builtPost.gradient} text-white`}
                    >
                      <span className="text-3xl">{builtPost.emoji}</span>
                    </div>
                  )}
                  <h4 className="font-bold mt-3 leading-snug text-gray-900 dark:text-white">
                    {builtPost.title || "Untitled post"}
                  </h4>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {builtPost.category} · {builtPost.readTime}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    {builtPost.excerpt || "Your excerpt will appear here."}
                  </p>
                  {builtPost.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {builtPost.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <CopyBlock
                  label={
                    mode === "edit"
                      ? `replacement for "${editSlug}"`
                      : "blogData.js"
                  }
                  code={generatedCode}
                  disabled={!canGenerate}
                />

                {!canGenerate && (
                  <p className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400">
                    <HiExclamationTriangle />
                    Fill in a title, excerpt, and author name to generate
                    valid code.
                  </p>
                )}

                <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
                  {mode === "edit" ? (
                    <>
                      Find the existing object with{" "}
                      <code className="font-mono">slug: "{editSlug}"</code>{" "}
                      in <code className="font-mono">blogData.js</code> and
                      replace the whole object with this one.
                    </>
                  ) : (
                    <>
                      Paste this object into the{" "}
                      <code className="font-mono">BLOG_POSTS</code> array in{" "}
                      <code className="font-mono">
                        app/constants/blogData.js
                      </code>
                      . Suggested id <strong>{suggestedId}</strong> is one
                      higher than your current highest — adjust if posts were
                      added elsewhere since this page loaded.
                    </>
                  )}
                </p>
              </>
            )}

            {mode === "edit" && !editSlug && (
              <div className="flex flex-col items-center gap-2 py-16 text-center text-gray-400 dark:text-gray-500">
                <HiPencilSquare className="text-3xl" />
                <p className="text-sm">Pick a post on the left to edit it.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostEditor;