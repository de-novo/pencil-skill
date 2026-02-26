# pencil-skill

Agent Skill for creating and editing Pencil (`.pen`) design files programmatically.

## Installation

```bash
npx skillsadd denovo/pencil-skill
```

## Quick Start

```bash
# Validate a .pen file
node scripts/validate-pen.mjs mydesign.pen

# Read document tree
node scripts/read-tree.mjs mydesign.pen

# Search for nodes by type or name
node scripts/search-nodes.mjs mydesign.pen --type text
node scripts/search-nodes.mjs mydesign.pen --name "button"

# Get/set design variables
node scripts/get-variables.mjs mydesign.pen
node scripts/set-variables.mjs mydesign.pen --var 'color.primary=color:#0D9488'

# Batch operations
node scripts/batch-design.mjs mydesign.pen --ops '[{"op":"update","id":"node1","props":{"name":"Header"}}]'

# Find available space for new elements
node scripts/find-space.mjs mydesign.pen --width 200 --height 100
```

## What's Inside

- **SKILL.md** — Complete skill instructions and workflow for AI agents
- **scripts/** — 8 CLI tools for .pen file manipulation + 1 utility for AGENTS.md generation (`compile-agents.mjs`)
- **rules/** — 41 design rules for production-quality UI output
- **references/** — Schema (JSON + TypeScript), Tailwind mappings, component patterns
- **assets/** — Example `.pen` files (card component, Reddit UI clone)

## Documentation

See [SKILL.md](SKILL.md) for the full agent skill specification.

## License

MIT
