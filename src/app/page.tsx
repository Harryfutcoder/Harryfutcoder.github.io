"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const springCard: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const researchInterests = [
  "Reinforcement Learning",
  "Game Theory",
  "World Model",
  "Software Engineering",
  "Multi-Agent RL",
  "Automated Testing"
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return stored ? stored === "dark" : prefersDark;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen font-sans text-gray-900 dark:text-white selection:bg-blue-200 dark:selection:bg-blue-800 transition-colors duration-300">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-50/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/10">
        <div className="max-w-[1000px] mx-auto px-6 h-14 flex items-center justify-between text-[13px] font-medium tracking-wide">
          <span className="text-lg font-bold tracking-tight">Dongsheng Hou</span>
          <div className="flex items-center gap-6">
            <div className="space-x-8 opacity-80 hidden sm:block">
              <a href="#about" className="hover:text-blue-500 transition">About</a>
              <a href="#research" className="hover:text-blue-500 transition">Research</a>
              <a href="#interests" className="hover:text-blue-500 transition">Interests</a>
              <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
            </div>
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors duration-200"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zm6.364 2.636a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM21 11a1 1 0 110 2h-1a1 1 0 110-2h1zM17.657 17.657a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 010 1.414zM12 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM6.343 17.657a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM4 11a1 1 0 110 2H3a1 1 0 110-2h1zm3.05-7.364a1 1 0 011.414 1.414l-.707.707A1 1 0 016.343 4.343l.707-.707zM12 7a5 5 0 100 10A5 5 0 0012 7z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-[1000px] mx-auto">

        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mt-10 mb-24"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full max-w-[360px] md:w-80 lg:w-96 aspect-[3/4] rounded-[2rem] bg-gray-200 dark:bg-gray-800 overflow-hidden shadow-lg border-4 border-white dark:border-white/20"
            >
              <img
                src="/profile.JPG"
                alt="Portrait photo of Dongsheng Hou"
                className="w-full h-full object-contain"
              />
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400"
              >
                Dongsheng Hou
              </motion.h1>

              <motion.div variants={fadeInUp} className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium">
                Shenzhen, China
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-6 grid gap-6">
                <div className="backdrop-blur-xl bg-white/70 dark:bg-white/5 rounded-[2rem] p-6 shadow-sm border border-gray-100 dark:border-white/10">
                  <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Education Background</h3>
                  <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
                    <li>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">Southern University of Science and Technology (SUSTech)</p>
                      <p className="text-sm">Undergraduate • Class of 2028</p>
                    </li>
                    <li>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">Shenzhen Middle School</p>
                      <p className="text-sm">High School • Class of 2024</p>
                    </li>
                  </ul>
                </div>

                <div className="backdrop-blur-xl bg-white/70 dark:bg-white/5 rounded-[2rem] p-6 shadow-sm border border-gray-100 dark:border-white/10">
                  <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Research Interests</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {researchInterests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 rounded-full text-sm font-semibold bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          {/* Education Card */}
          <motion.div
            variants={springCard}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="md:col-span-2 backdrop-blur-xl bg-white/70 dark:bg-white/5 rounded-[2.5rem] p-10 shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-xl dark:hover:shadow-white/5 transition-shadow"
          >
            <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Background</h3>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Education & Lab</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-lg">Southern University of Science and Technology (SUSTech)</p>
                <p className="text-gray-500 dark:text-gray-400">Undergraduate • Class of 2028</p>
              </div>
              <div>
                <p className="font-semibold text-lg">Shenzhen Middle School</p>
                <p className="text-gray-500 dark:text-gray-400">High School • Class of 2024</p>
              </div>
              <div className="pt-4 border-t border-gray-100 dark:border-white/10">
                <p className="font-semibold text-lg text-blue-600 dark:text-blue-400">SUSTech SQL Lab</p>
                <p className="text-gray-500 dark:text-gray-400">Current Researcher</p>
              </div>
            </div>
          </motion.div>

          {/* Hobbies Card */}
          <motion.div
            variants={springCard}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-gray-900 dark:bg-white/5 backdrop-blur-xl text-white rounded-[2.5rem] p-10 shadow-sm border border-white/10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Interests</h3>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Beyond Code.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Basketball', 'Football', 'Guitar', 'Bass', 'Cello', 'Pop Music', 'Rap', 'R&B', 'Fitness', 'Travel'].map(hobby => (
                <span key={hobby} className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-md border border-white/10">
                  {hobby}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Research Projects Section */}
        <motion.section
          id="research"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-24"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400"
          >
            Current Research
          </motion.h2>

          <div className="space-y-6">
            {/* Project 1 */}
            <motion.div
              variants={springCard}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="backdrop-blur-xl bg-white/70 dark:bg-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-xl dark:hover:shadow-white/5 group transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <span className="text-3xl md:text-4xl font-black">S</span>HAPLEY
                  <span className="text-3xl md:text-4xl font-black">C</span>ONTEXT
                  <span className="text-3xl md:text-4xl font-black">P</span>RUNING: A Cooperative Game Perspective for Context Reranking and Pruning
                </h3>
                <span className="mt-2 md:mt-0 inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold border border-blue-100 dark:border-blue-500/20">
                  Submitted: NeurIPS 2026
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4 leading-relaxed">
                Framing context reranking and pruning as a cooperative game to surface high-value evidence with Shapley-style contributions.
              </p>
              <div className="text-sm font-medium text-gray-400 dark:text-gray-500">
                <span className="text-gray-800 dark:text-gray-300">Role:</span> First Author <br/>
                <span className="text-gray-800 dark:text-gray-300">Collaborators:</span> Yanqiao Chen, Yuhan Rui
              </div>
              <div className="mt-4">
                <a href="https://arxiv.org" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  arXiv (TBD)
                </a>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              variants={springCard}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="backdrop-blur-xl bg-white/70 dark:bg-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-xl dark:hover:shadow-white/5 group transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  From Spatial to Spectral: An Efficient, Frequency-Guided Feature Representation Learner for Small Object Detection
                </h3>
                <span className="mt-2 md:mt-0 inline-block px-4 py-1.5 bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-full text-sm font-semibold border border-sky-100 dark:border-sky-500/20">
                  Submitted: NeurIPS 2026
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4 leading-relaxed">
                TL;DR: From Spatial to Spectral, we introduce a plug-and-play Decompose–Enhance–Reconstruct (DER) operator instantiated in the backbone/neck/head to preserve high-frequency cues for efficient small-object detection across diverse detectors.
              </p>
              <div className="text-sm font-medium text-gray-400 dark:text-gray-500">
                <span className="text-gray-800 dark:text-gray-300">Role:</span> Second Author
              </div>
              <div className="mt-4">
                <a href="https://arxiv.org" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  arXiv (TBD)
                </a>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              variants={springCard}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="backdrop-blur-xl bg-white/70 dark:bg-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-xl dark:hover:shadow-white/5 group transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Dealing with Sparse Reward Problems in Reinforcement Learning</h3>
                <span className="mt-2 md:mt-0 inline-block px-4 py-1.5 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold border border-purple-100 dark:border-purple-500/20">
                  Target: ICLR 2027
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4 leading-relaxed">
                Investigating strategies and algorithms to overcome sparse reward challenges in reinforcement learning environments, enabling agents to learn effectively in settings where feedback is rare or delayed.
              </p>
              <div className="text-sm font-medium text-gray-400 dark:text-gray-500">
                <span className="text-gray-800 dark:text-gray-300">Role:</span> First Author <br/>
                <span className="text-gray-800 dark:text-gray-300">Collaborator:</span> Yanqiao Chen
              </div>
              <div className="mt-4">
                <a href="https://arxiv.org" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  arXiv (TBD)
                </a>
              </div>
            </motion.div>

            {/* Project 4 */}
            <motion.div
              variants={springCard}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="backdrop-blur-xl bg-white/70 dark:bg-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-xl dark:hover:shadow-white/5 group transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">SubWebTest</h3>
                <span className="mt-2 md:mt-0 inline-block px-4 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold border border-emerald-100 dark:border-emerald-500/20">
                  Target: ICSE 2027
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4 leading-relaxed">
                Developing a submodular reinforcement learning framework for automated web testing, replacing additive rewards with history-dependent marginal gains to maximize unique state coverage. Proposes SUBPO policy optimization with constant-factor guarantees under bounded curvature and gradient variance reduction, and validates improved exploration efficiency and coverage stability across real web apps.
              </p>
              <div className="text-sm font-medium text-gray-400 dark:text-gray-500">
                <span className="text-gray-800 dark:text-gray-300">Role:</span> First Author
              </div>
              <div className="mt-4">
                <a href="https://arxiv.org" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  arXiv (TBD)
                </a>
              </div>
            </motion.div>

            {/* Project 5 */}
            <motion.div
              variants={springCard}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="backdrop-blur-xl bg-white/70 dark:bg-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-xl dark:hover:shadow-white/5 group transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">BP-CRL</h3>
                <span className="mt-2 md:mt-0 inline-block px-4 py-1.5 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full text-sm font-semibold border border-amber-100 dark:border-amber-500/20">
                  Target: AAAI 2027
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4 leading-relaxed">
                Tackling the tail blind spot in safe reinforcement learning. BP-CRL models epistemic uncertainty with an ensemble of critics and replaces high-variance CVaR estimation with a closed-form Bachelier formula for low-cost tail-risk shaping, suppressing catastrophic trajectories in navigation and continuous control tasks to deliver lightweight, stable tail protection.
              </p>
              <div className="text-sm font-medium text-gray-400 dark:text-gray-500">
                <span className="text-gray-800 dark:text-gray-300">Role:</span> First Author
              </div>
              <div className="mt-4">
                <a href="https://arxiv.org" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  arXiv (TBD)
                </a>
              </div>
            </motion.div>

            {/* Project 6 */}
            <motion.div
              variants={springCard}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="backdrop-blur-xl bg-white/70 dark:bg-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-xl dark:hover:shadow-white/5 group transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">ShapTCP</h3>
                <span className="mt-2 md:mt-0 inline-block px-4 py-1.5 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-semibold border border-indigo-100 dark:border-indigo-500/20">
                  Target: ISSTA 2027
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4 leading-relaxed">
                Developing game-theoretic test case prioritization methods for software testing. ShapTCP applies cooperative game theory with Shapley-value scarcity weighting to reduce redundant execution and surface rare fault-revealing tests earlier.
              </p>
              <div className="text-sm font-medium text-gray-400 dark:text-gray-500">
                <span className="text-gray-800 dark:text-gray-300">Role:</span> First Author
              </div>
              <div className="mt-4">
                <a href="https://arxiv.org" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  arXiv (TBD)
                </a>
              </div>
            </motion.div>

            {/* Project 7 */}
            <motion.div
              variants={springCard}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="backdrop-blur-xl bg-white/70 dark:bg-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-xl dark:hover:shadow-white/5 group transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">GuardTCP</h3>
                <span className="mt-2 md:mt-0 inline-block px-4 py-1.5 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-semibold border border-indigo-100 dark:border-indigo-500/20">
                  Target: ISSTA 2027
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4 leading-relaxed">
                Extending the direction with a non-cooperative robust optimization view, modeling test prioritization as an adversarial game against distribution shifts in CI environments.
              </p>
              <div className="text-sm font-medium text-gray-400 dark:text-gray-500">
                <span className="text-gray-800 dark:text-gray-300">Role:</span> First Author
              </div>
              <div className="mt-4">
                <a href="https://arxiv.org" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  arXiv (TBD)
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Research Interests Section */}
        <motion.section
          id="interests"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-24"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400"
          >
            Research Interests
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchInterests.map((interest) => (
              <motion.div
                key={interest}
                variants={springCard}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="backdrop-blur-xl bg-white/70 dark:bg-white/5 rounded-[2.5rem] p-8 shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-xl dark:hover:shadow-white/5 transition-shadow"
              >
                <h3 className="text-lg font-semibold tracking-tight">{interest}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center py-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-8">Connect with me.</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="https://github.com/Harryfutcoder" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white dark:bg-white/5 backdrop-blur-xl rounded-full font-medium shadow-sm hover:shadow-md border border-gray-200 dark:border-white/10 hover:-translate-y-1 transition-all">
              GitHub
            </a>
            <a href="https://www.instagram.com/ishowmilliondollars/" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white dark:bg-white/5 backdrop-blur-xl rounded-full font-medium shadow-sm hover:shadow-md border border-gray-200 dark:border-white/10 hover:-translate-y-1 transition-all">
              Instagram
            </a>
            <a href="https://www.xiaohongshu.com/user/profile/62b5d3e5000000001902bdc4" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white dark:bg-white/5 backdrop-blur-xl rounded-full font-medium shadow-sm hover:shadow-md border border-gray-200 dark:border-white/10 hover:-translate-y-1 transition-all">
              Xiaohongshu
            </a>
            <a href="https://www.zhihu.com/people/harry-27-89" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white dark:bg-white/5 backdrop-blur-xl rounded-full font-medium shadow-sm hover:shadow-md border border-gray-200 dark:border-white/10 hover:-translate-y-1 transition-all">
              Zhihu
            </a>
          </div>
          <div className="mt-8 flex flex-col items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">Mail</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="mailto:12410421@mail.sustech.edu.cn" className="px-5 py-2 bg-white dark:bg-white/5 backdrop-blur-xl rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-white/10 hover:shadow-md hover:-translate-y-1 transition-all">
                12410421@mail.sustech.edu.cn
              </a>
              <a href="mailto:harryhou174@gmail.com" className="px-5 py-2 bg-white dark:bg-white/5 backdrop-blur-xl rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-white/10 hover:shadow-md hover:-translate-y-1 transition-all">
                harryhou174@gmail.com
              </a>
            </div>
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 dark:text-gray-600 text-sm border-t border-gray-200/50 dark:border-white/10">
        <p>© {new Date().getFullYear()} Dongsheng Hou. All rights reserved.</p>
      </footer>
    </div>
  );
}