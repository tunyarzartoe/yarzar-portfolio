import { personalData } from "@/app/constants/personalData";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const Personal = () => {
  const [index, setIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-10"
    >
      <div className="rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 backdrop-blur-md shadow-sm">
        {/* Tab Headers */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
          {personalData.map((item, itemIndex) => {
            const isActive = index === itemIndex;
            return (
              <button
                key={itemIndex}
                onClick={() => setIndex(itemIndex)}
                className={`relative pb-2 text-sm sm:text-base font-bold capitalize transition-colors ${
                  isActive
                    ? "text-secondary"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span>{item.title}</span>
                {isActive && (
                  <motion.div
                    layoutId="personalTabActive"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="space-y-4">
          {personalData[index].info.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 gap-3"
            >
              <div className="flex items-center gap-3.5">
                {item.logo && (
                  <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex-shrink-0 p-1">
                    <Image
                      className="rounded-lg object-contain"
                      src={item.logo}
                      alt="logo"
                      fill
                    />
                  </div>
                )}
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  {item.year && (
                    <span className="text-xs text-secondary font-medium">
                      {item.year}
                    </span>
                  )}
                </div>
              </div>

              {/* Skills Icons if present */}
              {item.icons && item.icons.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1 sm:pt-0">
                  {item.icons.map((iconObject, iIdx) => (
                    <div
                      key={iIdx}
                      className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm"
                    >
                      {iconObject.icon}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Link to full Credentials Page */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <Link
            href="/credentials"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-secondary hover:text-red-700 dark:hover:text-rose-300 transition-colors"
          >
            <span>View Full Timeline & Certificates</span>
            <HiArrowRight />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Personal;
