import { writeFileSync } from 'fs';
import { join } from 'path';
import { tokens } from '@pixkit/tokens';

const generateCSSVariables = () => {
  const lines = [':root {'];
  
  // Add spacing/sizing tokens
  lines.push(`    --px: ${tokens.px}px;`);
  lines.push(`    --radius: ${tokens.radius}px;`);
  lines.push(`    --border: ${tokens.border}px;`);
  
  // Add color tokens
  Object.entries(tokens.colors).forEach(([key, value]) => {
    lines.push(`    --${key}: ${value};`);
  });
  
  // Add additional custom variables not in tokens
  lines.push(`    --primary: #6272a4;`);
  lines.push(`    --shadow: drop-shadow(0 var(--px) 0 #000);`);
  lines.push(`    --white-text: #fff;`);
  lines.push(`    --black: #000;`);
  
  lines.push('}');
  
  return lines.join('\n');
};

const cssContent = generateCSSVariables();
const outputPath = join(process.cwd(), 'src', 'variables.css');

writeFileSync(outputPath, cssContent, 'utf-8');
console.log('✅ Generated variables.css from @pixkit/tokens');
