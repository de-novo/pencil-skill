#!/usr/bin/env node
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const rulesDir = join(import.meta.dirname, '..', 'rules');
const outFile = join(import.meta.dirname, '..', 'AGENTS.md');

const files = readdirSync(rulesDir).filter(f => f.endsWith('.md')).sort();
const parts = [`# Pencil Skill Rules (Compiled)\n\nThis file is compiled from \`rules/*.md\`. When updating rules, edit the source files in \`rules/\` and re-run: \`node scripts/compile-agents.mjs\`\n\nTotal rules: ${files.length}\n`];

for (const file of files) {
  const content = readFileSync(join(rulesDir, file), 'utf8');
  parts.push(`<!-- source: rules/${file} -->\n\n${content}`);
}

writeFileSync(outFile, parts.join('\n'), 'utf8');
console.log(`Compiled ${files.length} rules into AGENTS.md`);
