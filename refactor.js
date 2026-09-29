const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // If it's RFQModal.tsx, let's inject our specific logic
  if (filePath.includes('RFQModal.tsx')) {
    // Already did this manually last time, let's just write the known good content
    return;
  }

  // 1. Remove onOpenRFQ={...} from JSX
  content = content.replace(/onOpenRFQ=\{[^}]*\}/g, '');
  content = content.replace(/onOpenRFQ\s*=\s*\{\s*\(\)\s*=>\s*onOpenRFQ\([^)]*\)\s*\}/g, '');
  content = content.replace(/onOpenRFQ={onOpenRFQ}/g, '');

  if (content.includes('onOpenRFQ')) {
    // Add import if not present
    if (!content.includes("import { useRFQ }")) {
      content = "import { useRFQ } from '@/context/RFQContext';\n" + content;
    }

    // Remove onOpenRFQ from interfaces
    content = content.replace(/onOpenRFQ\??:\s*\([^)]*\)\s*=>\s*void;/g, '');

    // Remove onOpenRFQ from component params
    content = content.replace(/onOpenRFQ\s*=\s*\(\)\s*=>\s*\{\}/g, '');
    content = content.replace(/onOpenRFQ\s*,?/g, '');
    
    // Clean up empty destructurings like ({ }: PageProps) and remove trailing commas
    content = content.replace(/\{\s*,\s*/g, '{ ');
    content = content.replace(/,\s*\}/g, ' }');

    // Inject const { openRFQ } = useRFQ(); inside the component
    const componentRegex = /(export (?:default )?(?:function|const) [A-Za-z0-9_]+\s*(?:=\s*\([^)]*\)\s*=>\s*|\([^)]*\)\s*){\n?)/;
    if (!content.includes('const { openRFQ } = useRFQ();')) {
      content = content.replace(componentRegex, (match) => {
        return match + "  const { openRFQ } = useRFQ();\n";
      });
    }

    // Replace onOpenRFQ(...) with openRFQ(...)
    content = content.replace(/onOpenRFQ\(/g, 'openRFQ(');

    // Replace any lingering onOpenRFQ usages
    content = content.replace(/onOpenRFQ/g, 'openRFQ');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Processed', filePath);
  }
}

function walk(dir) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walk(filePath);
    } else if (filePath.endsWith('.tsx')) {
      if (!filePath.includes('client-layout.tsx') && !filePath.includes('RFQModal.tsx')) {
        processFile(filePath);
      }
    }
  }
}

walk(path.join(__dirname, 'src'));
