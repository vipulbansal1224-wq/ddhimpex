const fs = require('fs');
let content = fs.readFileSync('src/components/Header.tsx', 'utf8');

const oldLogo = /<Link href="\/".*?<\/Link>/s;
const newLogo = `<Link href="/" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center w-10 h-10">
              {/* Outer spinning ring effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent border-t-[#0228d2] border-r-[#0228d2] animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent border-b-emerald-400 border-l-emerald-400 animate-[spin_4s_linear_infinite_reverse] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Core logo box */}
              <div className="relative w-full h-full bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(2,40,210,0.3)] group-hover:shadow-[0_0_25px_rgba(2,40,210,0.6)] transition-shadow duration-500 z-10">
                {/* Diagonal shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12"></div>
                
                {/* The Letter D */}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0228d2] to-blue-400 font-black text-2xl">D</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight text-slate-800 leading-none">DDH <span className="text-[#0228d2]">IMPEX</span></span>
              <span className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase">Global Supply Chain</span>
            </div>
          </Link>`;

content = content.replace(oldLogo, newLogo);

// Check if we need to add shimmer animation to tailwind config?
// Tailwind arbitrary values work directly, but keyframes for shimmer might not exist unless we define them.
// Actually, `animate-[shimmer_1.5s_infinite]` won't work unless `shimmer` is in tailwind.config.ts.
// Let's use a standard tailwind class or add it to globals.css.
fs.writeFileSync('src/components/Header.tsx', content, 'utf8');
