"use client";

import type React from "react";

import dynamic from "next/dynamic";

const WalletComponents = dynamic(
  () => import("./components/wallet").then((mod) => mod.WalletComponents),
  {
    ssr: false,
    loading: () => <div className="flex justify-end">Loading...</div>,
  }
);

export default function CoinbaseFleekTemplate() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-bold font-base-pixel">
            Base Pixel
          </a>
        </div>
        <div>
          <WalletComponents />
        </div>
      </nav>

      <section className="my-4">
        <h2 className="text-5xl text-center font-bold">
          Get started with Base Pixel
        </h2>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Image Grid */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              src="/image-1.png"
              alt="Base Pixel Art 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              src="/image-2.png"
              alt="Base Pixel Art 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              src="/image-3.png"
              alt="Base Pixel Art 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-[32px] p-8 md:p-12 letter-box">
          <div className="flex flex-col gap-y-12 md:gap-y-16">
            {/* First Row */}
            <div className="grid grid-cols-9 gap-4">
              {["Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg", "Hh", "Ii"].map(
                (pair) => (
                  <div
                    key={pair}
                    className="flex justify-center font-base-pixel sm:text-3xl md:text-4xl lg:text-6xl tracking-wide"
                  >
                    {pair}
                  </div>
                )
              )}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-9 gap-4">
              {["Jj", "Kk", "Ll", "Mm", "Nn", "Oo", "Pp", "Qq", "Rr"].map(
                (pair) => (
                  <div
                    key={pair}
                    className="flex justify-center font-base-pixel sm:text-3xl md:text-4xl lg:text-6xl tracking-wide"
                  >
                    {pair}
                  </div>
                )
              )}
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-8 gap-4">
              {["Ss", "Tt", "Uu", "Vv", "Ww", "Xx", "Yy", "Zz"].map((pair) => (
                <div
                  key={pair}
                  className="flex justify-center font-base-pixel sm:text-3xl md:text-4xl lg:text-6xl tracking-wide"
                >
                  {pair}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
