"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-[#f5f5f7] min-h-screen font-sans text-[#1d1d1f] selection:bg-blue-100">
      <nav className="fixed top-0 w-full z-50 bg-white/75 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-[1000px] mx-auto px-6 h-12 flex items-center justify-between text-[12px] font-medium">
          <span className="text-lg font-bold">Harry</span>
          <div className="space-x-8 opacity-70">
            <a href="#" className="hover:text-blue-600 transition">作品</a>
            <a href="#" className="hover:text-blue-600 transition">关于</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <section className="flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-6"
          >
            Hello, World.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-500 max-w-2xl"
          >
            我是 Harry，一名追求极致交互的全栈开发者。
          </motion.p>
        </section>

        <section className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          <div className="bg-white rounded-[32px] p-12 h-[500px] shadow-sm border border-gray-100 flex flex-col justify-between">
            <h3 className="text-4xl font-bold">项目 A</h3>
            <div className="w-full h-64 bg-gray-50 rounded-2xl border border-dashed border-gray-200" />
          </div>
          <div className="bg-[#1d1d1f] text-white rounded-[32px] p-12 h-[500px] flex flex-col justify-between">
            <h3 className="text-4xl font-bold">项目 B</h3>
            <div className="w-full h-64 bg-blue-500/10 rounded-2xl border border-white/10" />
          </div>
        </section>
      </main>
    </div>
  );
}