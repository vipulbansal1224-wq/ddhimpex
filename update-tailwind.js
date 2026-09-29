const fs = require('fs');
let content = fs.readFileSync('tailwind.config.ts', 'utf8');

if (!content.includes('shimmer')) {
  content = content.replace('extend: {', `extend: {
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
      },`);
  fs.writeFileSync('tailwind.config.ts', content, 'utf8');
}
