const fs = require('fs');

// 1. Update Header.tsx to make the effect always visible
let header = fs.readFileSync('src/components/Header.tsx', 'utf8');
header = header.replace(/opacity-0 group-hover:opacity-100/g, 'opacity-100');
header = header.replace(/group-hover:animate-\[shimmer_1\.5s_infinite\]/g, 'animate-[shimmer_1.5s_infinite]');
fs.writeFileSync('src/components/Header.tsx', header, 'utf8');

// 2. Update Footer.tsx to use the animated logo instead of the static image
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
const oldFooterLogo = /<figure className="mb-4">[\s\S]*?<\/figure>/;
const newFooterLogo = `<div className="mb-6 flex items-center space-x-3 group">
              <div className="relative flex items-center justify-center w-12 h-12">
                {/* Outer spinning ring effect ALWAYS ON */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent border-t-[#0228d2] border-r-[#0228d2] animate-[spin_3s_linear_infinite] opacity-100"></div>
                <div className="absolute inset-0 rounded-xl border-2 border-transparent border-b-emerald-400 border-l-emerald-400 animate-[spin_4s_linear_infinite_reverse] opacity-100"></div>
                
                {/* Core logo box */}
                <div className="relative w-full h-full bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(2,40,210,0.3)] z-10">
                  {/* Diagonal shine effect ALWAYS ON */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite] skew-x-12"></div>
                  
                  {/* The Letter D */}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0228d2] to-blue-400 font-black text-3xl">D</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tight text-white leading-none">DDH <span className="text-[#0228d2]">IMPEX</span></span>
                <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">Global Supply Chain</span>
              </div>
            </div>`;
footer = footer.replace(oldFooterLogo, newFooterLogo);
fs.writeFileSync('src/components/Footer.tsx', footer, 'utf8');

console.log("Updated both logos");
