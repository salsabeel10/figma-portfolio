import React from "react";
import { ArrowRight, Terminal } from "lucide-react";
import heroImage from "../../public/images/salsabeel-1.webp";
import { whatsapp } from "../data/links";

export default function HeroSection({ heroImageUrl = heroImage }) {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-0"
    >
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div
          className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px]"
          aria-hidden="true"
        />

        <div
          className="absolute top-1/4 left-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse-slow"
          aria-hidden="true"
        />

        <div
          className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-indigo-200/20 rounded-full blur-3xl animate-pulse-slow"
          aria-hidden="true"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e5e7eb] text-[#4b5563] text-[10px] font-bold uppercase tracking-widest animate-fade-in-up border border-slate-200/50"
              style={{ animationDuration: "0.6s" }}
            >
              <Terminal className="w-3.5 h-3.5 text-[#4b5563] animate-pulse" />
              <span>Available for New Projects</span>
            </div>

            <div className="space-y-4 max-w-2xl">
              <h1
                className="text-4xl sm:text-6xl lg:text-[76px] font-display font-black text-[#1c1c1c] leading-[1.0] tracking-tight animate-fade-in-up"
                style={{
                  animationDelay: "0.15s",
                  animationDuration: "0.7s",
                }}
              >
                Hello, I'm <br />
                <span className="bg-gradient-to-r from-[#4f46e5] to-[#9333ea] bg-clip-text text-transparent">
                  Salsabeel Ibrahim
                </span>
              </h1>

              <p
                className="text-[#4b5563] text-base sm:text-lg font-sans font-normal leading-relaxed animate-fade-in-up"
                style={{
                  animationDelay: "0.3s",
                  animationDuration: "0.7s",
                }}
              >
                I'm a{" "}
                <strong className="font-semibold text-[#1c1c1c]">
                  Software Engineer
                </strong>{" "}
                and{" "}
                <strong className="font-semibold text-[#1c1c1c]">
                  Full Stack Web Developer
                </strong>{" "}
                based in Dubai, UAE. I strive to build immersive and beautiful
                web applications through carefully crafted code and user-centric
                design.
              </p>
            </div>

            <div
              className="flex flex-wrap gap-4 items-center animate-fade-in-up w-full sm:w-auto"
              style={{
                animationDelay: "0.45s",
                animationDuration: "0.8s",
              }}
            >
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3.5 px-8 rounded-lg bg-[#1c1c1c] hover:bg-neutral-800 text-white font-display font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/10 flex items-center justify-center gap-2 group"
              >
                <span>Say Hello!</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#about"
                className="w-full sm:w-auto text-center py-3.5 px-8 rounded-lg border border-[#d1d5db] hover:border-[#1c1c1c] bg-transparent text-[#1c1c1c] font-display font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm inline-block"
              >
                More About Me
              </a>
            </div>
          </div>

          <div
            className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationDuration: "1s" }}
          >
            <div className="relative w-full max-w-[22rem] sm:max-w-[24rem] perspective-[1200px]">
              {/* Premium animated glow */}
              <div
                className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-purple-500/30 via-indigo-400/25 to-pink-500/30 blur-3xl animate-premium-glow"
                aria-hidden="true"
              />

              {/* Image card */}
              <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/60 bg-slate-50 shadow-[0_30px_80px_rgba(79,70,229,0.25)] animate-premium-float transition-all duration-700 ease-out hover:scale-[1.025] hover:-rotate-1 hover:shadow-[0_40px_100px_rgba(124,58,237,0.35)]">
                <img
                  src={heroImageUrl}
                  alt="Salsabeel Ibrahim Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/5] object-cover object-top scale-[1.02] transition-transform duration-1000 ease-out group-hover:scale-110"
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />

                {/* Shine sweep */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 transition-transform duration-1000 ease-out group-hover:translate-x-full" />

                {/* Border polish */}
                <div className="absolute inset-0 rounded-[2.5rem] border border-white/50 ring-1 ring-slate-900/5 ring-inset" />
              </div>

              {/* Badge */}
              <div
                className="absolute bottom-5 -left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-2.5 animate-badge-float"
                style={{ animationDelay: "1.5s" }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>

                <span className="font-sans font-semibold text-xs text-slate-800">
                  Available for Projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
