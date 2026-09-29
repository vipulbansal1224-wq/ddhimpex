const fs = require('fs');

const files = [
  'src/components/CategoryHeroSlider.tsx',
  'src/components/Header.tsx',
  'src/components/HeroSlider.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('const { openRFQ } = useRFQ();')) {
    const regex = /(export const [A-Za-z0-9_]+\s*:\s*React\.FC<[^>]+>\s*=\s*\([^)]*\)\s*=>\s*{)/;
    content = content.replace(regex, (match) => match + "\n  const { openRFQ } = useRFQ();\n");
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed', file);
  }
}
