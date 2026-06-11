// "use client";
// import { A_F_M_1, herobg, call } from "@/public/assets";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const Hero = () => (
//   <div
//     id="home"
//     className="min-h-screen max-h-7xl w-full flex items-center justify-center relative overflow-hidden pt-28 sm:pt-36 pb-16"
//   >
//     <Image
//       src={herobg}
//       alt="herobg"
//       fill
//       priority
//       className="absolute object-cover -z-10 opacity-70"
//     />

//     <div className="absolute top-[15%] left-[10%] w-96 h-96 bg-neon-purple/15 rounded-full blur-[130px] -z-10 pointer-events-none animate-pulse" />
//     <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] -z-10 pointer-events-none animate-pulse duration-4000" />

//     <div className="sm:px-16 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
//       <div className="lg:col-span-5 flex justify-center items-center w-full order-1 lg:order-2">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9, y: 20 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//           className="relative group w-full max-w-96 aspect-4/5 bg-linear-to-br from-neon-purple/30 to-cyan-500/30 p-px rounded-3xl shadow-2xl shadow-black/60"
//         >
//           <div className="absolute inset-0 bg-linear-to-br from-neon-purple to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-25 blur-xl transition-all duration-500" />

//           <div className="w-full h-full relative overflow-hidden rounded-3xl bg-tertiary/60 backdrop-blur-sm border border-white/5 group-hover:border-neon-purple/50 transition-all duration-500">
//             <Image
//               src={A_F_M_1.src || A_F_M_1}
//               alt="Alaa Fawaz"
//               fill
//               priority
//               className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
//             />
//           </div>
//         </motion.div>
//       </div>

//       <div className="lg:col-span-7 flex flex-row items-start gap-5 w-full order-2 lg:order-1">
//         <div className="flex flex-col justify-center items-center mt-5">
//           <span className="h-5 w-5 rounded-full bg-neon-purple shadow-[0_0_20px_#915eff]" />
//           <span className="w-1 sm:h-80 h-40 bg-linear-to-b from-neon-purple to-transparent" />
//         </div>

//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="flex flex-col items-start gap-6"
//         >
//           <div className="flex flex-col gap-2">
//             <h1 className="font-black text-white lg:text-[75px] sm:text-[55px] xs:text-[45px] text-[36px] leading-tight tracking-tight">
//               Hi, {"I'm"}
//               <span className="text-neon-purple drop-shadow-[0_0_15px_rgba(145,94,255,0.4)] ml-2">
//                 Alaa
//               </span>
//             </h1>

//             <p className="text-[#dfd9ff] font-medium lg:text-[24px] sm:text-[20px] xs:text-[18px] text-[15px] lg:leading-10 max-w-xl text-balance">
//               A passionate
//               <span className="text-white font-semibold border-b-2 border-cyan-400 pb-0.5">
//                 Full-Stack Web Developer
//               </span>
//               creating robust architectures, real-time applications, and
//               seamless user experiences.
//             </p>
//           </div>

//           <div className="flex flex-col gap-4 w-full sm:w-fit bg-tertiary/80 border border-white/5 backdrop-blur-sm p-5 rounded-2xl shadow-xl">
//             <h3 className="text-white font-semibold text-[17px] border-l-4 border-cyan-400 pl-3">
//               Get in Touch:
//             </h3>
//             <div className="flex flex-col gap-3">
//               <a
//                 href="tel:+201060417763"
//                 className="flex items-center gap-3 text-[#dfd9ff] hover:text-neon-purple group"
//               >
//                 <Image
//                   src={call}
//                   alt="call"
//                   width={22}
//                   height={22}
//                   className="group-hover:scale-110 transition-transform"
//                 />
//                 <span className="font-mono tracking-tight text-[15px] group-hover:underline">
//                   +20 10 6041 7763
//                 </span>
//               </a>
//               <a
//                 href="tel:+201149789559"
//                 className="flex items-center gap-3 text-[#dfd9ff] hover:text-cyan-400 group"
//               >
//                 <Image
//                   src={call}
//                   alt="call"
//                   width={22}
//                   height={22}
//                   className="group-hover:scale-110 transition-transform invert"
//                 />
//                 <span className="font-mono tracking-tight text-[15px] group-hover:underline">
//                   +20 11 4978 9559
//                 </span>
//               </a>
//             </div>
//           </div>

//           <a
//             href="/Alaa_Fawaz_Full_Stack_CV.pdf"
//             download="Alaa_Fawaz_Full_Stack_CV.pdf"
//             className="px-6 py-3.5 bg-linear-to-r from-neon-purple to-neon-purple text-white font-bold rounded-xl
//                       shadow-[0_0_15px_rgba(145,94,255,0.3)] hover:shadow-[0_0_25px_rgba(145,94,255,0.6)]
//                       hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
//           >
//             <span>Download CV</span>
//             <svg
//               className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-y-0.5"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2.5"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
//               />
//             </svg>
//           </a>
//         </motion.div>
//       </div>
//     </div>

//     <div className="absolute xs:bottom-10 bottom-4 w-full flex justify-center items-center z-20">
//       <a href="#about" className="group">
//         <div className="w-9 h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2 opacity-60 hover:opacity-100 hover:border-neon-purple transition-all duration-300">
//           <motion.div
//             animate={{ y: [0, 24, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//             className="w-3 h-3 rounded-full bg-secondary group-hover:bg-neon-purple mb-1"
//           />
//         </div>
//       </a>
//     </div>
//   </div>
// );

// export default Hero;

"use client";
import { A_F_M_1, herobg, call } from "@/public/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => (
  <div
    id="home"
    className="min-h-screen max-h-7xl w-full flex items-center justify-center relative overflow-hidden pt-28 sm:pt-36 pb-16"
  >
    <Image
      src={herobg}
      alt="herobg"
      fill
      priority
      className="absolute object-cover -z-10 opacity-70"
    />

    <div className="absolute top-[15%] left-[10%] w-96 h-96 bg-neon-purple/15 rounded-full blur-[130px] -z-10 pointer-events-none animate-pulse" />
    <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] -z-10 pointer-events-none animate-pulse duration-4000" />

    <div className="mb-20 sm:px-16 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
      <div className="lg:col-span-5 flex justify-center items-center w-full order-1 lg:order-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative group w-full max-w-96 aspect-4/5 bg-linear-to-br from-neon-purple/30 to-cyan-500/30 p-px rounded-3xl shadow-2xl shadow-black/60"
        >
          <div className="absolute inset-0 bg-linear-to-br from-neon-purple to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-25 blur-xl transition-all duration-500" />
          <div className="w-full h-full relative overflow-hidden rounded-3xl bg-tertiary/60 backdrop-blur-sm border border-white/5 group-hover:border-neon-purple/50 transition-all duration-500">
            <Image
              src={A_F_M_1.src || A_F_M_1}
              alt="Alaa Fawaz"
              fill
              priority
              className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
            />
          </div>
        </motion.div>
      </div>

      <div className="lg:col-span-7 flex flex-row items-start gap-5 w-full order-2 lg:order-1">
        <div className="flex flex-col justify-center items-center mt-5">
          <span className="h-5 w-5 rounded-full bg-neon-purple shadow-[0_0_20px_#915eff]" />
          <span className="w-1 sm:h-80 h-40 bg-linear-to-b from-neon-purple to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-6 w-full"
        >
          <div className="flex flex-col gap-2">
            <h1 className="font-black text-white lg:text-[75px] sm:text-[55px] xs:text-[45px] text-[36px] leading-tight tracking-tight">
              Hi, {"I'm"}
              <span className="text-neon-purple drop-shadow-[0_0_15px_rgba(145,94,255,0.4)] ml-2">
                Alaa
              </span>
            </h1>

            <p className="text-[#dfd9ff] font-medium lg:text-[24px] sm:text-[20px] xs:text-[18px] text-[15px] lg:leading-10 max-w-xl text-balance">
              A passionate{" "}
              <span className="text-white font-semibold border-b-2 border-neon-purple pb-0.5">
                Full-Stack Web Developer
              </span>{" "}
              creating robust architectures, real-time applications, and
              seamless user experiences.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-fit sm:min-w-72 bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-2xl shadow-xl">
            <h3 className="text-white font-semibold text-[16px] border-l-4 border-neon-purple pl-3">
              Get in Touch:
            </h3>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+201060417763"
                className="flex items-center gap-3 text-[#dfd9ff] hover:text-neon-purple transition-colors group"
              >
                <Image
                  src={call}
                  alt="call"
                  width={18}
                  height={18}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="font-mono text-[14px] sm:text-[15px]">
                  +20 10 6041 7763
                </span>
              </a>
              <a
                href="tel:+201149789559"
                className="flex items-center gap-3 text-[#dfd9ff] hover:text-neon-purple transition-colors group"
              >
                <Image
                  src={call}
                  alt="call"
                  width={18}
                  height={18}
                  className="group-hover:scale-110 transition-transform invert"
                />
                <span className="font-mono text-[14px] sm:text-[15px]">
                  +20 11 4978 9559
                </span>
              </a>
            </div>

            <a
              href="/Alaa_Fawaz_Full_Stack_CV.pdf"
              download="Alaa_Fawaz_Full_Stack_CV.pdf"
              className="relative inline-flex items-center justify-center p-[1.5px] w-full text-sm font-bold text-white rounded-xl bg-linear-to-br from-neon-purple to-cyan-500 transition-all duration-300 hover:scale-[1.02] active:scale-98 shadow-[0_0_15px_rgba(145,94,255,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] group/btn"
            >
              <span className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#1d1836] bg-opacity-100 rounded-[11px] transition-all duration-300 group-hover/btn:bg-opacity-0">
                <span>Download CV</span>

                {/* ⚡ الأيقونة: ضفنا group-hover/btn:animate-bounce عشان تبدأ تتحرك فوق وتحت أول ما تقف بالماوس */}
                <svg
                  className="w-5 h-5 text-cyan-400 group-hover/btn:text-white transition-all duration-300 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </span>
            </a>
            {/* <a
              href="/Alaa_Fawaz_Full_Stack_CV.pdf"
              download="Alaa_Fawaz_Full_Stack_CV.pdf"
              className="relative inline-flex items-center justify-center p-[1.5px] w-full text-sm font-bold text-white rounded-xl bg-linear-to-br from-neon-purple to-cyan-500 transition-all duration-300 hover:scale-[1.02] active:scale-98 shadow-[0_0_15px_rgba(145,94,255,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] group/btn"
            >
              <span className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#1d1836] bg-opacity-100 rounded-[11px] transition-all duration-300 group-hover/btn:bg-opacity-0">
                <span>Download CV</span>
                <svg
                  className="w-5 h-5 text-cyan-400 group-hover/btn:text-white group-hover/btn:scale-110 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </span>
            </a>
         */}
          </div>
        </motion.div>
      </div>
    </div>

    {/* سهم النزول لأسفل */}
    <div className="absolute xs:bottom-10 bottom-4 w-full flex justify-center items-center z-20">
      <a href="#about" className="group">
        <div className="w-9 h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2 opacity-60 hover:opacity-100 hover:border-neon-purple transition-all duration-300">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-3 h-3 rounded-full bg-secondary group-hover:bg-neon-purple mb-1"
          />
        </div>
      </a>
    </div>
  </div>
);

export default Hero;
