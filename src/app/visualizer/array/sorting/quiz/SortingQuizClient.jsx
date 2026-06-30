"use client";

import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function SortingQuizClient() {
  const quizzes = [
    {
      title: "Bubble Sort Quiz",
      href: "/visualizer/array/sorting/quiz/bubblesort",
      filename: "bubble_sort_quiz.js",
      description: "Test your understanding of adjacent swapping, bubble iterations, and bubble sort characteristics.",
    },
    {
      title: "Selection Sort Quiz",
      href: "/visualizer/array/sorting/quiz/selectionsort",
      filename: "selection_sort_quiz.js",
      description: "Test your understanding of scanning for minimum values, positional swaps, and performance parameters.",
    },
    {
      title: "Insertion Sort Quiz",
      href: "/visualizer/array/sorting/quiz/insertionsort",
      filename: "insertion_sort_quiz.js",
      description: "Test your knowledge of key shifting, sorting sub-arrays, and adaptive scenarios.",
    },
    {
      title: "Merge Sort Quiz",
      href: "/visualizer/array/sorting/quiz/mergesort",
      filename: "merge_sort_quiz.js",
      description: "Test your knowledge of divide-and-conquer strategy, split phases, and merging procedures.",
    },
    {
      title: "Quick Sort Quiz",
      href: "/visualizer/array/sorting/quiz/quicksort",
      filename: "quick_sort_quiz.js",
      description: "Test your knowledge of pivot selections, partitioning strategies, and recursion trees.",
    },
    {
      title: "Heap Sort Quiz",
      href: "/visualizer/array/sorting/quiz/heapsort",
      filename: "heap_sort_quiz.js",
      description: "Test your understanding of heapify operations, tree structure structures, and heap-based deletion.",
    },
    {
      title: "Radix Sort Quiz",
      href: "/visualizer/array/sorting/quiz/radixsort",
      filename: "radix_sort_quiz.js",
      description: "Test your understanding of digit-based sorting, stable sub-sorts, and non-comparative sorting.",
    },
    {
      title: "Counting Sort Quiz",
      href: "/visualizer/array/sorting/quiz/countingsort",
      filename: "counting_sort_quiz.js",
      description: "Test your knowledge of frequency arrays, prefix sums, and stable index mappings.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#1c1d1f] text-[var(--udemy-text)] dark:text-white transition-colors duration-300 pb-20">
      
      {/* Header / Hero */}
      <section className="relative pt-16 pb-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/visualizer/quiz">
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] dark:text-[var(--color-primary-light)] hover:opacity-85 transition-opacity mb-4">
              <ArrowLeft size={16} />
              <span>Back to all quizzes</span>
            </button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-black mb-3">
            Sorting Quiz Portal
          </h1>
          <p className="text-surface-600 dark:text-surface-400 font-medium max-w-lg mx-auto">
            Test your understanding of sorting algorithms. Choose a specific algorithm quiz below.
          </p>
        </div>
      </section>

      {/* Grid of Sub-quizzes */}
      <div className="max-w-[1100px] mx-auto px-4 mt-8">
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {quizzes.map((quiz, index) => (
            <motion.div
              key={quiz.title}
              initial={{ opacity: 0, y: 20 }}
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

              {/* Main Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-[20px] font-extrabold text-surface-900 dark:text-white group-hover:text-[var(--color-primary)] dark:group-hover:text-[var(--color-primary-light)] transition-colors mb-2">
                    {quiz.title}
                  </h2>
                  <p className="text-[14px] text-surface-600 dark:text-surface-300 leading-relaxed mb-6">
                    {quiz.description}
                  </p>
                </div>

                <Link href={quiz.href} className="block mt-auto w-full">
                  <button className="w-full h-11 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold text-[14px] flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all">
                    <span>Start Quiz</span>
                    <Play size={14} className="fill-current" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}