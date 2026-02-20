"use client";
import { motion } from "framer-motion";

// 动画预设（Apple 风格的丝滑过渡）
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  return (
    <div className="bg-[#f5f5f7] min-h-screen font-sans text-[#1d1d1f] selection:bg-blue-200">
      {/* 顶部导航 */}
      <nav className="fixed top-0 w-full z-50 bg-[#f5f5f7]/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-[1000px] mx-auto px-6 h-14 flex items-center justify-between text-[13px] font-medium tracking-wide">
          <span className="text-lg font-bold tracking-tight">Harry.</span>
          <div className="space-x-8 opacity-80 hidden sm:block">
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#research" className="hover:text-blue-600 transition">Research</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-[1000px] mx-auto">
        
        {/* 头部区域 / Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center text-center mt-10 mb-24"
        >
          {/* 头像区域：请将你的照片命名为 profile.jpg 放入 public 文件夹 */}
          <motion.div variants={fadeInUp} className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 mb-8 overflow-hidden shadow-lg border-4 border-white">
            <img src="/profile.jpg" alt="Dongsheng Hou" className="w-full h-full object-cover" />
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Dongsheng Hou
          </motion.h1>
          
          <motion.div variants={fadeInUp} className="text-xl md:text-2xl text-gray-500 font-medium mb-6">
            Shenzhen, China
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mt-2">
            <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold shadow-sm border border-gray-100">Mathematics</span>
            <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold shadow-sm border border-gray-100">Reinforcement Learning</span>
            <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold shadow-sm border border-gray-100">Software Engineering</span>
          </motion.div>
        </motion.section>

        {/* 关于我 / About Section (Bento Box 布局) */}
        <motion.section 
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          {/* Education Card */}
          <motion.div variants={fadeInUp} className="md:col-span-2 bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Background</h3>
            <h2 className="text-3xl font-bold mb-6">Education & Lab</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-lg">Southern University of Science and Technology (SUSTech)</p>
                <p className="text-gray-500">Undergraduate • Class of 2028</p>
              </div>
              <div>
                <p className="font-semibold text-lg">Shenzhen Middle School</p>
                <p className="text-gray-500">High School • Class of 2024</p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-lg text-blue-600">SUSTech SQL Lab</p>
                <p className="text-gray-500">Current Researcher</p>
              </div>
            </div>
          </motion.div>

          {/* Hobbies Card */}
          <motion.div variants={fadeInUp} className="bg-[#1d1d1f] text-white rounded-[2.5rem] p-10 shadow-sm flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Interests</h3>
              <h2 className="text-3xl font-bold mb-6">Beyond Code.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Basketball', 'Football', 'Guitar', 'Bass', 'Cello', 'Pop Music'].map(hobby => (
                <span key={hobby} className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-md border border-white/10">
                  {hobby}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* 研究项目 / Research Projects Section */}
        <motion.section 
          id="research"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-24"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-10 text-center">
            Current Research
          </motion.h2>

          <div className="space-y-6">
            {/* Project 1 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">Context Engineering Game Theory Algorithms</h3>
                <span className="mt-2 md:mt-0 inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
                  Target: NeurIPS 2026
                </span>
              </div>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Developing advanced game theory algorithms specifically tailored for context engineering applications.
              </p>
              <div className="text-sm font-medium text-gray-400">
                <span className="text-gray-800">Role:</span> Co-first Author <br/>
                <span className="text-gray-800">Collaborators:</span> Yanqiao Chen, Yuhan Rui
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">MARL Algorithms for Financial Quantization</h3>
                <span className="mt-2 md:mt-0 inline-block px-4 py-1.5 bg-purple-50 text-purple-600 rounded-full text-sm font-semibold">
                  Target: ICLR 2027
                </span>
              </div>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Exploring the intersection of Multi-Agent Reinforcement Learning (MARL) and financial quantitative analysis to build robust trading and pricing models.
              </p>
              <div className="text-sm font-medium text-gray-400">
                <span className="text-gray-800">Collaborator:</span> Yanqiao Chen
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">MARL Web Testing</h3>
                <span className="mt-2 md:mt-0 inline-block px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold">
                  Ongoing
                </span>
              </div>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Building a web testing framework based on financial pricing and game theory principles utilizing MARL.
              </p>
              <div className="text-sm font-medium text-gray-400">
                <span className="text-gray-800">Collaborator:</span> YuJia Fan
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 联系方式 / Contact Section */}
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
            <a href="https://github.com/Harryfutcoder" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white rounded-full font-medium shadow-sm hover:shadow-md border border-gray-200 hover:-translate-y-1 transition-all">
              GitHub
            </a>
            <a href="https://www.instagram.com/ishowmilliondollars/" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white rounded-full font-medium shadow-sm hover:shadow-md border border-gray-200 hover:-translate-y-1 transition-all">
              Instagram
            </a>
            <a href="https://www.xiaohongshu.com/user/profile/62b5d3e5000000001902bdc4" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white rounded-full font-medium shadow-sm hover:shadow-md border border-gray-200 hover:-translate-y-1 transition-all">
              Xiaohongshu
            </a>
            <a href="https://www.zhihu.com/people/harry-27-89" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white rounded-full font-medium shadow-sm hover:shadow-md border border-gray-200 hover:-translate-y-1 transition-all">
              Zhihu
            </a>
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 text-sm border-t border-gray-200/50">
        <p>© {new Date().getFullYear()} Dongsheng Hou. All rights reserved.</p>
      </footer>
    </div>
  );
}