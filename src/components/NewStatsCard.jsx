import React from 'react';
import {stats} from '../data/stats';

export default function StatsGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8">
        {stats.map((stat, i) => (
          <div
            key={stat.id}
            className="relative group rounded-[24px] p-8 bg-white/50 backdrop-blur-md border border-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden animate-fade-in-up flex flex-col justify-center items-center text-center"
            style={{ animationDelay: `${0.4 + i * 0.15}s` }}
          >
            <div className="absolute -right-3 -top-3 w-16 h-16 bg-slate-500/5 rounded-full blur-lg group-hover:bg-[#4f46e5]/10 transition-all duration-500" />

            <div className="mb-2">
              <span className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-[#1c1c1c] group-hover:scale-105 transition-transform duration-300 inline-block">
                {stat.value}
              </span>
            </div>

            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-[#6b7280] group-hover:text-[#1c1c1c] transition-colors mt-1">
              {stat.label}
            </h3>

            <p className="text-slate-500 text-xs mt-3 leading-relaxed font-sans max-w-[200px]">
              {stat.description}
            </p>

            <div className="mt-4 flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span>Verified Metric</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}