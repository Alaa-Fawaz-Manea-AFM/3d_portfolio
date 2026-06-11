"use client";
import { fadeIn } from "@/constant/motion";
import { Earth, LoaderCircle, SectionHeader } from ".";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { call } from "@/public/assets";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      toast.error("Please fill all fields");
    } else {
      setLoading(true);

      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_KEY!,

          {
            from_name: name,
            to_name: process.env.NEXT_PUBLIC_NAME_KEY,
            user_email: email,
            to_email: process.env.NEXT_PUBLIC_EMAIL_KEY,
            message: message,
          },
          process.env.NEXT_PUBLIC_PUBLIC_KEY,
        )
        .then(
          () => {
            setLoading(false);
            setName("");
            setEmail("");
            setMessage("");
            toast.success("Thank you for contacting us...");
          },
          () => {
            setLoading(false);
            toast.error("Oops. Please try again.");
          },
        );
    }
  };

  return (
    <div
      id="contact"
      className="px-5 sm:p-16 py-10 flex xl:flex-row flex-col-reverse gap-0 overflow-hidden"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex-[0.75] xxs:p-8"
      >
        <SectionHeader subText="GET IN TOUCH" mainText="Contact" />
        <form
          className="flex flex-col gap-8 mt-12 max-w-3xl"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label className="text-white font-semibold text-[15px] tracking-wide">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="What's your name?"
              required
              className="bg-tertiary border border-white/10 focus:border-neon-purple focus:shadow-[0_0_15px_rgba(145,94,255,0.2)] 
              text-white placeholder:text-secondary rounded-xl py-4 px-6 outline-none 
              font-medium transition-all duration-300 w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white font-semibold text-[15px] tracking-wide">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="What's your email?"
              required
              className="bg-tertiary border border-white/10 focus:border-neon-purple focus:shadow-[0_0_15px_rgba(145,94,255,0.2)] 
              text-white placeholder:text-secondary rounded-xl py-4 px-6 outline-none 
              font-medium transition-all duration-300 w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white font-semibold text-[15px] tracking-wide">
              Your Message
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What do you want to say?"
              required
              className="bg-tertiary border border-white/10 focus:border-neon-purple focus:shadow-[0_0_15px_rgba(145,94,255,0.2)] 
              text-white placeholder:text-secondary rounded-xl py-4 px-6 outline-none 
              font-medium transition-all duration-300 w-full min-h-46 resize-none tracking-wide"
            />
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center justify-between flex-wrap gap-5">
              <button
                disabled={loading}
                type="submit"
                className={`bg-tertiary border border-white/10 text-white font-semibold w-fit py-4 px-8 rounded-xl
                transition-all duration-300 shadow-md flex items-center justify-center
                ${
                  loading
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-neon-purple hover:border-bg-neon-purple hover:shadow-[0_0_20px_rgba(145,94,255,0.4)] active:scale-95 cursor-pointer"
                }`}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <LoaderCircle />
                    <span className="tracking-wide">Sending...</span>
                  </div>
                ) : (
                  <span className="tracking-wide">Send Message</span>
                )}
              </button>
            </div>
            <div className="space-y-4">
              <Link
                href="tel:+201060417763"
                className="bg-tertiary hover:bg-neon-purple text-white border border-white/10 hover:border-neon-purple 
              font-medium flex items-center gap-3 px-4 py-3 rounded-xl w-full sm:w-fit
              transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(145,94,255,0.4)] group"
              >
                <Image
                  src={call}
                  alt="call"
                  width={20}
                  height={20}
                  className="object-contain transition-transform group-hover:scale-110"
                />
                <span className="tracking-wide">+20 106 041 7763</span>
              </Link>

              <Link
                href="tel:+201149789559"
                className="bg-tertiary hover:bg-cyan-600 text-white border border-white/10 hover:border-cyan-500 
              font-medium flex items-center gap-3 px-4 py-3 rounded-xl w-full sm:w-fit
              transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] group"
              >
                <Image
                  src={call}
                  alt="call"
                  width={20}
                  height={20}
                  className="object-contain transition-transform group-hover:scale-110"
                />
                <span className="tracking-wide">+20 114 978 9559</span>
              </Link>
            </div>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <Earth />
      </motion.div>
    </div>
  );
};

export default Contact;
