'use client';

import { useQuizStore } from '../../store/quizStore';
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowLeft,
  Award,
  BookOpen,
  Share2,
  Copy,
  Check,
  Code2
} from "lucide-react";

export default function ResultPage() {
  const { score, mistakes } = useQuizStore();
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);
  const [embedCopied, setEmbedCopied] = useState(false);

  const noAnswers = score === 0 && mistakes.length === 0;
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : "https://neclicenseexam.vercel.app";
  const shareUrl = `${siteUrl}/take-test`;

  const shareText = `🎯 I scored ${score} Marks on the Nepal Engineering Council (NEC) License Exam Mock Test! Test your preparation for free at: ${shareUrl}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const embedCode = `<iframe src="${siteUrl}/take-test" width="100%" height="600" style="border:1px solid #e5e7eb; border-radius:16px;"></iframe>\n<p style="font-size:12px; color:#6b7280; text-align:center;">Powered by <a href="${siteUrl}" target="_blank" style="color:#f54a00; font-weight:bold;">NEC License Exam Preparation</a></p>`;

  const handleCopyEmbed = () => {
    navigator.clipboard.writeText(embedCode);
    setEmbedCopied(true);
    setTimeout(() => setEmbedCopied(false), 2500);
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`🎯 I scored ${score} Marks on the NEC License Exam Mock Test! Can you beat my score?`)}&url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="bg-white min-h-screen relative overflow-hidden font-poppins">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 -translate-x-12 w-72 h-72 bg-amber-100/10 rounded-full blur-3xl pointer-events-none" />

      <main className="max-w-4xl mx-auto px-6 py-20 sm:py-28 relative">

        {/* Score Card Banner */}
        <div className="relative group w-full mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-10" />
          <div className="relative bg-neutral-950 p-8 sm:p-10 rounded-3xl text-center text-white shadow-xl border border-neutral-800">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-600/10 text-orange-400 border border-orange-500/20 mb-4">
              <Award className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-inter">
              Performance Score:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 font-black">
                {score} Marks
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-md mx-auto">
              Review your examination metrics below to align your knowledge base with the official NEC criteria.
            </p>
          </div>
        </div>

        {/* Viral Share & Challenge Colleague Module (Backlink Generator) */}
        {!noAnswers && (
          <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-orange-50/50 border border-orange-200/60 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2.5">
                <Share2 className="w-5 h-5 text-orange-600 shrink-0" />
                <div>
                  <h2 className="text-base font-bold text-gray-900 font-inter">
                    Share Score &amp; Challenge Your Engineering Batch
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Share your achievement across student study groups or your professional profile.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowEmbed(!showEmbed)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-orange-600 transition"
              >
                <Code2 className="w-4 h-4" />
                {showEmbed ? "Hide Embed Snippet" : "Embed on College/Blog"}
              </button>
            </div>

            {/* Social Share Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-xs"
              >
                Share on WhatsApp
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-bold transition shadow-xs"
              >
                Post on LinkedIn
              </a>

              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs font-bold transition shadow-xs"
              >
                Share on X
              </a>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 text-xs font-bold transition shadow-2xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied Link &amp; Score!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gray-500" /> Copy Score &amp; Link
                  </>
                )}
              </button>
            </div>

            {/* Embed Widget Generator Box */}
            {showEmbed && (
              <div className="mt-5 pt-4 border-t border-orange-200/60 space-y-2">
                <p className="text-xs font-semibold text-gray-700">
                  Embed this free NEC Mock Test on your college blog, student club portal, or website:
                </p>
                <div className="relative">
                  <textarea
                    readOnly
                    value={embedCode}
                    rows={3}
                    className="w-full text-xs font-mono bg-white p-3 rounded-xl border border-gray-200 text-gray-800 focus:outline-none"
                  />
                  <button
                    onClick={handleCopyEmbed}
                    className="absolute top-2 right-2 px-3 py-1 bg-orange-600 hover:bg-orange-500 text-white text-[11px] font-bold rounded-lg shadow-2xs transition"
                  >
                    {embedCopied ? "Copied!" : "Copy HTML"}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Dynamic State Conditional Router */}
        {noAnswers ? (
          /* Empty Case */
          <div className="text-center py-16 border border-dashed border-gray-200 rounded-2xl bg-gray-50/50">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 mb-4">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <p className="text-2xl font-bold text-gray-900 font-inter mb-2">No Answers Submitted</p>
            <p className="text-gray-500 text-sm font-poppins max-w-sm mx-auto">
              You didn’t attempt any questions in this mock testing cycle. Launch a new set to populate metrics.
            </p>
          </div>
        ) : mistakes.length > 0 ? (
          /* Review Mistakes */
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-4 mb-6">
              <BookOpen className="w-5 h-5 text-orange-600" />
              <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">
                Review Your Mistakes ({mistakes.length})
              </h2>
            </div>

            <ul className="space-y-4">
              {mistakes.map((m, idx) => (
                <li
                  key={idx}
                  className="p-6 bg-white border border-gray-100 rounded-2xl shadow-xs transition hover:shadow-md border-l-4 border-l-red-500 flex flex-col gap-4"
                >
                  <div>
                    <span className="text-[11px] font-bold tracking-wider text-red-600 uppercase font-poppins block mb-1">
                      Question Review #{idx + 1}
                    </span>
                    <p className="text-base font-semibold text-gray-900 font-inter leading-relaxed">
                      {m.question}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-poppins text-sm">
                    <div className="p-3.5 bg-red-50/50 border border-red-100 rounded-xl flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs font-bold text-red-700 uppercase tracking-wider mb-0.5">Your Choice</span>
                        <span className="text-red-900 font-medium">{m.selectedAnswer ?? 'No Answer Provided'}</span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-emerald-50/50 border border-emerald-100 rounded-xl flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs font-bold text-emerald-700 uppercase tracking-wider mb-0.5">Verified Solution</span>
                        <span className="text-emerald-900 font-semibold">{m.correctAnswer}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          /* Perfect Score */
          <div className="text-center py-16 border border-gray-100 rounded-2xl bg-emerald-50/20 shadow-xs">
            <p className="text-4xl mb-4">🎉</p>
            <p className="text-2xl font-extrabold text-emerald-800 font-inter mb-2">Perfect Score Accomplished!</p>
            <p className="text-gray-500 text-sm font-poppins max-w-sm mx-auto leading-relaxed">
              Incredible work! You logged absolute accuracy across this entire simulated subject curriculum module.
            </p>
          </div>
        )}

        {/* Global Navigation Trigger */}
        <div className="text-center mt-12 pt-6 border-t border-gray-100">
          <button
            onClick={() => router.push("/take-test")}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-orange-500 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer font-poppins"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Return to Faculty Selection
          </button>
        </div>

      </main>
    </div>
  );
}
