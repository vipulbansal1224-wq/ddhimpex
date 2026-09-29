const fs = require('fs');
const file = 'src/components/ProductsGrid.tsx';
let content = fs.readFileSync(file, 'utf8');
const regex = /(export const ProductsGrid: React.FC<ProductsGridProps> = \([^)]*\) => {)/;
content = content.replace(regex, (match) => match + "\n  const { openRFQ } = useRFQ();\n");
fs.writeFileSync(file, content, 'utf8');
console.log('Fixed', file);
