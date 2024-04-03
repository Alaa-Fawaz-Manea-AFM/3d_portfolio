import { A_F_M_1, herobg } from "@/public/assets";
import Image from "next/image";

const Hero = () => (
  <div
    id="home"
    className="min-h-screen pb-10 justify-items-start grid grid-cols-1 lg:grid-cols-2 gap-10 xs:gap-0 pt-28 relative"
  >
    <Image
      src={herobg}
      alt="herobg"
      fill
      className="absolute object-cover -z-10"
    />
    <div className="overflow-hidden sm:px-16 px-6 max-w-7xl mx-auto flex flex-row items-start gap-5">
      <div className="flex flex-col justify-center items-center mt-5">
        <span className="h-5 w-5 rounded-full bg-[#915eff]" />
        <span className="md:h-80 h-40 w-1 violet-gradient" />
      </div>

      <div className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
        <h1>
          Hi, I'm <span className="text-[#915eff]">Alaa</span>
        </h1>
        <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
          I Front End Web developer <br className="sm:block hidden" />
          user interfaces and web applications
        </p>
      </div>
    </div>

    <Image
      src={A_F_M_1.src}
      width={400}
      height={500}
      alt="Vector-2"
      className="rounded-lg mx-auto object-cover"
    />
  </div>
);

export default Hero;
