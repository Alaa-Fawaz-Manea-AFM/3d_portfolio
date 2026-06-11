"use client";

interface SectionHeaderProps {
  subText: string;
  mainText: string;
}

const SectionHeader = ({ subText, mainText }: SectionHeaderProps) => {
  return (
    <div className="text-center sm:text-left mb-10 group/header w-fit select-none">
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-widest font-semibold mb-1">
        {subText}
      </p>

      <h2 className="relative text-neon-purple font-black md:text-[50px] sm:text-[40px] text-[32px] tracking-tight leading-tight inline-block pb-3">
        {mainText}
        <span className="text-purple drop-shadow-[0_0_10px_#915eff]">.</span>
        <span className="absolute bottom-0 left-0 h-1 w-12 bg-linear-to-r from-neon-purple to-cyan-400 rounded-full transition-all duration-500 ease-out group-hover/header:w-full shadow-[0_0_12px_rgba(145,94,255,0.6)]" />
      </h2>
    </div>
  );
};

export default SectionHeader;
