"use client";
import { fadeIn, textVariant } from "@/constant/motion";
import { motion } from "framer-motion";
import { services } from "@/constant";
import { Tilt } from "react-tilt";
import Image from "next/image";

const About = () => (
  <div id="about" className="sm:px-16 px-6 sm:py-16 py-10">
    <motion.div
      variants={textVariant()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="pt-8"
    >
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
        INTRODUCTION
      </p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Overview.
      </h2>
    </motion.div>

    <motion.p
      variants={fadeIn("right", "", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
    >
      Front End Web Developer specializing in building modern web applications using the latest web technologies. Extensive experience in developing and designing responsive and attractive user interfaces using HTML, CSS, and JavaScript, along with proficiency in React.js framework and advanced technologies like Next.js and TypeScript. Capable of utilizing ChatGPT in project creation and enhancement in a creative and innovative manner.
    </motion.p>

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mt-20 flex flex-wrap gap-10"
    >
      {services.map((service, i) => (
        <Tilt key={i} className="xs:w-[250px] w-full">
          <motion.div
            variants={fadeIn("right", "spring", i * 0.5, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div className="bg-tertiary rounded-[20px] py-5 px-12 h-[280px] flex justify-evenly items-center flex-col">
              <Image
                src={service.icon.src}
                alt={service.title}
                width={64}
                height={64}
                className="object-contain"
              />
              <h3 className="text-[20px] text-center font-bold">
                {service.title}
              </h3>
            </div>
          </motion.div>
        </Tilt>
      ))}
    </motion.div>
  </div>
);

export default About;
