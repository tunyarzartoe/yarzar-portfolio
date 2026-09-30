import React from "react";
import Head from "next/head";
import Link from "next/link";
import { HiArrowLeft, HiPencilSquare } from "react-icons/hi2";
import PostEditor from "@/components/blog/PostEditor";
import BackToTopButton from "@/components/main/BackToTopButton";

const NewBlogPost = () => {
  return (
    <>
      <Head>
        <title>New Post | Tun Yar Zar Toe Blog</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section className="min-h-screen py-8 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-bold hover:text-rose-500 transition-colors"
          >
            <HiArrowLeft className="text-base" />
            <span>Blog</span>
          </Link>
          <span>/</span>
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            New post
          </span>
        </div>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400 border border-rose-200 dark:border-rose-800/50 mb-5">
            <HiPencilSquare className="text-sm" />
            Draft a new article
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-3 leading-tight">
            Write a new post
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
            Fill in the fields below, then copy the generated code into the{" "}
            <code className="font-mono text-sm">BLOG_POSTS</code> array in{" "}
            <code className="font-mono text-sm">
              app/constants/blogData.js
            </code>
            . This page doesn't save anything on its own — nothing is
            published until you paste the code in and redeploy.
          </p>
        </div>

        <PostEditor />
      </section>

      <BackToTopButton />
    </>
  );
};

export default NewBlogPost;