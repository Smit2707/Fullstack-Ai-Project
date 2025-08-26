import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[90vh] relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-950 dark:to-slate-900">
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-fuchsia-300/50 blur-3xl animate-[blob_7s_infinite]" />
        <div className="absolute top-20 -right-10 w-72 h-72 rounded-full bg-indigo-300/50 blur-3xl animate-[blob_7s_infinite] [animation-delay:2s]" />
        <div className="absolute -bottom-10 left-10 w-72 h-72 rounded-full bg-cyan-300/50 blur-3xl animate-[blob_7s_infinite] [animation-delay:4s]" />
      </div>

      {/* Content */}
      <main className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <section className="w-full max-w-2xl">
          {/* Card */}
          <div className="glass-card backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-3xl shadow-2xl p-8 md:p-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-white/20 text-purple-700 dark:text-purple-300">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              Error 404
            </div>

            {/* Big status */}
            <h1 className="mt-6 text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Page not found
            </h1>

            <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300">
              The page requested doesn’t exist or may have been moved. Check the URL, or head back to a safe place.
            </p>

            {/* Illustration */}
            <div className="mx-auto mt-8 md:mt-10 w-full rounded-2xl border border-white/30 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6">
              <div className="relative mx-auto h-36 md:h-44">
                {/* stylized “404” rings */}
                <div className="absolute inset-0 flex items-center justify-center gap-3">
                  <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">4</span>
                  <span className="relative inline-flex items-center justify-center">
                    <span className="h-16 w-16 md:h-20 md:w-20 rounded-full border-4 border-purple-400/50 dark:border-purple-300/30 animate-[spin_8s_linear_infinite]" />
                    <span className="absolute h-12 w-12 md:h-16 md:w-16 rounded-full border-4 border-pink-400/40 dark:border-pink-300/20 animate-[spin_12s_linear_infinite] [animation-direction:reverse]" />
                    <span className="absolute text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">0</span>
                  </span>
                  <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">4</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
              >
                <span>Go to Home</span>
                <span aria-hidden>↗</span>
              </Link>
              {/* <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-white/70 dark:bg-white/10 text-slate-800 dark:text-slate-200 border border-white/30 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/15 transition"
              >
                Back to Root
              </Link> */}
            </div>

            {/* Helper */}
            <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
              Tip: Use the navigation or search to find the right destination.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NotFound;