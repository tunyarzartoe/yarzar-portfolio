import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useMetadata } from "@/app/metaData";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircleLoader } from "react-spinners";

const Contact = () => {
  const metadata = useMetadata();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phNo: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    setLoading(false); // Set loading to false after the request is completed

    if (result.success) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phNo: "", message: "" });
    } else {
      toast.error("Failed to send message.");
    }
  };

  const isFormValid = formData.name && formData.email && formData.phNo; // Check if required fields are filled

  return (
    <section
      className="max-container padding-container py-8 xl:py-12 mb-8"
      style={{ height: "76vh" }}
    >
      <Head>
        <title>{metadata.title}</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>
      <div className="flex flex-col gap-6">
        <motion.div
          initial="hidden"
          animate="show"
          exit="hidden"
          className="pb-14 "
        >
          <div className="text-center justify-center flex">
            <h3 className="bold-20 font-extrabold relative leading-normal uppercase text-center">
              Contact U<span className="text-secondary">s</span>
              <span className="tex-[30px] lg:text-[34px] font-extrabold text-white/30 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase">
                Get in touch
              </span>
            </h3>
          </div>
        </motion.div>
        <motion.form
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-1 flex-col gap-4 w-full mx-auto max-w-[33rem]"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-2 w-full">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="regular-14 placeholder:text-gray-50 rounded-full px-4 py-1 bg-white/20 outline-none w-1/2"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="regular-14 placeholder:text-gray-50 rounded-full px-4 py-1 bg-white/20 outline-none w-1/2"
            />
          </div>
          <input
            type="text"
            name="phNo"
            placeholder="Enter Phone Number"
            value={formData.phNo}
            onChange={handleChange}
            className="regular-14 placeholder:text-gray-50 rounded-full px-4 py-1 bg-white/20 outline-none"
          />
          <textarea
            name="message"
            cols="10"
            rows="8"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
            className="regular-14 placeholder:text-gray-50 rounded-xl px-4 py-1 bg-white/20 outline-none resize-none"
          />
          <button
            className={`p-2 rounded-full flexCenter gap-2 w-[11rem] medium-14 relative ${
              isFormValid
                ? "bg-secondary hover:animate-pulse"
                : "bg-secondary cursor-not-allowed"
            }`}
            type="submit"
            disabled={!isFormValid}
          >
            {loading ? (
              <>
                <span className="">Send Message</span>

                <CircleLoader color="#fff" className="ml-2" size={20} />
              </>
            ) : (
              <>
                Send Message
                <span>
                  <HiArrowRight />
                </span>
              </>
            )}
          </button>
        </motion.form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
