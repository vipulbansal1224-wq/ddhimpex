const fs = require('fs');
let content = fs.readFileSync('src/app/products/food-products/page.tsx', 'utf8');

content = content.replace(
  /import \{ Package, Globe, Tag, ArrowRight, CheckCircle2 \} from 'lucide-react';/,
  "import { Package, Globe, Tag, ArrowRight, CheckCircle2 } from 'lucide-react';\nimport { CategoryHeroSlider } from '@/components/CategoryHeroSlider';"
);

const oldBanner = /<div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-800">[\s\S]*?<\/div>\s*<\/div>/;
const newBanner = `      <CategoryHeroSlider 
        title="Premium Indian Basmati Rice, Spices & Commodities"
        subtitle="Fast-moving consumer packaged food items carefully manufactured and selected to international quality standards under dynamic export brands."
        categoryTag="FMCG & CONSUMER PACKAGED FOODS"
        images={[
          'https://images.unsplash.com/photo-1586201375761-83865001e8ac?auto=format&fit=crop&q=80&w=1600&h=600',
          'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1600&h=600',
          'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=1600&h=600'
        ]}
      />`;

content = content.replace(oldBanner, newBanner);

const oldGrid = /<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
const newGrid = `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodProducts.map((prod) => (
            <div 
              key={prod.id}
              className="rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {prod.image && (
                <div className="h-48 w-full overflow-hidden relative border-b border-slate-800">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur text-emerald-400 border border-emerald-500/30 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded">
                    {prod.subcategory}
                  </div>
                </div>
              )}
              
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  {!prod.image && (
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3 inline-block">
                      {prod.subcategory}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2 mt-2">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {prod.description}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 mb-6 space-y-1">
                    <div><strong>Export Packing Options:</strong></div>
                    <div className="text-slate-400">{prod.packingType}</div>
                  </div>
                </div>

                <button
                  onClick={() => openRFQ(prod.name)}
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 mt-4"
                >
                  <span>Request Food Export Sample / Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>`;

content = content.replace(oldGrid, newGrid);

fs.writeFileSync('src/app/products/food-products/page.tsx', content, 'utf8');
