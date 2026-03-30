"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, DocumentIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";

export default function SyllabusGrid({ faculties }: { faculties: any[] }) {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const openPdf = (pdfPath: string, title: string) => {
    setSelectedPdf(pdfPath);
    setSelectedTitle(title);
  };

  return (
    <>
      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculties.map((f) => (
          <motion.div
            key={f.slug}
            whileHover={{ scale: 1.02 }}
            onClick={() => openPdf(f.pdfPath, f.title)}
            className="group cursor-pointer bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-orange-500 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <DocumentIcon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {f.title}
                </h3>
              </div>
              <ArrowsPointingOutIcon className="w-5 h-5 text-gray-400 group-hover:text-orange-500" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* PDF Modal */}
      <AnimatePresence>
        {selectedPdf && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPdf(null)}
              className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full h-full max-w-5xl bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
                <h2 className="text-lg font-bold text-gray-900 truncate pr-4">
                  {selectedTitle} - Official Syllabus
                </h2>
                <div className="flex items-center gap-4">
                  <a
                    href={selectedPdf}
                    download
                    className="hidden sm:block text-sm font-semibold text-orange-600 hover:text-orange-700"
                  >
                    Download PDF
                  </a>
                  <button
                    onClick={() => setSelectedPdf(null)}
                    className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <XMarkIcon className="w-7 h-7 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer Body */}
              <div className="flex-1 bg-gray-100 relative">
                <iframe
                  src={`${selectedPdf}#toolbar=0`}
                  className="w-full h-full border-none"
                  title="Syllabus PDF"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}