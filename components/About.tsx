"use client";
import { fadeIn, textVariant } from "@/constant/motion";
import { services, skills } from "@/constant";
import SectionHeader from "./SectionHeader";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => (
  <div
    id="about"
    className="sm:px-16 px-6 sm:py-24 py-16 max-w-7xl mx-auto flex flex-col justify-center gap-12"
  >
    <motion.div
      variants={textVariant()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <SectionHeader subText="Behind The Code" mainText="Overview." />
    </motion.div>

    <motion.div
      variants={fadeIn("up", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col gap-6 max-w-4xl"
    >
      <p className="text-secondary text-[17px] sm:text-[19px] leading-8 text-justify font-normal">
        I am an experienced{" "}
        <span className="text-white/70 font-extrabold underline decoration-neon-purple decoration-2 underline-offset-4">
          Full-Stack Web Developer
        </span>{" "}
        dedicated to engineering scalable, secure, and production-ready
        applications. Proficient across the complete{" "}
        <span className="text-white/70 font-bold">JavaScript</span> and{" "}
        <span className="text-white/70 font-bold">TypeScript</span> ecosystems,
        I build resilient enterprise-grade backends with{" "}
        <span className="text-neon-purple font-bold">Next.js</span> and{" "}
        <span className="text-neon-purple font-bold">Nest.jS</span>. My core
        expertise lies in continuous database optimization using{" "}
        <span className="text-white/70 font-bold">Prisma ORM</span> alongside{" "}
        <span className="text-white/70 font-bold">PostgreSQL</span>, integration
        of low-latency communication via{" "}
        <span className="text-whitetext-white/70 font-bold">
          WebSockets (WS /Socket.io)
        </span>
        , and delivering seamless user interfaces powered by{" "}
        <span className="text-whitetext-white/70 font-bold">TailwindCSS</span>.
      </p>

      <div className="flex flex-wrap gap-3 mt-2">
        {skills.map((tech, idx) => (
          <span
            key={idx}
            className="bg-tertiary/60 border border-white/10 text-white/90 text-xs sm:text-sm font-medium px-4 py-2 rounded-full shadow-inner hover:border-[#f272c8]/40 hover:text-white transition-all duration-300 cursor-default"
          >
            🚀 {tech}
          </span>
        ))}
      </div>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {services.map((service, i) => (
        <Tilt
          key={i}
          glareEnable={true}
          glareMaxOpacity={0.08}
          glareColor="#ffffff"
          scale={1.02}
          className="w-full"
        >
          <motion.div
            variants={fadeIn("right", "spring", i * 0.25, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full h-full bg-green-pink-gradient p-px rounded-[20px] shadow-xl transition-all duration-300"
          >
            <div className="bg-tertiary rounded-[20px] p-6 min-h-68 flex flex-col items-center justify-start border border-white/5 backdrop-blur-xs w-full text-center">
              <div className="bg-tertiary/80 p-2 rounded-xl border border-white/5 shadow-md mb-4 flex justify-center items-center w-14 h-14 shrink-0">
                <Image
                  src={service.icon?.src || service.icon}
                  alt={service.title}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <h3 className="text-[16px] sm:text-[18px] text-white font-bold tracking-wide leading-snug">
                  {service.title}
                </h3>
                <p className="text-secondary text-[12px] sm:text-[13px] leading-relaxed font-light px-1 wrap-break-word">
                  {service.desc}
                </p>
              </div>
            </div>
          </motion.div>
        </Tilt>
      ))}
    </div>
  </div>
);

export default About;
