"use client";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/constant/motion";
import { technologies } from "@/constant";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const Tech = () => {
  const frontendTech = technologies.slice(0, 8);
  const backendTech = technologies.slice(8);

  const TechCard = ({
    techImg,
    index,
  }: {
    techImg: { icon: string; name: string };
    index: number;
  }) => {
    return (
      <Tilt scale={1.05} transitionSpeed={400} className="w-full max-w-36">
        <motion.div
          variants={fadeIn("up", "spring", (index % 6) * 0.1, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full bg-linear-to-br from-neon-purple/20 to-cyan-500/20 p-px rounded-2xl hover:from-neon-purple/60 hover:to-cyan-500/60 transition-all duration-500 shadow-xl group cursor-pointer border border-white/10"
        >
          <div className="bg-tertiary backdrop-blur-sm rounded-2xl p-5 aspect-square flex flex-col items-center justify-center gap-4 transition-all duration-300">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-white/5 rounded-full blur-md group-hover:bg-neon-purple/20 transition-all duration-300" />
              <Image
                src={techImg.icon}
                alt={techImg.name}
                width={48}
                height={48}
                className="object-contain transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>

            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide text-center transition-colors uppercase">
              {techImg.name}
            </span>
          </div>
        </motion.div>
      </Tilt>
    );
  };

  return (
    <div
      id="tech"
      className="sm:px-16 px-6 sm:py-20 py-12 max-w-7xl mx-auto flex flex-col gap-16"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center sm:text-left"
      >
        <SectionHeader subText="My Skills & Tools" mainText="Technologies" />
      </motion.div>

      <div className="flex flex-col gap-6">
        <h3 className="text-white font-bold text-[22px] border-l-4 border-neon-purple pl-3 tracking-wide">
          Frontend Core
        </h3>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center">
          {frontendTech.map((techImg, i) => (
            <TechCard key={i} techImg={techImg} index={i} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-white font-bold text-[22px] border-l-4 border-cyan-400 pl-3 tracking-wide">
          Backend & Databases
        </h3>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center">
          {backendTech.map((techImg, i) => (
            <TechCard key={i} techImg={techImg} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
