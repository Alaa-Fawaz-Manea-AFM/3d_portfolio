"use client";
import { fadeIn } from "@/constant/motion";
import { Earth, LoaderCircle } from ".";
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
          process.env.NEXT_PUBLIC_SERVICE_ID!!,
          process.env.NEXT_PUBLIC_TEMPLATE_KEY!!,

          {
            from_name: name,
            to_name: process.env.NEXT_PUBLIC_NAME_KEY,
            user_email: email,
            to_email: process.env.NEXT_PUBLIC_EMAIL_KEY,
            message: message,
          },
          process.env.NEXT_PUBLIC_PUBLIC_KEY
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
          }
        );
    }
  };

  return (
    <div
      id="contact"
      className="sm:px-16 sm:py-16 py-10 flex xl:flex-row flex-col-reverse gap-0 overflow-hidden"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex-[0.75] xxs:p-8"
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          GET IN TOUCH
        </p>
        <h3 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
          Contact.
        </h3>

        <form
          className="flex flex-col gap-8 mt-12 max-w-3xl"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label className="font-medium mb-5">Your Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="What's your name?"
              className="outline-none py-4 px-6 rounded-lg bg-tertiary border-none font-medium"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-5">Your Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="What's your email?"
              className="outline-none py-4 px-6 rounded-lg bg-tertiary border-none font-medium"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-5">Your Message</label>
            <textarea
              minLength={1}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What do you want to say?"
              className=" min-h-[200px] max-h-[200px] outline-none py-4 px-6 rounded-lg tracking-wider  bg-tertiary border-none font-medium"
            />
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <button
              disabled={loading}
              type="submit"
              className={`${
                loading ? "cursor-not-allowed" : ""
              } bg-tertiary w-fit rounded-lg py-4 px-7`}
            >
              {loading ? (
                <div className="flex items-center gap-1">
                  <LoaderCircle />
                  <b>Sending...</b>
                </div>
              ) : (
                "send"
              )}
            </button>

            <Link
              href="tel:+201060417763"
              className="bg-tertiary font-semibold flex items-center gap-2"
            >
              <Image src={call} alt="call" width={20} height={20} />
              +20 106 041 7763
            </Link>
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
