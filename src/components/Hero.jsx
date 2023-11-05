import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ParticlesBackground from "../components/Particles/ParticlesBackground";

const Hero = () => {
  return (
    <section className={`relative w-full mx-auto`} style={{ height: "100vh" }}>
      <ParticlesBackground />
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 justify-start`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div style={{ paddingTop: "25px" }}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">ROHIT</span>
          </h1>
          <p className={`${styles.heroSubText} text-2xl mt-2 text-white-100`}>
            <Typewriter
              words={[
                "MERN Developer",
                "Nextjs Developer",
                "Open Source Enthusiast",
                "Student",
                "TECH Enthusiast",
              ]}
              cursor
              loop={10}
              cursorStyle="|"
              cursorBlinking="false"
              typeSpeed={60}
              deleteSpeed={20}
              delaySpeed={1400}
            />
            {/* <br className="sm:block hidden" />
            interfaces and web applications */}
          </p>
          <p className="text-xl mt-2 text-white-100">Welcome To my Portfolio</p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
