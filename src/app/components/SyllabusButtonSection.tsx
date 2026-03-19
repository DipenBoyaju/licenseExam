'use client'

import { useState } from "react";
import SyllabusPopup from "./common/SyllabusPopup";

const SyllabusButtonSection = ({ pdfPath }: { pdfPath: string }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div className="flex gap-5 flex-row items-center">
        <button
          onClick={() => setIsPopupOpen(true)}
          className="inline-block mt-4 text-white font-medium hover:bg-orange-500 transition-all ease-in-out duration-500 bg-orange-600 py-3 px-4 rounded-md cursor-pointer"
        >
          View Syllabus →
        </button>
        <a
          href={pdfPath}
          className="inline-block mt-4 text-orange-600 font-medium hover:underline"
          download
        >
          Download Full Syllabus PDF →
        </a>
      </div>

      <SyllabusPopup
        pdfPath={pdfPath}
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  )
}
export default SyllabusButtonSection