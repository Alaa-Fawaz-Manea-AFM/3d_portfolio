"use client";
import { fadeIn, textVariant } from "@/constant/motion";
import { github, Link_ico } from "@/public/assets";
import { motion } from "framer-motion";
import { projects } from "@/constant";
import { IProjects } from "@/types";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

type Work = IProjects & {
  index: number;
};

const WorkCard = ({
  name,
  tags,
  image,
  index,
  description,
  source_web_link,
  source_github_link,
}: Work) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.25, 1.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
    className="group rounded-2xl bg-tertiary mx-auto w-full lg:mx-0 flex flex-col h-full"
  >
    <Tilt
      scale={1.02}
      transitionSpeed={250}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      className="w-full h-full flex flex-col flex-1"
    >
      <div className="w-full h-full rounded-2xl border-2 border-white/5 group-hover:border-neon-purple transition-all duration-500 ease-out hover:shadow-[0_0_20px_rgba(145,94,255,0.4)] overflow-hidden pb-6 flex flex-col justify-between flex-1">
        <div>
          <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
            <Image
              fill
              src={typeof image === "string" ? image : image.src}
              alt={name}
              priority={index < 2}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute right-3 top-3 flex flex-col gap-2 z-20">
              {source_github_link && (
                <div
                  className="w-9 h-9 rounded-full black-gradient p-2 cursor-pointer flex items-center justify-center hover:scale-110 transition-transform shadow-lg border border-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(source_github_link, "_blank");
                  }}
                >
                  <Image
                    src={github}
                    alt="github"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
              )}

              {source_web_link && (
                <div
                  className="w-9 h-9 rounded-full black-gradient p-2 cursor-pointer flex items-center justify-center hover:scale-110 transition-transform shadow-lg border border-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(source_web_link, "_blank");
                  }}
                >
                  <Image
                    src={Link_ico}
                    alt="Link_ico"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mt-5 px-4">
            <h2 className="font-black text-[20px] text-white tracking-tight group-hover:text-neon-purple transition-colors duration-300">
              {name}
            </h2>
            {description.map((desc, i) => (
              <p
                key={i}
                className="text-[#dfd9ff] mt-2 text-[12px] leading-relaxed text-balance"
              >
                {desc}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-5 px-4">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`${tag.color} text-[13px] font-medium font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/5`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => (
  <div className="sm:px-16 px-6 sm:py-16 py-10" id="work">
    <motion.div
      variants={textVariant()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="pt-8"
    >
      <SectionHeader subText="MY WORK" mainText="Projects" />
    </motion.div>

    <motion.p
      variants={fadeIn("right", "tween", 0.1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="text-secondary mt-3 max-w-3xl text-[17px] leading-8 "
    >
      Following projects showcases my skills and experience through real-world
      examples of my work. Each project is briefly described with links to code
      repositories and live demos in it. It reflects my ability to solve complex
      problems, work with different technologies, and manage projects
      effectively.
    </motion.p>

    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 items-stretch">
      {projects.map((project, i) => (
        <WorkCard index={i} key={i} {...project} />
      ))}
    </div>
  </div>
);

export default Works;
