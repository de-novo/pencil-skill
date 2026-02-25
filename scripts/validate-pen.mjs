#!/usr/bin/env node
import { loadPen, parseArgs, printHelpAndExit, fail } from './_utils.mjs';

const HELP = `Usage: node scripts/validate-pen.mjs <file.pen>\n\nValidates a .pen file for structural correctness, ID uniqueness,\nvariable references, node types, and design best practices.`;
const args = parseArgs(process.argv.slice(2));
if (args.help) printHelpAndExit(HELP);
const file = args._[0];
if (!file) printHelpAndExit(HELP, 1);

const ALLOWED = new Set([
  'rectangle','ellipse','line','polygon','path','text','frame','group','note','prompt','context','icon_font','ref'
]);

function warn(msg){ console.log(`⚠️ ${msg}`); }

const data = loadPen(file);

if (!data.version) fail('missing top-level key: version');
if (!Array.isArray(data.children)) fail('top-level children must be array');

const idMap = new Map();
const reusableIds = new Set();
const variableKeys = new Set(Object.keys(data.variables || {}));

function collectVariablesFromValue(value, path) {
  if (typeof value === 'string') {
    if (value.startsWith('$')) {
      if (!variableKeys.has(value.slice(1))) {
        warn(`${path} references undefined variable: ${value}`);
      }
    }
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((v, i) => collectVariablesFromValue(v, `${path}[${i}]`));
    return;
  }
  if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) {
      collectVariablesFromValue(v, `${path}.${k}`);
    }
  }
}

function walk(node, p='root', parent=null) {
  if (typeof node !== 'object' || node === null) fail(`${p} must be object`);

  if (node.type && !ALLOWED.has(node.type)) warn(`${p} unknown type: ${node.type}`);

  if (typeof node.id !== 'string' || !node.id.trim()) {
    fail(`${p}.id must be non-empty string`);
  }

  if (node.id.includes('/')) {
    fail(`${p}.id must not contain '/': ${node.id}`);
  }

  if (idMap.has(node.id)) {
    const prev = idMap.get(node.id);
    fail(`${p}.id duplicated: '${node.id}' already used at ${prev}`);
  }
  idMap.set(node.id, p);

  if (node.reusable === true) {
    reusableIds.add(node.id);
  }

  if (node.type === 'text') {
    const hasTextGrowth = typeof node.textGrowth === 'string';
    if (!hasTextGrowth && ('width' in node || 'height' in node)) {
      warn(`${p} text uses width/height without textGrowth (may be ignored)`);
    }
  }

  collectVariablesFromValue(node, p);

  if ('children' in node && !Array.isArray(node.children)) fail(`${p}.children must be array`);
  if (Array.isArray(node.children)) {
    node.children.forEach((c, i) => walk(c, `${p}.children[${i}]`, node));
  }
}

data.children.forEach((n, i) => walk(n, `children[${i}]`));

function validateRefs(node, p='root') {
  if (node && typeof node === 'object') {
    if (node.type === 'ref') {
      if (typeof node.ref !== 'string' || !node.ref.trim()) {
        fail(`${p}.ref must be non-empty string`);
      }
      if (!reusableIds.has(node.ref)) {
        fail(`${p} references missing reusable component: '${node.ref}'`);
      }
    }
    if (Array.isArray(node.children)) {
      node.children.forEach((c, i) => validateRefs(c, `${p}.children[${i}]`));
    }
  }
}

data.children.forEach((n, i) => validateRefs(n, `children[${i}]`));

console.log(`✅ validate-pen pass: ${file}`);
