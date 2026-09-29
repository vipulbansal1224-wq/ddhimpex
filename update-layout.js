const fs = require('fs');
let content = fs.readFileSync('src/app/client-layout.tsx', 'utf8');
content = content.replace(
  /import \{ RFQProvider \} from '@\/context\/RFQContext';/,
  "import { RFQProvider } from '@/context/RFQContext';\nimport { Preloader } from '@/components/Preloader';"
);
content = content.replace(
  /<RFQProvider>/,
  "<RFQProvider>\n      <Preloader />"
);
fs.writeFileSync('src/app/client-layout.tsx', content, 'utf8');
