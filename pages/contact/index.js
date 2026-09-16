import React, { useState } from "react";
import { HiArrowRight, HiEnvelope, HiPhone, HiMapPin, HiSparkles, HiCheck } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useMetadata } from "@/app/metaData";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircleLoader } from "react-spinners";
import SocialIcons from "@/components/SocialIcons";
import BackToTopButton from "@/components/main/BackToTopButton";

const Contact = () => {
  const metadata = useMetadata();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phNo: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("htunyarzar2001@gmail.com");
    setCopied(true);
    toast.info("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setLoading(false);

      if (result.success) {
        toast.success("Message sent successfully! I will reply soon.");
        setFormData({ name: "", email: "", phNo: "", message: "" });
      } else {
        toast.error("Failed to send message. Please contact me directly via email.");
      }
    } catch (err) {
      setLoading(false);
      toast.error("Network error. Please try reaching out via email directly.");
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <>
      <Head>
        <title>Contact | Tun Yar Zar Toe</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>

      <section className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 dark:bg-rose-500/15 border border-red-500/20 text-red-600 dark:text-rose-400 text-xs sm:text-sm font-semibold mb-4">
            <HiSparkles className="animate-spin-slow" />
            <span>Get in Touch</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Let&apos;s Build Something <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500">
              Exceptional Together
            </span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Have a project, a question, or a career opportunity? Feel free to reach out.
            I am currently based in Tokyo and available for discussions.
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-md space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h2>

              {/* Email Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                <div className="p-3 rounded-xl bg-red-500/10 dark:bg-rose-500/20 text-secondary text-xl flex-shrink-0">
                  <HiEnvelope />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase">Email</div>
                  <a
                    href="mailto:htunyarzar2001@gmail.com"
                    className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 truncate block hover:text-secondary transition-colors"
                  >
                    htunyarzar2001@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-xs text-secondary font-semibold mt-1 hover:underline"
                  >
                    {copied ? <HiCheck /> : null}
                    <span>{copied ? "Copied to Clipboard!" : "Copy Email"}</span>
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                <div className="p-3 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xl flex-shrink-0">
                  <HiMapPin />
                </div>
                <div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase">Location</div>
                  <div className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
                    Tokyo, Japan
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Koto-ku, Tokyo (東京都江東区)
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                <div className="p-3 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xl flex-shrink-0">
                  <HiPhone />
                </div>
                <div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase">Phone (電話番号)</div>
                  <a
                    href="tel:07089694368"
                    className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 hover:text-secondary transition-colors"
                  >
                    070-8969-4368
                  </a>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    日本国内通話・SMS対応
                  </div>
                </div>
              </div>

              {/* Language & Availability */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">日本語能力:</span>
                  <span className="font-bold text-secondary">JLPT N2 (ビジネス会話可能)</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">在留資格:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">留学（東京IT専門学校）</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">希望雇用形態:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">正社員（新卒・中途）・インターン</span>
                </div>
              </div>

              {/* Recruiter Note */}
              <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-900/40 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                <span className="font-bold text-secondary block mb-1">採用ご担当者様へ</span>
                カジュアル面談、会社説明、書類選考に関するご連絡を歓迎しております。オンライン面談（Zoom / Google Meet）も即座に対応可能です。
              </div>

              {/* Socials */}
              <div className="pt-2">
                <div className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase mb-2">
                  Social Profiles
                </div>
                <SocialIcons />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-md">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Send a Direct Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                      Your Name <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Satoshi Tanaka"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                      Your Email <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="text"
                    name="phNo"
                    placeholder="+81 or your contact number"
                    value={formData.phNo}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                    Message <span className="text-secondary">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project, idea, or open role..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || loading}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-300 ${
                    isFormValid && !loading
                      ? "bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 shadow-rose-500/25 hover:shadow-rose-500/40 hover:-translate-y-0.5 cursor-pointer"
                      : "bg-slate-400 dark:bg-slate-700 cursor-not-allowed opacity-70"
                  }`}
                >
                  {loading ? (
                    <>
                      <span>Sending Message...</span>
                      <CircleLoader color="#ffffff" size={18} />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <HiArrowRight className="text-base" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        <ToastContainer position="bottom-right" theme="colored" autoClose={4000} />
      </section>

      <BackToTopButton />
    </>
  );
};

export default Contact;
