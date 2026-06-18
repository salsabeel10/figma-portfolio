import Xarrow, { Xwrapper } from "react-xarrows";
import { steps1 } from "../data/steps";

const WorkProcess = () => {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#F8F9FC] py-24 px-6 md:px-12"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-14 lg:grid-cols-[38%_62%]">
        {/* Left Side */}
        <div className="relative pt-10 lg:pt-20">
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#8B5CF6] via-[#C4B5FD] to-transparent" />
          <span className="absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-[#8B5CF6]" />

          <div className="pl-10">
            <p className="mb-10 text-sm font-bold uppercase tracking-[0.25em] text-[#8B5CF6]">
              How I Work
            </p>

            <h2 className="mb-10 max-w-md text-6xl font-extrabold leading-[1.05] tracking-tight text-[#050816] md:text-[72px]">
              Work <br /> Process
            </h2>

            <p className="max-w-md text-[17px] leading-[1.8] text-slate-600">
              I follow a structured and efficient process to deliver
              high-quality digital solutions that are scalable, user-friendly,
              and focused on real impact.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <Xwrapper>
          <div className="relative ml-auto grid max-w-[760px] grid-cols-1 gap-6 sm:grid-cols-2">
            {steps1.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  id={`step${step.id}`}
                  key={step.id}
                  className="group relative z-10 min-h-[285px] overflow-hidden rounded-[28px]
          border border-[#E6E0F8] bg-white/80 px-8 py-8
          shadow-[0_18px_50px_rgba(15,23,42,0.07)]
          backdrop-blur-xl transition-all duration-500
          hover:-translate-y-1 hover:border-[#8B5CF6]/45
          hover:shadow-[0_24px_65px_rgba(139,92,246,0.16)]"
                >
                  {/* Big Number */}
                  <span className="pointer-events-none absolute left-8 top-5 text-[82px] font-semibold leading-none text-[#8B5CF6]/12">
                    {String(step.id).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div
                    className="absolute right-8 top-8 flex h-[72px] w-[72px] items-center justify-center rounded-full
            border border-white/80 bg-gradient-to-br from-white to-[#EEE6FF]
            text-[#8B5CF6] shadow-[0_12px_35px_rgba(139,92,246,0.18)]
            transition-all duration-500 group-hover:scale-105 group-hover:rotate-3"
                  >
                    <Icon size={30} strokeWidth={2.1} />
                  </div>

                  {/* Dots */}
                  <div className="absolute right-9 top-[135px] grid grid-cols-5 gap-1 opacity-35">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <span
                        key={i}
                        className="h-1 w-1 rounded-full bg-[#8B5CF6]"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="relative mt-[118px]">
                    <h3 className="mb-4 text-[22px] font-bold text-[#0B1020]">
                      {step.title}
                    </h3>

                    <p className="max-w-[260px] text-[15px] leading-7 text-slate-600">
                      {step.text}
                    </p>
                  </div>

                  {/* Bottom Wave */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 opacity-45">
                    <svg viewBox="0 0 400 100" className="h-full w-full">
                      <path
                        d="M0 70 C80 20 150 100 240 55 C310 20 350 45 400 18"
                        fill="none"
                        stroke="#C4B5FD"
                        strokeWidth="1"
                      />
                      <path
                        d="M0 82 C95 35 165 105 250 68 C320 35 355 55 400 34"
                        fill="none"
                        stroke="#DDD6FE"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>

                  {/* Small Arrow Button */}
                  <button
                    className="absolute bottom-7 right-7 flex h-10 w-10 items-center justify-center rounded-full
            border border-[#E9DFFF] bg-white text-[#8B5CF6]
            shadow-[0_8px_22px_rgba(15,23,42,0.08)]
            transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#8B5CF6] group-hover:text-white"
                  >
                    →
                  </button>
                </div>
              );
            })}

            {/* Step 1 → Step 2 */}
            <Xarrow
              start="step1"
              end="step2"
              startAnchor="right"
              endAnchor="left"
              color="#8B5CF6"
              strokeWidth={1}
              headSize={4}
              path="straight"
              zIndex={0}
            />

            {/* Step 2 → Step 3 */}
            <Xarrow
              start="step2"
              end="step3"
              startAnchor="bottom"
              endAnchor="top"
              color="#8B5CF6"
              strokeWidth={1}
              headSize={4}
              path="grid"
              gridBreak="50%"
              zIndex={0}
            />

            {/* Step 3 → Step 4 */}
            <Xarrow
              start="step3"
              end="step4"
              startAnchor="right"
              endAnchor="left"
              color="#8B5CF6"
              strokeWidth={1}
              headSize={4}
              path="straight"
              zIndex={0}
            />
          </div>
        </Xwrapper>
      </div>
    </section>
  );
};

export default WorkProcess;
