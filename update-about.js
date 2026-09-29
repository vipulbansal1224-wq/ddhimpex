const fs = require('fs');
let content = fs.readFileSync('src/app/about/page.tsx', 'utf8');

content = content.replace(
  /import \{ Building2, ShieldCheck, Factory, Globe, Award, CheckCircle2, Target, Eye, Users, FileText \} from 'lucide-react';/,
  "import { Building2, ShieldCheck, Factory, Globe, Award, CheckCircle2, Target, Eye, Users, FileText } from 'lucide-react';\nimport { CategoryHeroSlider } from '@/components/CategoryHeroSlider';"
);

const oldBanner = /<div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-800">[\s\S]*?<\/div>\s*<\/div>/;
const newBanner = `      <CategoryHeroSlider 
        title="About DDH Impex Group"
        subtitle="Headquartered in Ludhiana, Punjab, India, DDH Impex has established itself as one of the fastest growing industrial business groups, delivering world-class EPC engineering and chemical supply chain solutions."
        categoryTag="CORPORATE PROFILE"
        images={[
          'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600&h=600',
          'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1600&h=600',
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600&h=600'
        ]}
      />`;

content = content.replace(oldBanner, newBanner);

fs.writeFileSync('src/app/about/page.tsx', content, 'utf8');
