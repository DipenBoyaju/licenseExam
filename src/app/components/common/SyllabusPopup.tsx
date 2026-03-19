'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { RxCross2 } from "react-icons/rx";

interface SyllabusPopupProps {
  pdfPath: string;
  isOpen: boolean;
  onClose: () => void;
}

const SyllabusPopup = ({ pdfPath, isOpen, onClose }: SyllabusPopupProps) => {
  const [mounted, setMounted] = useState(false);
  const fileName = pdfPath.split('/').pop() || "Syllabus";
  const displayTitle = fileName.replace('.pdf', '').replace('_', ' ').replace('NEC', '');

  // Ensure the component is mounted on the client before rendering the portal
  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b bg-white">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {displayTitle}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-3xl leading-none px-2 cursor-pointer"
          >
            <RxCross2 />
          </button>
        </div>

        {/* PDF Content */}
        <div className="flex-grow bg-gray-100">
          <iframe
            src={`${pdfPath}#view=FitH`}
            className="w-full h-full border-none"
            title="Syllabus PDF"
          />
        </div>
      </div>
    </div>,
    document.body // This pushes the HTML to the end of the <body>
  );
};

export default SyllabusPopup;