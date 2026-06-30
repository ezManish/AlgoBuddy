"use client";

import Link from "next/link";
import { Layers, GitBranch, Terminal, HelpCircle, ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function QuizPage() {
  const quizzes = [
    {
      title: "Searching Quiz",
      description: "Practice Linear Search and Binary Search.",
      href: "/visualizer/array/searching/quiz",
      icon: Search,
      themeColor: "bg-cyan-600",
      filename: "searching_quiz.js",
    },
    {
      title: "Sorting Quiz",
      description: "Practice all sorting algorithms including Bubble, Selection, Insertion, Merge, Quick, Heap, Radix, and Counting Sort.",
      href: "/visualizer/array/sorting/quiz",
      icon: Terminal,
      themeColor: "bg-indigo-600",
      filename: "sorting_quiz.js",
    },
    {
      title: "Recursion Quiz",
      description: "Practice all recursion topics.",
      href: "/visualizer/recursion/quiz",
      icon: GitBranch,
      themeColor: "bg-violet-600",
      filename: "recursion_quiz.js",
    },
    {
      title: "Stack Operations Quiz",
      description: "Test your understanding of Push & Pop, Peek, Is Empty, and Is Full operations.",
      href: "/visualizer/stack/quiz",
      icon: Layers,
      themeColor: "bg-fuchsia-600",
      filename: "stack_operations_quiz.js",
    },
    {
      title: "Polish Notation Evaluation Quiz",
      description: "Test your understanding of Prefix and Postfix Expression Evaluation.",
      href: "/visualizer/stack/polish/quiz",
      icon: HelpCircle,
      themeColor: "bg-blue-600",
      filename: "polish_notation_quiz.js",
    },
    {
      title: "Implementation Quiz",
      description: "Practice Stack implementation using Array and Linked List.",
      href: "/visualizer/stack/implementation/quiz",
      icon: Layers,
      themeColor: "bg-emerald-600",
      filename: "stack_impl_quiz.js",
    },
    {
      title: "Monotonic Stack Quiz",
      description: "Practice Largest Rectangle in Histogram.",
      href: "/visualizer/stack/monotonic/quiz",
      icon: Layers,
      themeColor: "bg-teal-600",
      filename: "monotonic_stack_quiz.js",
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#1c1d1f] text-[var(--udemy-text)] dark:text-white transition-colors duration-300 pb-20">
      
      {/* Grid of Quizzes */}
      <div className="max-w-[1100px] mx-auto px-4 pt-6">
        <div className="mb-10">
          <h1 className="font-mono text-4xl md:text-5xl font-bold text-surface-900 dark:text-white">
            <span className="text-violet-500">&gt;</span>{" "}
            Quiz Portal
            <span className="animate-pulse text-violet-500">_</span>
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {quizzes.map((quiz, index) => {
            const IconComponent = quiz.icon;
            return (
              <motion.div
                key={quiz.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className="group flex flex-col h-full rounded-2xl border border-[#e5e7eb] dark:border-[#333] bg-white dark:bg-[#1a1a1a] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* macOS Terminal style top bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-surface-50 dark:bg-[#202020] border-b border-[#e5e7eb] dark:border-[#333]">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-[12px] font-mono text-surface-500 dark:text-surface-400">
                    {quiz.filename}
                  </span>
                </div>

                {/* Main content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${quiz.themeColor} text-white flex items-center justify-center p-2.5 flex-shrink-0 shadow-md`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h2 className="text-[20px] font-extrabold text-surface-900 dark:text-white group-hover:text-[var(--color-primary)] dark:group-hover:text-[var(--color-primary-light)] transition-colors">
                        {quiz.title}
                      </h2>
                      <p className="text-[14px] text-surface-500 dark:text-surface-400 font-medium mt-0.5">
                        Interactive Challenge
                      </p>
                    </div>
                  </div>

                  <p className="text-[14px] text-surface-600 dark:text-surface-300 leading-relaxed mb-6">
                    {quiz.description}
                  </p>

                  <Link href={quiz.href} className="block mt-auto w-full">
                    <button className="w-full h-11 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold text-[14px] flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all">
                      <span>Start Quiz</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}