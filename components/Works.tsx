"use client";
import { fadeIn, textVariant } from "@/constant/motion";
import { github, Link_ico } from "@/public/assets";
import { motion } from "framer-motion";
import { projects } from "@/constant";
import { IProjects } from "@/types";
import { Tilt } from "react-tilt";
import Image from "next/image";

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
    variants={fadeIn("", "spring", index * 0.5, 1.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="rounded-2xl bg-tertiary mx-auto w-11/12 sm:w-full sm:mx-0"
  >
    <Tilt
      option={{
        speed: 450,
        scale: 1,
        max: 45,
      }}
    >
      <div className="relative w-full h-[230px]">
        <Image
          fill
          src={image.src}
          alt={name}
          className="w-full h-60 rounded-t-3xl object-cover "
        />

        <div className="absolute right-0 top-0">
          <div
            className="w-10 h-10 rounded-full black-gradient p-2 cursor-pointer m-3"
            onClick={() => window.open(source_github_link, "_blank")}
          >
            <Image
              src={github}
              alt="github"
              className="w-1/1 h-1/1 object-contain"
            />
          </div>
          <div
            className="w-10 h-10 rounded-full black-gradient p-2 cursor-pointer m-3"
            onClick={() => window.open(source_web_link, "_blank")}
          >
            <Image
              src={Link_ico}
              alt="Link_ico"
              className="w-1/1 h-1/1 object-contain"
            />

          </div>
        </div>
      </div>

      <div className="mt-5 px-3">
        <h2 className="font-bold text-[24px]">{name}</h2>
        <p className="text-secondary mt-2 text-[14px]">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-5 px-3">
        {tags.map((tag) => (
          <p key={tag.name} className={`${tag.color} text-[14px]`}>
            #{tag.name}
          </p>
        ))}
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
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
        MY WORK
      </p>
      <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Projects.
      </h3>
    </motion.div>

    <motion.p
      variants={fadeIn("right", "", 0.1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px] "
    >
      Following projects showcases my skills and experience through real-world
      examples of my work. Each project is briefly described with links to code
      repositories and live demos in it. It reflects my ability to solve complex
      problems, work with different technologies, and manage projects
      effectively.
    </motion.p>

    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project, i) => (
        <WorkCard index={i} key={i} {...project} />
      ))}
    </div>
  </div>
);

export default Works;
