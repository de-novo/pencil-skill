# Pencil Skill Rules (Compiled)

This file is compiled from `rules/*.md`. When updating rules, edit the source files in `rules/` and re-run: `node scripts/compile-agents.mjs`

Total rules: 41

<!-- source: rules/aesthetic-checklist.md -->

---
title: Anti-AI Aesthetic Checklist
impact: HIGH
impactDescription: Self-audit after design completion to ensure no stereotypical AI design patterns remain.
tags: aesthetic,checklist,anti-ai,review
---

## Anti-AI Aesthetic Checklist

After completing the design, it must pass the checklist below. If even one item fails, revise that item.

### 🎨 Colors & Decoration

- [ ] Is the primary color NOT `#3B82F6` (Tailwind blue-500)?
- [ ] Is there no purple→blue linear gradient?
- [ ] Is there no decorative blob/glow overlay in the background?
- [ ] Do cards avoid uniform large shadows? (minimum allowed only when expressing elevation)

### 📐 Layout

- [ ] Did you avoid the stereotypical Hero → 3 Cards → CTA → Footer pattern?
- [ ] Is there asymmetric layout, varied section heights, and grid variation?
- [ ] Are all elements NOT uniformly center-aligned?

### ✍️ Typography

- [ ] Is it a Display+Body font pairing rather than Inter alone?
- [ ] Are different weights (400/600/700) used across body/subheading/heading?
- [ ] Is text hierarchy distinguished not only by size, but also by weight, font, and color?

### 📝 Content

- [ ] Is there no Lorem ipsum?
- [ ] Are generic CTAs such as "Get Started" and "Learn More" not repeated more than 3 times?
- [ ] Is there no meaningless number listing like "10K+ Users"?
- [ ] Are specific service names, copy, and differentiated CTAs included?

### 🔢 Overall

- [ ] Does the color ratio follow 60-30-10?
- [ ] Are all values referenced by tokens (`$`)?
- [ ] Does it meet WCAG AA contrast ratio (4.5:1 or higher)?

<!-- source: rules/aesthetic-color.md -->

---
title: Avoid AI-looking Color Choices
impact: HIGH
impactDescription: Tailwind blue-500 and purple→blue gradients are the strongest signals of AI-generated design.
tags: aesthetic,color,palette,anti-ai,gradient
---

## Avoid AI-looking Color Choices

`primary: #3B82F6` (Tailwind blue-500) and purple→blue linear gradients are already saturated defaults from AI design tools. Define brand-specific colors, use warm gray neutrals, and apply them with a 60-30-10 ratio.

**Incorrect (Why it's bad):**

```bash
# CLI command (run in terminal)
node scripts/set-variables.mjs design.pen --var '<name>=<type>:<value>'
```

```json
{
  "variables": {
    "color.primary": {
      "type": "color",
      "value": "#3B82F6"
    },
    "color.secondary": {
      "type": "color",
      "value": "#8B5CF6"
    },
    "color.background": {
      "type": "color",
      "value": "#FFFFFF"
    },
    "gradient.hero": {
      "type": "string",
      "value": "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)"
    }
  }
}
```

**Correct (Why it's good):**

```bash
# CLI command (run in terminal)
node scripts/set-variables.mjs design.pen --var '<name>=<type>:<value>'
```

- Brand-specific teal tones — not Tailwind defaults
- Warm amber accent
- 60% — warm white, not pure #FFF
- 30% — warm gray

```json
{
  "themes": {
    "mode": [
      "light",
      "dark"
    ]
  },
  "variables": {
    "color.primary": {
      "type": "color",
      "value": [
        {
          "theme": {
            "mode": "light"
          },
          "value": "#0D9488"
        },
        {
          "theme": {
            "mode": "dark"
          },
          "value": "#2DD4BF"
        }
      ]
    },
    "color.secondary": {
      "type": "color",
      "value": [
        {
          "theme": {
            "mode": "light"
          },
          "value": "#D97706"
        },
        {
          "theme": {
            "mode": "dark"
          },
          "value": "#FCD34D"
        }
      ]
    },
    "color.background": {
      "type": "color",
      "value": [
        {
          "theme": {
            "mode": "light"
          },
          "value": "#FAFAF7"
        },
        {
          "theme": {
            "mode": "dark"
          },
          "value": "#141410"
        }
      ]
    },
    "color.surface": {
      "type": "color",
      "value": [
        {
          "theme": {
            "mode": "light"
          },
          "value": "#F5F5F0"
        },
        {
          "theme": {
            "mode": "dark"
          },
          "value": "#1C1C18"
        }
      ]
    }
  }
}
```
<!-- source: rules/aesthetic-content.md -->

---
title: Real Content — No Filler Copy
impact: HIGH
impactDescription: Lorem ipsum and empty number bragging block user empathy and make the design feel hollow.
tags: aesthetic,content,copywriting,lorem-ipsum,anti-ai
---

## Real Content — No Filler Copy

"Your Amazing Feature," "10K+ Users," repeating "Learn More" three times, and "Lorem ipsum" are all signals of content-less AI design. Use real service names, specific numbers with context, and differentiated CTA text. Content is part of design, and real copy is necessary to validate typography hierarchy.

**Incorrect (Why it's bad):**

```json
{
  "type": "frame",
  "id": "hero",
  "layout": "vertical",
  "children": [
    {
      "type": "text",
      "id": "headline",
      "fontWeight": "$font.weight.bold",
      "content": "Your Amazing Solution"
    },
    {
      "type": "text",
      "id": "sub",
      "fontWeight": "$font.weight.regular",
      "content": "Lorem ipsum dolor sit amet consectetur."
    },
    {
      "type": "frame",
      "id": "stats",
      "layout": "horizontal",
      "children": [
        {
          "type": "text",
          "id": "s1",
          "fontWeight": "$font.weight.bold",
          "content": "10K+ Users"
        },
        {
          "type": "text",
          "id": "s2",
          "fontWeight": "$font.weight.bold",
          "content": "99% Uptime"
        },
        {
          "type": "text",
          "id": "s3",
          "content": "5-Star Rating"
        }
      ]
    },
    {
      "type": "frame",
      "id": "cta",
      "children": [
        {
          "type": "text",
          "id": "btn",
          "content": "Get Started"
        }
      ]
    }
  ]
}
```

**Correct (Why it's good):**

```json
{
  "type": "frame",
  "id": "hero",
  "layout": "vertical",
  "children": [
    {
      "type": "text",
      "id": "eyebrow",
      "fontWeight": "$font.weight.medium",
      "content": "UI prototyping completed without Figma",
      "fill": "$color.primary",
      "fontSize": "$font.size.sm",
      "textGrowth": "auto",
      "fontFamily": "$font.family.display"
    },
    {
      "type": "text",
      "id": "headline",
      "fontWeight": "$font.weight.bold",
      "content": "A code-based UI builder\nfor teams without designers",
      "textGrowth": "auto",
      "fontFamily": "$font.family.display"
    },
    {
      "type": "text",
      "id": "sub",
      "fontWeight": "$font.weight.regular",
      "content": "Declare components in .pen JSON\nand ship pixel-perfect design.",
      "textGrowth": "auto",
      "fontFamily": "$font.family.body"
    },
    {
      "type": "frame",
      "id": "stats",
      "layout": "horizontal",
      "children": [
        {
          "type": "text",
          "id": "s1",
          "fontWeight": "$font.weight.bold",
          "content": "213 teams onboarded\nin just 3 weeks after beta",
          "textGrowth": "auto",
          "fontFamily": "$font.family.body"
        },
        {
          "type": "text",
          "id": "s2",
          "fontWeight": "$font.weight.bold",
          "content": "Average design time\nreduced by 68%",
          "textGrowth": "auto",
          "fontFamily": "$font.family.body"
        }
      ]
    },
    {
      "type": "frame",
      "id": "cta",
      "layout": "horizontal",
      "children": [
        {
          "type": "text",
          "id": "btn-primary",
          "fontWeight": "$font.weight.semibold",
          "content": "Start free — no card required",
          "textGrowth": "auto",
          "fontFamily": "$font.family.body"
        },
        {
          "type": "text",
          "id": "btn-secondary",
          "fontWeight": "$font.weight.medium",
          "content": "Watch live demo →",
          "textGrowth": "auto",
          "fontFamily": "$font.family.body"
        }
      ]
    }
  ]
}
```

<!-- source: rules/aesthetic-decoration.md -->

---
title: No Gratuitous Decoration
impact: MEDIUM
impactDescription: Gradient blobs and excessive shadows reduce content focus and make the design look AI-generated.
tags: aesthetic,decoration,shadow,blob,gradient
---

## No Gratuitous Decoration

Blurred gradient blobs in the background, `lg shadow` on every card, and meaningless pattern overlays are stereotypical decorations of AI-generated designs. Create visual distinction with spacing and typography hierarchy, and use shadows minimally only when representing real elevation (cards floating above the background).

**Incorrect (Why it's bad):**

- Meaningless decorative blob

```json
{
  "type": "frame",
  "id": "page-bg",
  "fill": "$color.background",
  "children": [
    {
      "type": "frame",
      "id": "blob-decoration",
      "x": -100,
      "y": -80,
      "width": 600,
      "height": 600,
      "fill": "radial-gradient(circle, #8B5CF640 0%, transparent 70%)"
    },
    {
      "type": "frame",
      "id": "card",
      "fill": "$color.surface",
      "effect": {
        "type": "shadow",
        "shadowType": "outer",
        "offset": {
          "x": 0,
          "y": 20
        },
        "blur": 40,
        "spread": 0,
        "color": "#00000040"
      },
      "cornerRadius": 20
    }
  ]
}
```

**Correct (Why it's good):**

- Minimal shadow used only to express elevation

```json
{
  "type": "frame",
  "id": "page-bg",
  "fill": "$color.background",
  "layout": "vertical",
  "gap": "$space.section",
  "padding": [
    "$space.section",
    "$space.page",
    "$space.section",
    "$space.page"
  ],
  "children": [
    {
      "type": "frame",
      "id": "card",
      "fill": "$color.surface",
      "stroke": {
        "thickness": "$stroke.thickness.default",
        "fill": "$color.border",
        "align": "inside"
      },
      "effect": {
        "type": "shadow",
        "shadowType": "outer",
        "offset": {
          "x": "$effect.shadow.offset.x",
          "y": "$effect.shadow.offset.y"
        },
        "blur": "$effect.shadow.blur",
        "spread": "$effect.shadow.spread",
        "color": "$color.shadow"
      },
      "cornerRadius": "$radius.lg"
    }
  ]
}
```

<!-- source: rules/aesthetic-layout.md -->

---
title: Break AI Layout Patterns
impact: HIGH
impactDescription: Avoid the typical AI layout of hero → 3 cards → CTA → footer and maintain visual interest.
tags: aesthetic,layout,anti-ai,visual-hierarchy
---

## Break AI Layout Patterns

The pattern of centering all elements and repeating three rows of cards with equal padding is typical of AI-generated design. Add variation to the visual flow by using asymmetrical two-column layouts, varying section heights, full-bleed images, and offset grids.

**Incorrect (why it's bad):**

- Center aligned hero
- Center aligned CTA

```json
{
  "type": "frame",
  "id": "page",
  "layout": "vertical",
  "align": "center",
  "children": [
    {
      "type": "frame",
      "id": "hero",
      "width": "fill_container",
      "height": 600
    },
    {
      "type": "frame",
      "id": "features",
      "layout": "horizontal",
      "children": [
        {
          "type": "frame",
          "id": "card1",
          "width": 400,
          "height": 300
        },
        {
          "type": "frame",
          "id": "card2",
          "width": 400,
          "height": 300
        },
        {
          "type": "frame",
          "id": "card3",
          "width": 400,
          "height": 300
        }
      ]
    },
    {
      "type": "frame",
      "id": "cta",
      "width": "fill_container",
      "height": 300
    }
  ]
}
```

**Correct (Why it’s good):**

```json
{
  "type": "frame",
  "id": "page",
  "layout": "vertical",
  "gap": 0,
  "children": [
    {
      "type": "frame",
      "id": "hero-asymmetric",
      "layout": "horizontal",
      "width": "fill_container",
      "height": 700,
      "children": [
        {
          "type": "frame",
          "id": "hero-text",
          "width": 560,
          "layout": "vertical",
          "gap": "$space.xl",
          "padding": [
            "$space.section",
            "$space.page",
            "$space.section",
            "$space.page"
          ]
        },
        {
          "type": "frame",
          "id": "hero-img",
          "width": "fill_container",
          "height": "fill_container",
          "fill": {
            "type": "image",
            "url": "hero.jpg",
            "mode": "fill"
          }
        }
      ]
    },
    {
      "type": "frame",
      "id": "feature-offset",
      "layout": "horizontal",
      "width": "fill_container",
      "height": "fit_content",
      "padding": [
        "$space.section",
        "$space.page",
        "$space.section",
        "$space.page"
      ],
      "gap": "$space.xl",
      "children": [
        {
          "type": "frame",
          "id": "feature-large",
          "width": 640,
          "height": 480
        },
        {
          "type": "frame",
          "id": "feature-stack",
          "layout": "vertical",
          "gap": "$space.lg",
          "width": "fill_container",
          "children": [
            {
              "type": "frame",
              "id": "feature-sm-1",
              "width": "fill_container",
              "height": 220
            },
            {
              "type": "frame",
              "id": "feature-sm-2",
              "width": "fill_container",
              "height": 220
            }
          ]
        }
      ]
    }
  ]
}
```

<!-- source: rules/aesthetic-typography.md -->

---
title: Aesthetic Typography — Display + Body Pairing
impact: HIGH
impactDescription: Same as using Inter alone Weight repetition creates a flat UI with no hierarchy.
tags: aesthetic,typography,font-pairing,weight
---

## Aesthetic Typography — Display + Body Pairing

It is a typical AI pattern to use Inter in all text and vary only the fontSize. Combine display fonts (Playfair Display, Fraunces, etc.) with body fonts (Source Sans 3, DM Sans, etc.), and use various weights of 400/500/600/700 to suit the role.

**Incorrect (why it's bad):**

```json
{
  "type": "frame",
  "id": "article",
  "layout": "vertical",
  "gap": "$space.md",
  "children": [
    {
      "type": "text",
      "id": "h1",
      "content": "title",
      "fontFamily": "Inter",
      "fontSize": "$font.size.4xl",
      "fontWeight": "700"
    },
    {
      "type": "text",
      "id": "h2",
      "content": "subtitle",
      "fontFamily": "Inter",
      "fontSize": "$font.size.2xl",
      "fontWeight": "700"
    },
    {
      "type": "text",
      "id": "body",
      "content": "body text",
      "fontFamily": "Inter",
      "fontSize": "$font.size.base",
      "fontWeight": "700"
    },
    {
      "type": "text",
      "id": "caption",
      "content": "caption",
      "fontFamily": "Inter",
      "fontSize": "$font.size.sm",
      "fontWeight": "700"
    }
  ]
}
```

**Correct (Why it’s good):**

```json
{
  "type": "frame",
  "id": "article",
  "layout": "vertical",
  "gap": "$space.md",
  "children": [
    {
      "type": "text",
      "id": "h1",
      "content": "title",
      "fontFamily": "$font.family.display",
      "fontSize": "$font.size.4xl",
      "fontWeight": "$font.weight.bold",
      "lineHeight": "$font.lineHeight.display",
      "fill": "$color.foreground",
      "textGrowth": "auto"
    },
    {
      "type": "text",
      "id": "h2",
      "content": "subtitle",
      "fontFamily": "$font.family.display",
      "fontSize": "$font.size.2xl",
      "fontWeight": "$font.weight.semibold",
      "lineHeight": "$font.lineHeight.heading",
      "fill": "$color.foreground",
      "textGrowth": "auto"
    },
    {
      "type": "text",
      "id": "body",
      "content": "body text",
      "fontFamily": "$font.family.body",
      "fontSize": "$font.size.base",
      "fontWeight": "$font.weight.regular",
      "lineHeight": "$font.lineHeight.body",
      "fill": "$color.foreground",
      "textGrowth": "auto"
    },
    {
      "type": "text",
      "id": "caption",
      "content": "caption",
      "fontFamily": "$font.family.body",
      "fontSize": "$font.size.sm",
      "fontWeight": "$font.weight.regular",
      "lineHeight": "$font.lineHeight.caption",
      "fill": "$color.muted",
      "textGrowth": "auto"
    }
  ]
}
```

<!-- source: rules/color-accessibility.md -->

---
title: WCAG 2.1 AA Contrast Ratio
impact: CRITICAL
impactDescription: Low-contrast text is unreadable to the visually impaired and violates legal accessibility standards.
tags: color,accessibility,WCAG,contrast,a11y
---

## WCAG 2.1 AA Contrast Ratio

Plain text requires a contrast ratio of **4.5:1 or higher** compared to the background, and large text (18px bold or higher) requires a contrast ratio of **3:1 or higher**. Writing light gray text on a white background or purple text on a blue background is an inadequate contrast ratio. When defining tokens, verify the contrast ratio for both light and dark.

**Incorrect (why it's bad):**

- #C0C0C0 on #FFFFFF = Contrast 1.5:1 — FAIL
- #9CA3AF on #FFFFFF = Contrast 2.5:1 — FAIL

```json
{
  "type": "frame",
  "id": "card",
  "fill": "#FFFFFF",
  "children": [
    {
      "type": "text",
      "id": "label",
      "fontWeight": "$font.weight.medium",
      "content": "Product Category",
      "fill": "#C0C0C0",
      "fontSize": "$font.size.sm"
    },
    {
      "type": "text",
      "id": "price",
      "fontWeight": "$font.weight.bold",
      "content": "$29.00",
      "fill": "#9CA3AF",
      "fontSize": "$font.size.lg"
    }
  ]
}
```

**Correct (Why it’s good):**

- $color.muted = #6B7280 on #FFFFFF = Contrast 4.6:1 — AA PASS
- $color.foreground = #111827 on #FFFFFF = Contrast 16:1 — AAA PASS

```json
{
  "type": "frame",
  "id": "card",
  "fill": "$color.background",
  "children": [
    {
      "type": "text",
      "id": "label",
      "fontWeight": "$font.weight.medium",
      "content": "Product Category",
      "fill": "$color.muted",
      "fontSize": "$font.size.sm",
      "textGrowth": "auto",
      "fontFamily": "$font.family.body"
    },
    {
      "type": "text",
      "id": "price",
      "fontWeight": "$font.weight.bold",
      "content": "$29.00",
      "fill": "$color.foreground",
      "fontSize": "$font.size.lg",
      "textGrowth": "auto",
      "fontFamily": "$font.family.body"
    }
  ]
}
```

<!-- source: rules/color-dark-mode.md -->

---
title: Dark Mode — No Pure Black/White
impact: MEDIUM
impactDescription: Pure black/white dark mode causes glare and flat layers.
tags: color,dark-mode,elevation,contrast
---

## Dark Mode — No Pure Black/White

In dark mode, it is prohibited to use `#000000` for background and `#FFFFFF` for text. Pure black and white combinations have too much contrast, which creates glare and leaves no room for elevation (surface layer) to be expressed as brightness. Set the background to a dark navy/slate color, the surface to be slightly lighter than the background, and the text to be off-white.

**Incorrect (why it's bad):**

```bash
# CLI command (run in terminal)
node scripts/set-variables.mjs design.pen --var '<name>=<type>:<value>'
```

```json
{
  "themes": {
    "mode": [
      "light",
      "dark"
    ]
  },
  "variables": {
    "color.background": {
      "type": "color",
      "value": [
        {
          "theme": {
            "mode": "light"
          },
          "value": "#FFFFFF"
        },
        {
          "theme": {
            "mode": "dark"
          },
          "value": "#000000"
        }
      ]
    },
    "color.foreground": {
      "type": "color",
      "value": [
        {
          "theme": {
            "mode": "light"
          },
          "value": "#000000"
        },
        {
          "theme": {
            "mode": "dark"
          },
          "value": "#FFFFFF"
        }
      ]
    },
    "color.surface": {
      "type": "color",
      "value": [
        {
          "theme": {
            "mode": "light"
          },
          "value": "#F5F5F5"
        },
        {
          "theme": {
            "mode": "dark"
          },
          "value": "#000000"
        }
      ]
    }
  }
}
```

**Correct (Why it’s good):**

```bash
# CLI command (run in terminal)
node scripts/set-variables.mjs design.pen --var '<name>=<type>:<value>'
```

- light=warm white, dark=deep navy
- Expression of elevation brighter than the background in dark mode
- Floating elements such as cards — brighter than the surface
- dark=off-white, not pure white

```json
{
  "themes": {
    "mode": [
      "light",
      "dark"
    ]
  },
  "variables": {
    "color.background": {
      "type": "color",
      "value": [
        {
          "theme": {
            "mode": "light"
          },
          "value": "#FAFAF7"
        },
        {
          "theme": {
            "mode": "dark"
          },
          "value": "#0F172A"
        }
      ]
    },
    "color.surface": {
      "type": "color",
      "value": [
        {
          "theme": {
            "mode": "light"
          },
          "value": "#F5F5F0"
        },
        {
          "theme": {
            "mode": "dark"
          },
          "value": "#1E293B"
        }
      ]
    },
    "color.surface-raised": {
      "type": "color",
      "value": [
        {
          "theme": {
            "mode": "light"
          },
          "value": "#FFFFFF"
        },
        {
          "theme": {
            "mode": "dark"
          },
          "value": "#293548"
        }
      ]
    },
    "color.foreground": {
      "type": "color",
      "value": [
        {
          "theme": {
            "mode": "light"
          },
          "value": "#1C1C18"
        },
        {
          "theme": {
            "mode": "dark"
          },
          "value": "#F1F5F9"
        }
      ]
    },
    "color.muted": {
      "type": "color",
      "value": [
        {
          "theme": {
            "mode": "light"
          },
          "value": "#6B7280"
        },
        {
          "theme": {
            "mode": "dark"
          },
          "value": "#94A3B8"
        }
      ]
    }
  }
}
```

<!-- source: rules/color-ratio.md -->

---
title: 60-30-10 Color Ratio
impact: MEDIUM
impactDescription: An even distribution of colors creates a visually distracting and distracting design.
tags: color,ratio,palette,balance
---

## 60-30-10 Color Ratio

Color distribution follows the 60-30-10 ratio. 60% neutral (background, surface), 30% secondary (section background, secondary UI), 10% primary accent (CTA button, link, emphasis). If the five colors are evenly distributed, it results in a distracting design where you don't know where to focus your attention.

**Incorrect (why it's bad):**

- blue
- purple
- pink
- yellow
- Green

```json
{
  "type": "frame",
  "id": "home",
  "layout": "vertical",
  "children": [
    {
      "type": "frame",
      "id": "nav",
      "fill": "#3B82F6",
      "height": "fit_content"
    },
    {
      "type": "frame",
      "id": "hero",
      "fill": "#8B5CF6",
      "height": 500
    },
    {
      "type": "frame",
      "id": "features",
      "fill": "#EC4899",
      "height": 400
    },
    {
      "type": "frame",
      "id": "testimonial",
      "fill": "#F59E0B",
      "height": 300
    },
    {
      "type": "frame",
      "id": "cta",
      "fill": "#10B981",
      "height": 300
    }
  ]
}
```

**Correct (Why it’s good):**

- 60% — Neutral background
- 60% neutral
- 30% surface — differentiated but neutral series
- 30% surface
- 10% primary accent — Emphasize only the CTA

```json
{
  "type": "frame",
  "id": "home",
  "layout": "vertical",
  "fill": "$color.background",
  "children": [
    {
      "type": "frame",
      "id": "nav",
      "fill": "$color.background"
    },
    {
      "type": "frame",
      "id": "hero",
      "fill": "$color.background"
    },
    {
      "type": "frame",
      "id": "features",
      "fill": "$color.surface"
    },
    {
      "type": "frame",
      "id": "cta-section",
      "fill": "$color.surface",
      "children": [
        {
          "type": "frame",
          "id": "cta-btn",
          "fill": "$color.primary"
        }
      ]
    }
  ]
}
```

<!-- source: rules/color-semantic.md -->

---
title: 3-Layer Color System
impact: HIGH
impactDescription: Layerless color tokens make theme switching and rebranding impossible.
tags: color,semantic,tokens,palette,system
---

## 3-Layer Color System

The color system is designed in three layers. ① Primitive (primary color palette: `$palette.teal.500`) → ② Semantic (role-based: `$color.primary`) → ③ Component (Component only: `$btn.bg`). In design files, only Semantic layers are used, and direct references to Primitives are prohibited.

**Incorrect (why it's bad):**

```json
{
  "type": "frame",
  "id": "alert-error",
  "fill": "$palette.red.50",
  "stroke": {
    "align": "inside",
    "thickness": 1,
    "fill": "$palette.red.200"
  },
  "children": [
    {
      "type": "text",
      "id": "error-msg",
      "fontWeight": "$font.weight.medium",
      "fill": "$palette.red.700",
      "content": "error message"
    }
  ]
}
```

**Correct (Why it’s good):**

- Semantic layer definition (applied after executing CLI (set-variables))
- Error status background

```json
[
  {
    "variables": {
      "color.destructive": {
        "type": "color",
        "value": [
          {
            "theme": {
              "mode": "light"
            },
            "value": "#FEF2F2"
          },
          {
            "theme": {
              "mode": "dark"
            },
            "value": "#450A0A"
          }
        ]
      },
      "color.destructive-border": {
        "type": "color",
        "value": [
          {
            "theme": {
              "mode": "light"
            },
            "value": "#FECACA"
          },
          {
            "theme": {
              "mode": "dark"
            },
            "value": "#7F1D1D"
          }
        ]
      },
      "color.destructive-foreground": {
        "type": "color",
        "value": [
          {
            "theme": {
              "mode": "light"
            },
            "value": "#B91C1C"
          },
          {
            "theme": {
              "mode": "dark"
            },
            "value": "#FCA5A5"
          }
        ]
      },
      "color.primary": {
        "type": "color",
        "value": [
          {
            "theme": {
              "mode": "light"
            },
            "value": "#0D9488"
          },
          {
            "theme": {
              "mode": "dark"
            },
            "value": "#2DD4BF"
          }
        ]
      },
      "color.surface": {
        "type": "color",
        "value": [
          {
            "theme": {
              "mode": "light"
            },
            "value": "#F9FAFB"
          },
          {
            "theme": {
              "mode": "dark"
            },
            "value": "#1E293B"
          }
        ]
      },
      "color.foreground": {
        "type": "color",
        "value": [
          {
            "theme": {
              "mode": "light"
            },
            "value": "#111827"
          },
          {
            "theme": {
              "mode": "dark"
            },
            "value": "#F1F5F9"
          }
        ]
      },
      "color.muted": {
        "type": "color",
        "value": [
          {
            "theme": {
              "mode": "light"
            },
            "value": "#6B7280"
          },
          {
            "theme": {
              "mode": "dark"
            },
            "value": "#94A3B8"
          }
        ]
      },
      "color.border": {
        "type": "color",
        "value": [
          {
            "theme": {
              "mode": "light"
            },
            "value": "#E5E7EB"
          },
          {
            "theme": {
              "mode": "dark"
            },
            "value": "#334155"
          }
        ]
      }
    }
  },
  {
    "type": "frame",
    "id": "alert-error",
    "fill": "$color.destructive",
    "stroke": {
      "align": "inside",
      "thickness": "$stroke.thickness.default",
      "fill": "$color.destructive-border"
    },
    "children": [
      {
        "type": "text",
        "id": "error-msg",
        "fontWeight": "$font.weight.medium",
        "fontFamily": "$font.family.body",
        "textGrowth": "auto",
        "fill": "$color.destructive-foreground",
        "content": "error message"
      }
    ]
  }
]
```

<!-- source: rules/component-atomic.md -->

---
title: Atomic Design Hierarchy
impact: HIGH
impactDescription: Flat structured pages are not reusable and cannot maintain consistency.
tags: component,atomic-design,atom,molecule,organism
---

## Atomic Design Hierarchy

Components must be combined in the following hierarchy: Atom → Molecule → Organism → Template. Make Atoms (buttons, icons, badges) reusable first, combine them with refs in Molecules (cards, form fields), and combine Molecules in Organisms (navigation, feature sections). It is prohibited to flatly list all elements directly in the page frame.

**Incorrect (why it's bad):**

```json
{
  "type": "frame",
  "id": "home-page",
  "layout": "vertical",
  "children": [
    {
      "type": "frame",
      "id": "logo",
      "width": 120,
      "height": 32
    },
    {
      "type": "text",
      "id": "nav-item-1",
      "content": "product"
    },
    {
      "type": "text",
      "id": "nav-item-2",
      "content": "price"
    },
    {
      "type": "frame",
      "id": "hero-bg",
      "width": "fill_container",
      "height": 600
    },
    {
      "type": "text",
      "id": "hero-title",
      "content": "title"
    },
    {
      "type": "frame",
      "id": "card-1",
      "width": 360,
      "height": 240
    },
    {
      "type": "frame",
      "id": "card-2",
      "width": 360,
      "height": 240
    },
    {
      "type": "frame",
      "id": "card-3",
      "width": 360,
      "height": 240
    }
  ]
}
```

**Correct (Why it’s good):**

- Step 1: Register Atom — Specify reusable=true on individual nodes
- Step 2: Molecule — Card combines Button Atom with ref
- Step 3: Organism — Nav combines atoms
- Step 4: Page — Combine with Organism ref

```json
[
  {
    "type": "frame",
    "id": "btn-primary",
    "name": "Button/Primary",
    "reusable": true,
    "layout": "horizontal"
  },
  {
    "type": "frame",
    "id": "badge-default",
    "name": "Badge/Default",
    "reusable": true,
    "layout": "horizontal"
  },
  {
    "id": "card-feature",
    "name": "Card/Feature",
    "type": "frame",
    "reusable": true,
    "layout": "vertical",
    "children": [
      {
        "type": "frame",
        "id": "card-icon"
      },
      {
        "type": "text",
        "id": "card-title",
        "fontWeight": "$font.weight.bold",
        "fontFamily": "$font.family.display",
        "textGrowth": "auto"
      },
      {
        "type": "text",
        "id": "card-body",
        "fontWeight": "$font.weight.regular",
        "fontFamily": "$font.family.body",
        "textGrowth": "auto"
      },
      {
        "type": "ref",
        "ref": "btn-primary",
        "id": "card-cta"
      }
    ]
  },
  {
    "id": "nav-topbar",
    "name": "Nav/TopBar",
    "type": "frame",
    "reusable": true,
    "layout": "horizontal",
    "children": [
      {
        "type": "frame",
        "id": "logo"
      },
      {
        "type": "frame",
        "id": "nav-links",
        "layout": "horizontal"
      },
      {
        "type": "ref",
        "ref": "btn-primary",
        "id": "cta-nav"
      }
    ]
  },
  {
    "type": "frame",
    "id": "home-page",
    "layout": "vertical",
    "children": [
      {
        "type": "ref",
        "ref": "nav-topbar",
        "id": "nav"
      },
      {
        "type": "ref",
        "ref": "hero-default",
        "id": "hero"
      },
      {
        "type": "ref",
        "ref": "section-features",
        "id": "features"
      }
    ]
  }
]
```

<!-- source: rules/component-naming.md -->

---
title: Component Slash Naming
impact: HIGH
impactDescription: Non-standard naming hinders component discovery and team collaboration.
tags: component,naming,convention,slash
---

## Component Slash Naming

Every reusable component is named **two fields**:
- `id`: slug without slash (`btn-primary`, `card-default`, `nav-topbar`)
- `name`: Figma standard slash naming (`"Button/Primary"`, `"Card/Default"`, `"Nav/TopBar"`)

Schema validation will fail if `id` contains a slash (`/`). Camel case, underscores, and abbreviations are also prohibited. Slash separation in `name` is consistent with the Figma standard and allows grouping by category when searching with `search-nodes --reusable`.

**Incorrect (why it's bad):**

- Camel cases are prohibited.
- No underscores
- No abbreviations
- Single name without categories
- Single name without variations

```json
[
  {
    "id": "primaryBtn",
    "reusable": true
  },
  {
    "id": "card_large",
    "reusable": true
  },
  {
    "id": "navBar",
    "reusable": true
  },
  {
    "id": "FormInputText",
    "reusable": true
  },
  {
    "id": "modal",
    "reusable": true
  }
]
```

**Correct (Why it’s good):**

- id: slug, name: Figma slash naming

```json
[
  {
    "id": "btn-primary",
    "name": "Button/Primary",
    "reusable": true
  },
  {
    "id": "btn-secondary",
    "name": "Button/Secondary",
    "reusable": true
  },
  {
    "id": "btn-ghost",
    "name": "Button/Ghost",
    "reusable": true
  },
  {
    "id": "card-default",
    "name": "Card/Default",
    "reusable": true
  },
  {
    "id": "card-featured",
    "name": "Card/Featured",
    "reusable": true
  },
  {
    "id": "nav-topbar",
    "name": "Nav/TopBar",
    "reusable": true
  },
  {
    "id": "nav-mobile",
    "name": "Nav/Mobile",
    "reusable": true
  },
  {
    "id": "form-input-text",
    "name": "Form/InputText",
    "reusable": true
  },
  {
    "id": "form-input-password",
    "name": "Form/InputPassword",
    "reusable": true
  },
  {
    "id": "modal-default",
    "name": "Modal/Default",
    "reusable": true
  },
  {
    "id": "modal-confirm",
    "name": "Modal/Confirm",
    "reusable": true
  }
]
```

<!-- source: rules/component-reuse-first.md -->

---
title: Search Before Create
impact: HIGH
impactDescription: Ignoring existing components and creating new ones every time will fragment your design system.
tags: component,reuse,search-nodes,anti-duplication
---

## Search Before Create

Before creating a new component or element, you must search for existing reusables with `search-nodes --reusable`. If you already have `btn-primary` and create a new button, the styles of the two buttons will evolve differently and become inconsistent. If there are search results, create an instance with `ref`.

**Incorrect (why it's bad):**

Create new button directly without search-nodes

```json
{
  "type": "frame",
  "id": "new-submit-btn",
  "fill": "#2563EB",
  "cornerRadius": 6,
  "padding": [
    10,
    20,
    10,
    20
  ],
  "children": [
    {
      "type": "text",
      "id": "new-btn-label",
      "content": "submit",
      "fill": "#FFFFFF",
      "fontSize": 15
    }
  ]
}
```

**Correct (Why it’s good):**

Step 1: First, search for existing reusables (run CLI search-nodes)

```bash
node scripts/search-nodes.mjs design.pen --name "button" --reusable
```

Step 2: Search result: `btn-primary` → Create instance with `ref`

```json
[
  {
    "type": "ref",
    "ref": "btn-primary",
    "id": "submit-btn",
    "descendants": {
      "label": {
        "content": "submit"
      }
    }
  }
]
```
<!-- source: rules/component-slot.md -->

---
title: Declare Content Slots
impact: MEDIUM
impactDescription: Components with hard-coded content cannot be reused and must be created anew each time.
tags: component,slot,reusable,children
---

## Declare Content Slots

Components whose content changes (cards, modals, list items, etc.) must declare their content area as `slot`. If you hard-code the title and description directly inside the card, it cannot be reused at all when you need a card with different content. Declare `slot: ["content"]` and inject it as children in the ref instance.

**Incorrect (why it's bad):**

```json
{
  "id": "card-default",
  "name": "Card/Default",
  "type": "frame",
  "layout": "vertical",
  "gap": "$space.md",
  "padding": [
    "$space.lg",
    "$space.lg",
    "$space.lg",
    "$space.lg"
  ],
  "children": [
    {
      "type": "text",
      "id": "title",
      "fontWeight": "$font.weight.bold",
      "content": "Card title hardcoding"
    },
    {
      "type": "text",
      "id": "body",
      "fontWeight": "$font.weight.regular",
      "content": "Card body hardcoding"
    },
    {
      "type": "frame",
      "id": "footer"
    }
  ]
}
```

**Correct (Why it’s good):**

- Inject content into slot from instance

```json
[
  {
    "id": "card-default",
    "name": "Card/Default",
    "type": "frame",
    "layout": "vertical",
    "gap": "$space.md",
    "padding": [
      "$space.lg",
      "$space.lg",
      "$space.lg",
      "$space.lg"
    ],
    "fill": "$color.surface",
    "cornerRadius": "$radius.lg",
    "stroke": {
      "align": "inside",
      "thickness": "$stroke.thickness.default",
      "fill": "$color.border"
    },
    "slot": [
      "header",
      "content",
      "footer"
    ],
    "children": [
      {
        "type": "frame",
        "id": "slot-header",
        "name": "header",
        "width": "fill_container"
      },
      {
        "type": "frame",
        "id": "slot-content",
        "name": "content",
        "width": "fill_container"
      },
      {
        "type": "frame",
        "id": "slot-footer",
        "name": "footer",
        "width": "fill_container"
      }
    ]
  },
  {
    "type": "ref",
    "ref": "card-default",
    "id": "feature-card-1",
    "children": [
      {
        "type": "text",
        "id": "header-title",
        "name": "header",
        "content": "Real-time collaboration",
        "fontFamily": "$font.family.display",
        "fontSize": "$font.size.xl",
        "fontWeight": "$font.weight.semibold",
        "textGrowth": "auto"
      },
      {
        "type": "text",
        "id": "content-desc",
        "fontWeight": "$font.weight.regular",
        "name": "content",
        "content": "Edit simultaneously with your teammates.",
        "fontFamily": "$font.family.body",
        "fill": "$color.muted",
        "textGrowth": "auto"
      },
      {
        "type": "ref",
        "ref": "btn-ghost",
        "id": "footer-learn-more",
        "name": "footer"
      }
    ]
  }
]
```

<!-- source: rules/component-variant.md -->

---
title: Variants as Separate Reusables
impact: HIGH
impactDescription: Putting conditional branches on a single component complicates reuse and increases maintenance costs.
tags: component,variant,reusable
---

## Variants as Separate Reusables

Variants with different styles, such as Primary/Secondary/Ghost variants of buttons, are implemented separately as reusable. It is prohibited to include conditional branches such as `if variant === 'primary'` in one component. Making each variant independently reusable simplifies instance creation and clarifies the intent.

**Incorrect (why it's bad):**

- Branching to variant props — increased complexity

```json
{
  "id": "button",
  "type": "frame",
  "reusable": true,
  "props": {
    "variant": "primary"
  },
  "children": [
    {
      "type": "text",
      "id": "label",
      "content": "button",
      "fill": {
        "if_prop_variant_primary": "$color.on-primary",
        "else": "$color.primary"
      }
    }
  ]
}
```

**Correct (Why it’s good):**

```json
[
  {
    "id": "btn-primary",
    "name": "Button/Primary",
    "type": "frame",
    "reusable": true,
    "layout": "horizontal",
    "fill": "$color.primary",
    "cornerRadius": "$radius.md",
    "padding": [
      "$space.sm",
      "$space.lg",
      "$space.sm",
      "$space.lg"
    ],
    "children": [
      {
        "type": "text",
        "id": "label",
        "content": "button",
        "fill": "$color.on-primary",
        "fontSize": "$font.size.base",
        "fontWeight": "$font.weight.medium",
        "fontFamily": "$font.family.body",
        "textGrowth": "auto"
      }
    ]
  },
  {
    "id": "btn-secondary",
    "name": "Button/Secondary",
    "type": "frame",
    "reusable": true,
    "layout": "horizontal",
    "fill": "transparent",
    "stroke": {
      "thickness": "$stroke.thickness.default",
      "fill": "$color.primary",
      "align": "inside"
    },
    "cornerRadius": "$radius.md",
    "padding": [
      "$space.sm",
      "$space.lg",
      "$space.sm",
      "$space.lg"
    ],
    "children": [
      {
        "type": "text",
        "id": "label",
        "content": "button",
        "fill": "$color.primary",
        "fontSize": "$font.size.base",
        "fontWeight": "$font.weight.medium",
        "fontFamily": "$font.family.body",
        "textGrowth": "auto"
      }
    ]
  },
  {
    "id": "btn-ghost",
    "name": "Button/Ghost",
    "type": "frame",
    "reusable": true,
    "layout": "horizontal",
    "fill": "transparent",
    "cornerRadius": "$radius.md",
    "padding": [
      "$space.sm",
      "$space.lg",
      "$space.sm",
      "$space.lg"
    ],
    "children": [
      {
        "type": "text",
        "id": "label",
        "content": "button",
        "fill": "$color.foreground",
        "fontSize": "$font.size.base",
        "fontWeight": "$font.weight.medium",
        "fontFamily": "$font.family.body",
        "textGrowth": "auto"
      }
    ]
  }
]
```

<!-- source: rules/layout-auto-layout.md -->

---
title: Auto Layout Required
impact: CRITICAL
impactDescription: If all containers do not have Auto Layout, overflow and alignment collapse will occur.
tags: layout,auto-layout,overflow
---

## Auto Layout Required

All container frames must specify the `layout` attribute. If `layout: "none"`, children overlap with absolute coordinates, and the layout will be broken when content is changed. Enable automatic alignment with `layout: "vertical"` or `"horizontal"` + `gap`.

**Incorrect (why it's bad):**

```json
{
  "type": "frame",
  "id": "card-container",
  "layout": "none",
  "width": 360,
  "height": 200,
  "children": [
    {
      "type": "text",
      "id": "title",
      "fontWeight": "$font.weight.bold",
      "x": 16,
      "y": 16,
      "content": "title"
    },
    {
      "type": "text",
      "id": "body",
      "fontWeight": "$font.weight.regular",
      "x": 16,
      "y": 48,
      "content": "text"
    },
    {
      "type": "frame",
      "id": "btn",
      "x": 16,
      "y": 160,
      "width": 120,
      "height": 36
    }
  ]
}
```

**Correct (Why it’s good):**

```json
{
  "type": "frame",
  "id": "card-container",
  "layout": "vertical",
  "gap": "$space.md",
  "padding": [
    "$space.lg",
    "$space.lg",
    "$space.lg",
    "$space.lg"
  ],
  "width": 360,
  "height": "fit_content",
  "children": [
    {
      "type": "text",
      "id": "title",
      "fontWeight": "$font.weight.bold",
      "content": "title",
      "fill": "$color.foreground",
      "textGrowth": "auto",
      "fontFamily": "$font.family.display"
    },
    {
      "type": "text",
      "id": "body",
      "fontWeight": "$font.weight.regular",
      "content": "text",
      "fill": "$color.muted",
      "textGrowth": "auto",
      "fontFamily": "$font.family.body"
    },
    {
      "type": "frame",
      "id": "btn",
      "width": "fill_container",
      "height": 36
    }
  ]
}
```

<!-- source: rules/layout-canvas-placement.md -->

---
title: Top-level canvas placement — no layer overlap
impact: CRITICAL
impactDescription: Missing top-level coordinates places nodes at (0,0) by default and causes component libraries and showcases to overlap.
tags: layout,canvas,top-level,placement,overlap,bounding-box
---

## Top-level canvas placement — no layer overlap

All top-level nodes in root `children` (reusables, showcase frames, and utility canvases) must define explicit `x` and `y` coordinates and must not overlap each other. In `.pen`, missing top-level coordinates commonly collapse nodes to `(0,0)`, creating invisible stacking and broken handoff.

> **Note:** Top-level canvas coordinates (`x`, `y`) are inherently absolute and are exempt from the "no hardcoded values" token rule. Only colors, spacing, typography, and radii require token references.

Essential rules:
1. Every top-level child node must include `x` and `y`
2. Place reusable components in a dedicated **Component Library** zone (for example, `x = 40` with sufficient vertical spacing)
3. Place showcase frames in a separate zone to the right of the library (for example, `x >= 800`)
4. Keep minimum vertical spacing between sibling nodes: previous node estimated height + at least `80px`
5. After placement, verify absolute bounding boxes do not intersect

Recommended canvas layout pattern:

```text
Canvas Layout:
┌─────────────────────────────────────────────────┐
│  Component Library (x=40)   │  Showcases (x=800+)  │
│  ┌──────────────┐          │  ┌────────────────┐  │
│  │ VoteButton   │ y=40     │  │ Light Showcase │ y=40  │
│  └──────────────┘          │  │ (1440 wide)    │  │
│  ┌──────────────┐          │  └────────────────┘  │
│  │ SidebarItem  │ y=200    │                      │
│  └──────────────┘          │  ┌────────────────┐  │
│  ┌──────────────┐          │  │ Dark Showcase  │ y=1200  │
│  │ NavBar       │ y=320    │  │ (1440 wide)    │  │
│  └──────────────┘          │  └────────────────┘  │
│  ┌──────────────┐          │                      │
│  │ PostCard     │ y=500    │                      │
│  └──────────────┘          │                      │
└─────────────────────────────────────────────────┘
```

**Incorrect (Why it's bad):**

- Top-level nodes are missing `x`, `y`
- All three nodes collapse to `(0,0)` and overlap

```json
{
  "version": "2.8",
  "children": [
    {
      "type": "frame",
      "id": "vote-button",
      "name": "Button/Vote",
      "reusable": true,
      "width": "$component.button.width",
      "height": "$component.button.height",
      "layout": "horizontal",
      "fill": "$color.primary",
      "children": [
        {
          "type": "text",
          "id": "vote-button-label",
          "content": "Vote",
          "fontFamily": "$font.family.body",
          "fontWeight": "$font.weight.semibold",
          "textGrowth": "auto",
          "fill": "$color.on-primary"
        }
      ]
    },
    {
      "type": "frame",
      "id": "sidebar-item",
      "name": "Sidebar/Item",
      "reusable": true,
      "width": "$component.sidebar.item.width",
      "height": "$component.sidebar.item.height",
      "layout": "horizontal",
      "fill": "$color.surface"
    },
    {
      "type": "frame",
      "id": "showcase-light",
      "name": "Showcase/Light",
      "width": "$layout.showcase.width",
      "height": "$layout.showcase.height",
      "layout": "vertical",
      "fill": "$color.background",
      "children": [
        {
          "type": "text",
          "id": "showcase-light-title",
          "content": "Light Theme Showcase",
          "fontFamily": "$font.family.display",
          "fontWeight": "$font.weight.bold",
          "textGrowth": "auto",
          "fill": "$color.foreground"
        }
      ]
    }
  ]
}
```

**Correct (Why it's good):**

- Every top-level node has explicit `x`, `y`
- Component library and showcase zones are separated on canvas
- Vertical spacing is preserved, preventing collisions

```json
{
  "version": "2.8",
  "children": [
    {
      "type": "frame",
      "id": "vote-button",
      "name": "Button/Vote",
      "reusable": true,
      "x": 40,
      "y": 40,
      "width": "$component.button.width",
      "height": "$component.button.height",
      "layout": "horizontal",
      "fill": "$color.primary",
      "children": [
        {
          "type": "text",
          "id": "vote-button-label",
          "content": "Vote",
          "fontFamily": "$font.family.body",
          "fontWeight": "$font.weight.semibold",
          "textGrowth": "auto",
          "fill": "$color.on-primary"
        }
      ]
    },
    {
      "type": "frame",
      "id": "sidebar-item",
      "name": "Sidebar/Item",
      "reusable": true,
      "x": 40,
      "y": 200,
      "width": "$component.sidebar.item.width",
      "height": "$component.sidebar.item.height",
      "layout": "horizontal",
      "fill": "$color.surface"
    },
    {
      "type": "frame",
      "id": "showcase-light",
      "name": "Showcase/Light",
      "x": 800,
      "y": 40,
      "width": "$layout.showcase.width",
      "height": "$layout.showcase.height",
      "layout": "vertical",
      "fill": "$color.background",
      "children": [
        {
          "type": "text",
          "id": "showcase-light-title",
          "content": "Light Theme Showcase",
          "fontFamily": "$font.family.display",
          "fontWeight": "$font.weight.bold",
          "textGrowth": "auto",
          "fill": "$color.foreground"
        }
      ]
    },
    {
      "type": "frame",
      "id": "showcase-dark",
      "name": "Showcase/Dark",
      "x": 800,
      "y": 1200,
      "width": "$layout.showcase.width",
      "height": "$layout.showcase.height",
      "layout": "vertical",
      "fill": "$color.background-inverse",
      "children": [
        {
          "type": "text",
          "id": "showcase-dark-title",
          "content": "Dark Theme Showcase",
          "fontFamily": "$font.family.display",
          "fontWeight": "$font.weight.bold",
          "textGrowth": "auto",
          "fill": "$color.foreground-inverse"
        }
      ]
    }
  ]
}
```
<!-- source: rules/layout-no-overlap.md -->

---
title: Prevent overlap between elements
impact: CRITICAL
impactDescription: Without width calculation and placement rules between sibling elements, feeds/sidebars overlap in 3-column layouts.
tags: layout,no-overlap,three-column,auto-layout,overflow
---

## Prevent overlap between elements

The most common causes of sibling elements overlapping in a three-column layout are overuse of `fit_content`, omission of `gap`, unverified width summation, and absolute coordinate placement. Be sure to place sibling frames using Auto Layout, and specify the `width` of each column as a fixed value or `fill_container`. Only overlays/modals allow the `layout: "none"` + z-order exception.

Essential rules:
1. In a three-column layout, each column must specify `width` as a fixed value or `fill_container` (parallel placement of `fit_content` is prohibited)
2. Parent frame requires `layout: "horizontal"` + `gap`
3. Calculate column width sum + gap so that it does not exceed the parent width
4. Do not use `x`, `y` absolute coordinates for sibling placement (Auto Layout required)
5. Overlay/modal only exception (see z-order rules)

**Incorrect (why it's bad):**

```json
{
  "type": "frame",
  "id": "layout-shell",
  "width": "$layout.page.width",
  "height": "fit_content",
  "layout": "none",
  "children": [
    {
      "type": "frame",
      "id": "left-sidebar",
      "x": 0,
      "y": 0,
      "width": "fit_content",
      "height": "fit_content",
      "layout": "vertical",
      "children": [
        {
          "type": "text",
          "id": "left-title",
          "content": "my community",
          "fontFamily": "$font.family.body",
          "fontWeight": "$font.weight.semibold",
          "textGrowth": "auto",
          "fill": "$color.foreground"
        }
      ]
    },
    {
      "type": "frame",
      "id": "feed-column",
      "x": 220,
      "y": 0,
      "width": "fit_content",
      "height": "fit_content",
      "layout": "vertical",
      "children": [
        {
          "type": "text",
          "id": "feed-title",
          "content": "feed",
          "fontFamily": "$font.family.display",
          "fontWeight": "$font.weight.semibold",
          "textGrowth": "auto",
          "fill": "$color.foreground"
        }
      ]
    },
    {
      "type": "frame",
      "id": "right-sidebar",
      "x": 980,
      "y": 0,
      "width": "fit_content",
      "height": "fit_content",
      "layout": "vertical",
      "children": [
        {
          "type": "text",
          "id": "right-title",
          "content": "Trending",
          "fontFamily": "$font.family.body",
          "fontWeight": "$font.weight.semibold",
          "textGrowth": "auto",
          "fill": "$color.foreground"
        }
      ]
    }
  ]
}
```

**Correct (Why it’s good):**

```json
{
  "type": "frame",
  "id": "layout-shell",
  "width": "$layout.page.width",
  "height": "fit_content",
  "layout": "horizontal",
  "gap": "$space.section",
  "padding": [
    "$space.section",
    "$space.section",
    "$space.section",
    "$space.section"
  ],
  "alignItems": "start",
  "children": [
    {
      "type": "frame",
      "id": "left-sidebar",
      "width": "$layout.sidebar.left",
      "height": "fit_content",
      "layout": "vertical",
      "gap": "$space.md",
      "children": [
        {
          "type": "text",
          "id": "left-title",
          "content": "my community",
          "fontFamily": "$font.family.body",
          "fontWeight": "$font.weight.semibold",
          "textGrowth": "auto",
          "fill": "$color.foreground"
        }
      ]
    },
    {
      "type": "frame",
      "id": "feed-column",
      "width": "fill_container",
      "height": "fit_content",
      "layout": "vertical",
      "gap": "$space.lg",
      "children": [
        {
          "type": "text",
          "id": "feed-title",
          "content": "feed",
          "fontFamily": "$font.family.display",
          "fontWeight": "$font.weight.semibold",
          "textGrowth": "auto",
          "fill": "$color.foreground"
        }
      ]
    },
    {
      "type": "frame",
      "id": "right-sidebar",
      "width": "$layout.sidebar.right",
      "height": "fit_content",
      "layout": "vertical",
      "gap": "$space.md",
      "children": [
        {
          "type": "text",
          "id": "right-title",
          "content": "Trending",
          "fontFamily": "$font.family.body",
          "fontWeight": "$font.weight.semibold",
          "textGrowth": "auto",
          "fill": "$color.foreground"
        }
      ]
    }
  ]
}
```

Width verification example:
- `left(200) + center(fill) + right(280) + gap(32 * 2) + padding(32 * 2) <= parent(1440)`
- The fixed width sum and spacing must be confirmed first so the central `fill_container` can safely occupy the remaining space.

<!-- source: rules/layout-overflow.md -->

---
title: Prevent Text Overflow
impact: CRITICAL
impactDescription: If textGrowth is missing, the text will exceed the container and the UI will break.
tags: layout,overflow,text,textGrowth
---

## Prevent Text Overflow

Text nodes must have the `textGrowth` property specified. If you only have a fixed `width` and no `textGrowth`, long text will either spill out of the container or be truncated. Set the width to `fill_container` and `textGrowth` to `"fixed-width"` to get word wrapping to work.

**Incorrect (why it's bad):**

```json
{
  "type": "frame",
  "id": "description-block",
  "layout": "vertical",
  "width": 480,
  "children": [
    {
      "type": "text",
      "id": "desc",
      "fontWeight": "$font.weight.regular",
      "width": 480,
      "height": 20,
      "fontSize": "$font.size.base",
      "content": "This text is very long and may not fit on one line."
    }
  ]
}
```

**Correct (Why it’s good):**

```json
{
  "type": "frame",
  "id": "description-block",
  "layout": "vertical",
  "gap": "$space.sm",
  "width": "fill_container",
  "children": [
    {
      "type": "text",
      "id": "desc",
      "fontWeight": "$font.weight.regular",
      "width": "fill_container",
      "height": "fit_content",
      "textGrowth": "fixed-width",
      "fontSize": "$font.size.base",
      "lineHeight": 1.6,
      "fill": "$color.foreground",
      "content": "This text is very long and may not fit on one line.",
      "fontFamily": "$font.family.body"
    }
  ]
}
```

<!-- source: rules/layout-responsive.md -->

---
title: Responsive via Separate Frames
impact: HIGH
impactDescription: Responsive simulates independent frames for each resolution rather than processing single frame conditions.
tags: layout,responsive,breakpoint,mobile,desktop
---

## Responsive via Separate Frames

Since .pen does not have a CSS media query, the responsive version creates and expresses an independent frame for each resolution: 375 (mobile), 768 (tablet), and 1440 (desktop). Share components as `ref` to minimize duplication. If you try to handle all resolutions in one frame, layout becomes impossible.

**Incorrect (why it's bad):**

- No idea how it will look on mobile

```json
{
  "type": "frame",
  "id": "page-all",
  "width": 1440,
  "layout": "vertical",
  "children": [
    {
      "type": "frame",
      "id": "nav",
      "width": "fill_container"
    }
  ]
}
```

**Correct (Why it’s good):**

```json
[
  {
    "type": "frame",
    "id": "page-mobile",
    "width": 375,
    "height": "fit_content",
    "layout": "vertical",
    "gap": 0,
    "children": [
      {
        "type": "ref",
        "ref": "nav-mobile-comp",
        "id": "nav-mobile"
      },
      {
        "type": "ref",
        "ref": "hero-mobile-comp",
        "id": "hero-mobile"
      }
    ]
  },
  {
    "type": "frame",
    "id": "page-tablet",
    "width": 768,
    "height": "fit_content",
    "layout": "vertical",
    "gap": 0,
    "children": [
      {
        "type": "ref",
        "ref": "nav-topbar",
        "id": "nav-tablet"
      },
      {
        "type": "ref",
        "ref": "hero-default",
        "id": "hero-tablet"
      }
    ]
  },
  {
    "type": "frame",
    "id": "page-desktop",
    "width": 1440,
    "height": "fit_content",
    "layout": "vertical",
    "gap": 0,
    "children": [
      {
        "type": "ref",
        "ref": "nav-topbar",
        "id": "nav-desktop"
      },
      {
        "type": "ref",
        "ref": "hero-wide",
        "id": "hero-desktop"
      }
    ]
  }
]
```

<!-- source: rules/layout-sizing.md -->

---
title: Sizing Mode by Context
impact: CRITICAL
impactDescription: Overuse of fixed px makes responsive layouts impossible.
tags: layout,sizing,responsive,width,height
---

## Sizing Mode by Context

Depending on the role of the element, different size modes must be applied. The principle is that the screen frame is fixed px, section/row is `fill_container`, text block is `fit_content`, and button label is `auto`. If you use fixed px everywhere, it will get cut off or have spaces as the content expands.

**Incorrect (why it's bad):**

```json
{
  "type": "frame",
  "id": "page",
  "width": 1440,
  "height": 900,
  "children": [
    {
      "type": "frame",
      "id": "section-hero",
      "width": 1440,
      "height": 600,
      "children": [
        {
          "type": "text",
          "id": "headline",
          "fontWeight": "$font.weight.bold",
          "width": 600,
          "height": 48,
          "content": "Headline"
        },
        {
          "type": "text",
          "id": "sub",
          "fontWeight": "$font.weight.regular",
          "width": 600,
          "height": 24,
          "content": "Subtitle text"
        }
      ]
    }
  ]
}
```

**Correct (Why it’s good):**

```json
{
  "type": "frame",
  "id": "page",
  "width": 1440,
  "height": 900,
  "children": [
    {
      "type": "frame",
      "id": "section-hero",
      "width": "fill_container",
      "height": "fit_content",
      "layout": "vertical",
      "gap": "$space.lg",
      "padding": [
        "$space.section",
        "$space.page",
        "$space.section",
        "$space.page"
      ],
      "children": [
        {
          "type": "text",
          "id": "headline",
          "fontWeight": "$font.weight.bold",
          "width": "fill_container",
          "height": "fit_content",
          "textGrowth": "auto",
          "content": "Headline",
          "fontFamily": "$font.family.display"
        },
        {
          "type": "text",
          "id": "sub",
          "fontWeight": "$font.weight.regular",
          "width": "fill_container",
          "height": "fit_content",
          "textGrowth": "auto",
          "content": "Subtitle text",
          "fontFamily": "$font.family.display"
        }
      ]
    }
  ]
}
```

<!-- source: rules/layout-spacing-consistency.md -->

---
title: Gap/Padding Only — No Spacer Frames
impact: HIGH
impactDescription: Empty frame spacers are hard to maintain and pollute the layout hierarchy.
tags: layout,spacing,gap,padding,spacer
---

## Gap/Padding Only — No Spacer Frames

Never use empty frames (spacers) to create spacing. All spacing must be expressed using only the parent frame's `gap` or `padding` properties. Empty spacers increase child count, hurt readability, and force you to find and edit every spacer later when adjusting spacing.

**Incorrect (Why it's bad):**

- Empty frame for spacing

```json
{
  "type": "frame",
  "id": "form",
  "layout": "vertical",
  "children": [
    {
      "type": "frame",
      "id": "field-email",
      "width": "fill_container",
      "height": 48
    },
    {
      "type": "frame",
      "id": "spacer-1",
      "width": "fill_container",
      "height": 24
    },
    {
      "type": "frame",
      "id": "field-password",
      "width": "fill_container",
      "height": 48
    },
    {
      "type": "frame",
      "id": "spacer-2",
      "width": "fill_container",
      "height": 24
    },
    {
      "type": "frame",
      "id": "btn-submit",
      "width": "fill_container",
      "height": 44
    }
  ]
}
```

**Correct (Why it's good):**

```json
{
  "type": "frame",
  "id": "form",
  "layout": "vertical",
  "gap": "$space.lg",
  "padding": [
    "$space.xl",
    "$space.xl",
    "$space.xl",
    "$space.xl"
  ],
  "width": "fill_container",
  "children": [
    {
      "type": "frame",
      "id": "field-email",
      "width": "fill_container",
      "height": 48
    },
    {
      "type": "frame",
      "id": "field-password",
      "width": "fill_container",
      "height": 48
    },
    {
      "type": "frame",
      "id": "btn-submit",
      "width": "fill_container",
      "height": 44
    }
  ]
}
```

<!-- source: rules/layout-z-order.md -->

---
title: Z-Order via Children Order
impact: HIGH
impactDescription: Because the `children` array order determines z-order, overlays/badges must be placed last.
tags: layout,z-order,overlay,badge,children
---

## Z-Order via Children Order

In `.pen`, z-order is determined by the order of the `children` array. Children that come later render on top. Overlays, badges, modal backdrops, and similar layers must be placed at the end of `children`, and the container should use `layout: "none"` (absolute positioning).

**Incorrect (Why it's bad):**

- Badge comes first — hidden under the image

```json
{
  "type": "frame",
  "id": "product-card",
  "layout": "vertical",
  "children": [
    {
      "type": "frame",
      "id": "badge-new",
      "fill": "$color.primary",
      "width": 48,
      "height": 24
    },
    {
      "type": "frame",
      "id": "product-img",
      "width": "fill_container",
      "height": 200,
      "fill": {
        "type": "image",
        "url": "product.jpg",
        "mode": "fill"
      }
    },
    {
      "type": "text",
      "id": "product-name",
      "fontWeight": "$font.weight.semibold",
      "content": "Product Name",
      "textGrowth": "auto"
    }
  ]
}
```

**Correct (Why it's good):**

- Badge comes last — renders above the image

```json
{
  "type": "frame",
  "id": "product-card",
  "layout": "none",
  "width": 320,
  "height": 280,
  "children": [
    {
      "type": "frame",
      "id": "card-content",
      "layout": "vertical",
      "x": 0,
      "y": 0,
      "width": 320,
      "height": 280,
      "children": [
        {
          "type": "frame",
          "id": "product-img",
          "width": "fill_container",
          "height": 200,
          "fill": {
            "type": "image",
            "url": "product.jpg",
            "mode": "fill"
          }
        },
        {
          "type": "text",
          "id": "product-name",
          "fontWeight": "$font.weight.semibold",
          "content": "Product Name",
          "fill": "$color.foreground",
          "textGrowth": "auto",
          "fontFamily": "$font.family.body"
        }
      ]
    },
    {
      "type": "frame",
      "id": "badge-new",
      "x": 12,
      "y": 12,
      "width": 48,
      "height": 24,
      "fill": "$color.primary",
      "cornerRadius": "$radius.xs",
      "children": [
        {
          "type": "text",
          "id": "badge-label",
          "fontWeight": "$font.weight.bold",
          "content": "NEW",
          "fill": "$color.on-primary",
          "fontSize": "$font.size.xs",
          "textGrowth": "auto",
          "fontFamily": "$font.family.body"
        }
      ]
    }
  ]
}
```

<!-- source: rules/showcase-design-system.md -->

---
title: Leverage Existing Design System
impact: HIGH
impactDescription: Ignoring the design system and rebuilding from scratch breaks consistency and doubles effort.
tags: showcase,design-system,reusable,search-nodes
---

## Leverage Existing Design System

Before starting design work, always search existing components with `search-nodes --reusable` and reuse them. If Button, Card, Nav, and others already exist, recreating them causes style mismatches. Instantiate existing components via `ref`.

**Incorrect (Why it's bad):**

Creating a new card immediately without search-nodes

```json
{
  "type": "frame",
  "id": "new-product-card",
  "fill": "#F9FAFB",
  "cornerRadius": 12,
  "padding": [
    20,
    20,
    20,
    20
  ],
  "layout": "vertical",
  "gap": 12,
  "children": [
    {
      "type": "text",
      "id": "card-title",
      "content": "Product Name",
      "fontSize": 18,
      "fontWeight": "600"
    },
    {
      "type": "text",
      "id": "card-price",
      "content": "$29.00",
      "fontSize": 16
    },
    {
      "type": "frame",
      "id": "new-btn",
      "fill": "#3B82F6",
      "children": [
        {
          "type": "text",
          "id": "btn-label",
          "content": "Buy Now",
          "fill": "#FFFFFF"
        }
      ]
    }
  ]
}
```

**Correct (Why it's good):**

Step 1: Search existing reusable items (run CLI search-nodes)

```bash
node scripts/search-nodes.mjs design.pen --name "card" --reusable
node scripts/search-nodes.mjs design.pen --name "button" --reusable
```

Step 2: Found `card-product` in search results → create instance via `ref`

```json
[
  {
    "type": "ref",
    "ref": "card-product",
    "id": "product-card-1",
    "descendants": {
      "card-title": {
        "content": "Product Name"
      },
      "card-price": {
        "content": "$29.00"
      },
      "cta-btn": {
        "type": "ref",
        "ref": "btn-primary",
        "id": "cta-btn",
        "descendants": {
          "label": {
            "content": "Buy Now"
          }
        }
      }
    }
  }
]
```
<!-- source: rules/showcase-final-checklist.md -->

---
title: Final Design Review Checklist
impact: HIGH
impactDescription: Designs submitted without final review are likely to include issues such as missing tokens, accessibility failures, and AI-pattern artifacts.
tags: showcase,checklist,review,quality,validate
---

## Final Design Review Checklist

After completing the design, you must pass the checklist below. If any item fails, fix it before submission.

### 🎨 Tokens & Colors

- [ ] Do all `fill`, `fontSize`, `padding`, and `gap` values reference tokens (`$`)?
- [ ] Are there no hardcoded hex colors (`#XXXXXX`) or raw px numbers?
- [ ] Are both light/dark theme tokens fully defined?
- [ ] Does it meet WCAG AA contrast (4.5:1 or higher)?
- [ ] Does it follow the 60-30-10 color ratio?

### 📐 Layout & Spacing

- [ ] Does every container frame include a `layout` property? (`"none"` prohibited except for overlay/badge/modal containers per z-order rule)
- [ ] Are there no empty frame spacers?
- [ ] Are all gap/padding values multiples of 4?
- [ ] Is `textGrowth` specified on text nodes?
- [ ] Are overlays/badges at the end of the children array?

### ✍️ Typography

- [ ] Are you using a Display+Body pairing instead of Inter alone?
- [ ] Is at least a 6-step type scale used?
- [ ] Are weights by role (400/500/600/700) differentiated?
- [ ] Is body text column width capped at 640–680px?
- [ ] Is lineHeight applied differently by size?

### 🧩 Components

- [ ] Did you search existing reusable items and reuse via ref?
- [ ] Do component names use `category/variant` slash format?
- [ ] Is a slot declared for the content area?
- [ ] Are newly created components independent reusable items per variant?

### 🚫 Anti-AI Aesthetic

- [ ] Are there no AI-typical colors (Tailwind blue-500, purple→blue gradients)?
- [ ] Is it not the typical hero→3 cards→CTA→footer layout?
- [ ] No Lorem ipsum / repeated "Get Started" × 3 / "10K+ Users" clichés?
- [ ] No decorative blobs or excessive shadows?

### 📱 Responsive

- [ ] Are there three breakpoint frames (375/768/1440)?
- [ ] Does each frame share the same reusable components via ref?

### ✅ Final Check

- [ ] Confirm no errors with `node scripts/validate-pen.mjs`
- [ ] Are all ids unique?
- [ ] Does the showcase frame include color/type/component inventory?

<!-- source: rules/showcase-frame.md -->

---
title: Create Showcase Frame First
impact: MEDIUM
impactDescription: If there is no design system, build the showcase frame first to systematize tokens and components.
tags: showcase,frame,design-system,setup
---

## Create Showcase Frame First

For a new project without an existing design system, create the showcase frame before building real pages. The showcase frame gathers the color palette, type scale, and component inventory in one place and acts as your design system. If you build pages first without it, token/component reuse becomes difficult.

**Example showcase Frame structure:**

```json
{
  "type": "frame",
  "id": "showcase",
  "name": "_Design System Showcase",
  "layout": "vertical",
  "gap": "$space.section",
  "padding": [
    "$space.section",
    "$space.page",
    "$space.section",
    "$space.page"
  ],
  "fill": "$color.background",
  "children": [
    {
      "type": "frame",
      "id": "section-colors",
      "name": "🎨 Colors",
      "layout": "vertical",
      "gap": "$space.lg",
      "children": [
        {
          "type": "text",
          "id": "colors-title",
          "content": "Color System",
          "fontFamily": "$font.family.display",
          "fontSize": "$font.size.2xl",
          "fontWeight": "$font.weight.bold",
          "textGrowth": "auto"
        },
        {
          "type": "frame",
          "id": "color-swatches",
          "layout": "horizontal",
          "gap": "$space.md",
          "children": [
            {
              "type": "frame",
              "id": "swatch-primary",
              "fill": "$color.primary",
              "width": 80,
              "height": 80,
              "cornerRadius": "$radius.md"
            },
            {
              "type": "frame",
              "id": "swatch-surface",
              "fill": "$color.surface",
              "width": 80,
              "height": 80,
              "cornerRadius": "$radius.md",
              "stroke": {
                "align": "inside",
                "thickness": "$stroke.thickness.default",
                "fill": "$color.border"
              }
            },
            {
              "type": "frame",
              "id": "swatch-foreground",
              "fill": "$color.foreground",
              "width": 80,
              "height": 80,
              "cornerRadius": "$radius.md"
            },
            {
              "type": "frame",
              "id": "swatch-muted",
              "fill": "$color.muted",
              "width": 80,
              "height": 80,
              "cornerRadius": "$radius.md"
            },
            {
              "type": "frame",
              "id": "swatch-destructive",
              "fill": "$color.destructive",
              "width": 80,
              "height": 80,
              "cornerRadius": "$radius.md"
            }
          ]
        }
      ]
    },
    {
      "type": "frame",
      "id": "section-typography",
      "name": "✍️ Typography",
      "layout": "vertical",
      "gap": "$space.sm",
      "children": [
        {
          "type": "text",
          "id": "typo-5xl",
          "content": "Display 5xl — 48px Bold",
          "fontSize": "$font.size.5xl",
          "fontWeight": "$font.weight.bold",
          "fontFamily": "$font.family.display",
          "textGrowth": "auto"
        },
        {
          "type": "text",
          "id": "typo-3xl",
          "content": "Heading 3xl — 30px SemiBold",
          "fontSize": "$font.size.3xl",
          "fontWeight": "$font.weight.semibold",
          "fontFamily": "$font.family.display",
          "textGrowth": "auto"
        },
        {
          "type": "text",
          "id": "typo-base",
          "content": "Body base — 16px Regular. This is sample body text.",
          "fontSize": "$font.size.base",
          "fontWeight": "$font.weight.regular",
          "fontFamily": "$font.family.body",
          "textGrowth": "auto"
        },
        {
          "type": "text",
          "id": "typo-sm",
          "content": "Caption sm — 14px Medium",
          "fontSize": "$font.size.sm",
          "fontWeight": "$font.weight.medium",
          "fontFamily": "$font.family.body",
          "fill": "$color.muted",
          "textGrowth": "auto"
        }
      ]
    },
    {
      "type": "frame",
      "id": "section-components",
      "name": "🧩 Components",
      "layout": "horizontal",
      "gap": "$space.lg",
      "children": [
        {
          "type": "ref",
          "ref": "btn-primary",
          "id": "demo-btn-primary"
        },
        {
          "type": "ref",
          "ref": "btn-secondary",
          "id": "demo-btn-secondary"
        },
        {
          "type": "ref",
          "ref": "btn-ghost",
          "id": "demo-btn-ghost"
        },
        {
          "type": "ref",
          "ref": "badge-default",
          "id": "demo-badge"
        }
      ]
    }
  ]
}
```

<!-- source: rules/showcase-pre-design.md -->

---
title: Pre-Design Planning
impact: HIGH
impactDescription: Designs started without clear goals and style guidance often require full rework later.
tags: showcase,planning,style-guide,workflow
---

## Pre-Design Planning

Before starting design, define goals, audience, and tone, collect references, and establish a style guide. Skipping this step often produces generic AI-style design or leads to full redesign after feedback like “the vibe is off.”

### Required pre-design checklist

#### 1️⃣ Define goals
- [ ] What is the design goal: landing, onboarding, dashboard, or marketing?
- [ ] What is the key user action (CTA)?
- [ ] Success metrics: conversion rate, time on page, sign-ups?

#### 2️⃣ Understand audience
- [ ] Who is the primary user persona?
- [ ] Technical level and device context (mobile/desktop ratio)?
- [ ] Language and cultural context?

#### 3️⃣ Tone & Brand
- [ ] Tone: professional, friendly, bold, calm, luxury?
- [ ] Are existing brand guidelines available?
- [ ] Did you collect at least 3 competitor/reference examples?

#### 4️⃣ Style guide draft
- [ ] Primary color finalized (not Tailwind defaults)
- [ ] Display + Body font pairing selected
- [ ] Spacing tokens defined on an 8pt grid
- [ ] Define responsive breakpoints (375/768/1440)

#### 5️⃣ Token registration
- [ ] Register color tokens with `set-variables` (including themes.mode)
- [ ] Register type-scale tokens
- [ ] Register spacing tokens
- [ ] Verify with `get-variables`

Start actual design work only after all checklist items pass.

<!-- source: rules/spacing-8pt-grid.md -->

---
title: 4pt/8pt Grid System
impact: HIGH
impactDescription: Inconsistent spacing values break visual consistency and make design-dev handoff difficult.
tags: spacing,grid,8pt,consistency
---

## 4pt/8pt Grid System

All gap, padding, and margin values must be multiples of 4. Allowed values: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`. Arbitrary odd values like `gap: 13` or `padding: 17` are forbidden. Following this rule keeps designs aligned to the grid and easier to implement in CSS.

**Incorrect (Why it's bad):**

```json
{
  "type": "frame",
  "id": "form-card",
  "layout": "vertical",
  "gap": 13,
  "padding": [
    15,
    17,
    15,
    17
  ],
  "children": [
    {
      "type": "frame",
      "id": "input-group",
      "layout": "vertical",
      "gap": 7
    },
    {
      "type": "frame",
      "id": "btn-row",
      "layout": "horizontal",
      "gap": 11
    }
  ]
}
```

**Correct (Why it's good):**

```bash
# CLI command (run in terminal)
node scripts/set-variables.mjs design.pen --var '<name>=<type>:<value>'
```

```json
[
  {
    "variables": {
      "space.xs": {
        "type": "number",
        "value": 4
      },
      "space.sm": {
        "type": "number",
        "value": 8
      },
      "space.md": {
        "type": "number",
        "value": 12
      },
      "space.lg": {
        "type": "number",
        "value": 16
      },
      "space.xl": {
        "type": "number",
        "value": 24
      },
      "space.2xl": {
        "type": "number",
        "value": 32
      },
      "space.3xl": {
        "type": "number",
        "value": 48
      },
      "space.section": {
        "type": "number",
        "value": 96
      },
      "space.page": {
        "type": "number",
        "value": 120
      }
    }
  },
  {
    "type": "frame",
    "id": "form-card",
    "layout": "vertical",
    "gap": "$space.lg",
    "padding": [
      "$space.xl",
      "$space.xl",
      "$space.xl",
      "$space.xl"
    ],
    "children": [
      {
        "type": "frame",
        "id": "input-group",
        "layout": "vertical",
        "gap": "$space.md"
      },
      {
        "type": "frame",
        "id": "btn-row",
        "layout": "horizontal",
        "gap": "$space.sm"
      }
    ]
  }
]
```

<!-- source: rules/spacing-forbidden.md -->

---
title: Forbidden Spacing Patterns
impact: HIGH
impactDescription: Empty frame spacers and inconsistent values make layouts hard to understand and maintain.
tags: spacing,forbidden,spacer,hardcode
---

## Forbidden Spacing Patterns

The three patterns below are strictly forbidden: (1) empty frames as spacers, (2) arbitrary values not multiples of 4 (13, 30, 7, etc.), and (3) placing children directly in containers without padding. These patterns hide layout intent and create a maintenance nightmare when you later have to find and fix every spacer.

**Incorrect (Why it's bad):**

- ❌ Empty frame spacer
- ❌ Not a multiple of 4
- ❌ Inconsistent gap

```json
{
  "type": "frame",
  "id": "marketing-section",
  "layout": "vertical",
  "gap": 0,
  "children": [
    {
      "type": "text",
      "id": "eyebrow",
      "fontWeight": "$font.weight.medium",
      "content": "Intro"
    },
    {
      "type": "frame",
      "id": "spacer1",
      "height": 7
    },
    {
      "type": "text",
      "id": "headline",
      "fontWeight": "$font.weight.bold",
      "content": "Product Title"
    },
    {
      "type": "frame",
      "id": "spacer2",
      "height": 30
    },
    {
      "type": "frame",
      "id": "card-row",
      "layout": "horizontal",
      "gap": 13,
      "children": [
        {
          "type": "frame",
          "id": "c1",
          "width": 300,
          "height": 200
        },
        {
          "type": "frame",
          "id": "c2",
          "width": 300,
          "height": 200
        }
      ]
    }
  ]
}
```

**Correct (Why it's good):**

- Handle all spacing with gap, no spacers
- Consistent token-based gap

```json
{
  "type": "frame",
  "id": "marketing-section",
  "layout": "vertical",
  "gap": "$space.xl",
  "padding": [
    "$space.section",
    "$space.page",
    "$space.section",
    "$space.page"
  ],
  "children": [
    {
      "type": "text",
      "id": "eyebrow",
      "fontWeight": "$font.weight.medium",
      "content": "Intro",
      "textGrowth": "auto",
      "fontFamily": "$font.family.display"
    },
    {
      "type": "text",
      "id": "headline",
      "fontWeight": "$font.weight.bold",
      "content": "Product Title",
      "textGrowth": "auto",
      "fontFamily": "$font.family.display"
    },
    {
      "type": "frame",
      "id": "card-row",
      "layout": "horizontal",
      "gap": "$space.xl",
      "children": [
        {
          "type": "frame",
          "id": "c1",
          "width": "fill_container",
          "height": 200
        },
        {
          "type": "frame",
          "id": "c2",
          "width": "fill_container",
          "height": 200
        }
      ]
    }
  ]
}
```

<!-- source: rules/spacing-padding.md -->

---
title: Padding by Element Type
impact: MEDIUM
impactDescription: Using the same padding on every element erases hierarchy—buttons feel like cards, and cards feel like pages.
tags: spacing,padding,button,card,section
---

## Padding by Element Type

Padding should vary by element type. Small elements (buttons) need small padding, containers (cards) medium, sections large, and page-level containers largest. If everything uses `padding: 16`, elements of different scale look visually identical.

**Incorrect (Why it's bad):**

```json
{
  "type": "frame",
  "id": "page",
  "padding": [
    16,
    16,
    16,
    16
  ],
  "children": [
    {
      "type": "frame",
      "id": "section",
      "padding": [
        16,
        16,
        16,
        16
      ],
      "children": [
        {
          "type": "frame",
          "id": "card",
          "padding": [
            16,
            16,
            16,
            16
          ],
          "children": [
            {
              "type": "frame",
              "id": "btn",
              "padding": [
                16,
                16,
                16,
                16
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

**Correct (Why it's good):**

- Page horizontal: 120px
- Section vertical: 96px
- Card: 24px on all sides
- Button: 8px vertical, 16px horizontal
- Badge: 4px vertical, 8px horizontal

```json
{
  "type": "frame",
  "id": "page",
  "padding": [
    0,
    "$space.page",
    0,
    "$space.page"
  ],
  "children": [
    {
      "type": "frame",
      "id": "section",
      "padding": [
        "$space.section",
        0,
        "$space.section",
        0
      ],
      "children": [
        {
          "type": "frame",
          "id": "card",
          "padding": [
            "$space.xl",
            "$space.xl",
            "$space.xl",
            "$space.xl"
          ],
          "children": [
            {
              "type": "frame",
              "id": "btn-primary",
              "padding": [
                "$space.sm",
                "$space.lg",
                "$space.sm",
                "$space.lg"
              ]
            },
            {
              "type": "frame",
              "id": "badge",
              "padding": [
                "$space.xs",
                "$space.sm",
                "$space.xs",
                "$space.sm"
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

<!-- source: rules/spacing-proximity.md -->

---
title: Proximity — Varied Gap by Relationship
impact: MEDIUM
impactDescription: If all spacing is identical, relationships between elements (within-group vs between-groups) are not visually clear.
tags: spacing,proximity,gap,grouping,gestalt
---

## Proximity — Varied Gap by Relationship

Set small gaps between related elements, medium gaps between groups, and large gaps between sections. If you use `gap: 16` everywhere, icon-label spacing looks the same as card-to-card spacing, so relationships disappear. Implement Gestalt Proximity through spacing.

**Incorrect (Why it's bad):**

```json
{
  "type": "frame",
  "id": "feature-card",
  "layout": "vertical",
  "gap": 16,
  "children": [
    {
      "type": "frame",
      "id": "icon-row",
      "layout": "horizontal",
      "gap": 16,
      "children": [
        {
          "type": "frame",
          "id": "icon",
          "width": 24,
          "height": 24,
          "fill": {
            "type": "image",
            "url": "icon.svg",
            "mode": "fill"
          }
        },
        {
          "type": "text",
          "id": "icon-label",
          "fontWeight": "$font.weight.medium",
          "content": "Fast deployment"
        }
      ]
    },
    {
      "type": "text",
      "id": "card-title",
      "fontWeight": "$font.weight.bold",
      "content": "One-click deployment"
    },
    {
      "type": "text",
      "id": "card-desc",
      "fontWeight": "$font.weight.regular",
      "content": "This is descriptive text."
    }
  ]
}
```

**Correct (Why it's good):**

- Between sections inside card: 16px
- Between icon and label: 4px (tightly grouped)
- Between title and description: 8px (same content block)

```json
{
  "type": "frame",
  "id": "feature-card",
  "layout": "vertical",
  "gap": "$space.lg",
  "padding": [
    "$space.xl",
    "$space.xl",
    "$space.xl",
    "$space.xl"
  ],
  "children": [
    {
      "type": "frame",
      "id": "icon-row",
      "layout": "horizontal",
      "gap": "$space.xs",
      "children": [
        {
          "type": "frame",
          "id": "icon",
          "width": 20,
          "height": 20,
          "fill": {
            "type": "image",
            "url": "icon.svg",
            "mode": "fill"
          }
        },
        {
          "type": "text",
          "id": "icon-label",
          "fontWeight": "$font.weight.medium",
          "content": "Fast deployment",
          "fontSize": "$font.size.sm",
          "fill": "$color.primary",
          "textGrowth": "auto",
          "fontFamily": "$font.family.body"
        }
      ]
    },
    {
      "type": "frame",
      "id": "card-text",
      "layout": "vertical",
      "gap": "$space.sm",
      "children": [
        {
          "type": "text",
          "id": "card-title",
          "content": "One-click deployment",
          "fontSize": "$font.size.xl",
          "fontWeight": "$font.weight.semibold",
          "textGrowth": "auto",
          "fontFamily": "$font.family.display"
        },
        {
          "type": "text",
          "id": "card-desc",
          "fontWeight": "$font.weight.regular",
          "content": "This is descriptive text.",
          "fontSize": "$font.size.base",
          "fill": "$color.muted",
          "textGrowth": "auto",
          "fontFamily": "$font.family.body"
        }
      ]
    }
  ]
}
```

<!-- source: rules/token-naming.md -->

---
title: Token Naming Convention
impact: CRITICAL
impactDescription: Without token naming conventions, reuse and maintenance quickly become difficult.
tags: tokens,naming,variables
---

## Token Naming Convention

All design tokens should use dot-separated naming in the `$category.purpose.variant` format. Raw names like `$blue` or meaningless names like `$padding1` are forbidden. Proper naming should clearly expose hierarchy, e.g., `$color.primary`, `$font.size.lg`, `$space.md`.

**Incorrect (Why it's bad):**

```json
{
  "variables": {
    "blue": {
      "type": "color",
      "value": "#3B82F6"
    },
    "big-text": {
      "type": "number",
      "value": 24
    },
    "padding1": {
      "type": "number",
      "value": 16
    },
    "red2": {
      "type": "color",
      "value": "#EF4444"
    },
    "graylight": {
      "type": "color",
      "value": "#F9FAFB"
    }
  }
}
```

**Correct (Why it's good):**

> The example below uses single values to focus on naming patterns. For the real light/dark theme structure of color tokens, see the `token-theme-required` rule.

```json
{
  "variables": {
    "color.primary": {
      "type": "color",
      "value": "#3B82F6"
    },
    "color.destructive": {
      "type": "color",
      "value": "#EF4444"
    },
    "color.surface": {
      "type": "color",
      "value": "#F9FAFB"
    },
    "font.size.lg": {
      "type": "number",
      "value": 24
    },
    "font.size.base": {
      "type": "number",
      "value": 16
    },
    "space.md": {
      "type": "number",
      "value": 16
    },
    "space.lg": {
      "type": "number",
      "value": 24
    }
  }
}
```

<!-- source: rules/token-no-hardcode.md -->

---
title: No Hardcoded Values — Use Tokens
impact: CRITICAL
impactDescription: Using direct values in fill, fontSize, and padding breaks overall consistency and makes maintenance unmanageable.
tags: tokens,hardcode,fill,fontSize,spacing
---

## No Hardcoded Values — Use Tokens

Use token references (`$`) for all design properties, including `fill`, `fontSize`, `padding`, `gap`, and `cornerRadius`. If you write literal values like `"#3B82F6"`, `16`, or `"bold"` directly, changing brand color or scale later requires hunting through the entire file.

**Incorrect (Why it's bad):**

```json
{
  "type": "frame",
  "id": "hero-section",
  "fill": "#EFF6FF",
  "padding": [
    64,
    120,
    64,
    120
  ],
  "layout": "vertical",
  "gap": 32,
  "children": [
    {
      "type": "text",
      "id": "hero-title",
      "content": "Product Name",
      "fontSize": 48,
      "fontWeight": "700",
      "fill": "#111827",
      "lineHeight": 1.1
    },
    {
      "type": "frame",
      "id": "cta-btn",
      "fill": "#3B82F6",
      "cornerRadius": 8,
      "padding": [
        12,
        24,
        12,
        24
      ]
    }
  ]
}
```

**Correct (Why it's good):**

```json
{
  "type": "frame",
  "id": "hero-section",
  "fill": "$color.background",
  "padding": [
    "$space.section",
    "$space.page",
    "$space.section",
    "$space.page"
  ],
  "layout": "vertical",
  "gap": "$space.xl",
  "children": [
    {
      "type": "text",
      "id": "hero-title",
      "content": "Product Name",
      "fontSize": "$font.size.5xl",
      "fontWeight": "$font.weight.bold",
      "fill": "$color.foreground",
      "lineHeight": "$font.lineHeight.display",
      "textGrowth": "auto",
      "fontFamily": "$font.family.display"
    },
    {
      "type": "frame",
      "id": "cta-btn",
      "fill": "$color.primary",
      "cornerRadius": "$radius.md",
      "padding": [
        "$space.sm",
        "$space.lg",
        "$space.sm",
        "$space.lg"
      ]
    }
  ]
}
```

<!-- source: rules/token-semantic-colors.md -->

---
title: Use Semantic Color Tokens
impact: CRITICAL
impactDescription: Using raw palette color names makes theme switching and rebranding impractical.
tags: tokens,color,semantic,palette
---

## Use Semantic Color Tokens

Color tokens must use semantic names like `$color.primary`, `$color.surface`, `$color.foreground`, not raw palette names like `$color.blue500`. Required semantic colors: `background`, `surface`, `foreground`, `muted`, `primary`, `on-primary`, `border`, `destructive`. With semantic naming, dark mode only requires swapping values.

**Incorrect (Why it's bad):**

```json
{
  "type": "frame",
  "id": "card",
  "fill": "#F9FAFB",
  "stroke": {
    "align": "inside",
    "thickness": 1,
    "fill": "#E5E7EB"
  },
  "children": [
    {
      "type": "text",
      "id": "title",
      "fontWeight": "$font.weight.bold",
      "fill": "#111827",
      "content": "Card Title"
    },
    {
      "type": "text",
      "id": "sub",
      "fontWeight": "$font.weight.regular",
      "fill": "#9CA3AF",
      "content": "Subtitle"
    },
    {
      "type": "frame",
      "id": "btn",
      "fill": "#3B82F6",
      "children": [
        {
          "type": "text",
          "id": "btn-label",
          "fontWeight": "$font.weight.semibold",
          "fill": "#FFFFFF",
          "content": "Confirm"
        }
      ]
    }
  ]
}
```

**Correct (Why it's good):**

```json
{
  "type": "frame",
  "id": "card",
  "fill": "$color.surface",
  "stroke": {
    "thickness": "$stroke.thickness.default",
    "fill": "$color.border",
    "align": "inside"
  },
  "children": [
    {
      "type": "text",
      "id": "title",
      "fontWeight": "$font.weight.bold",
      "fill": "$color.foreground",
      "content": "Card Title",
      "textGrowth": "auto",
      "fontFamily": "$font.family.display"
    },
    {
      "type": "text",
      "id": "sub",
      "fontWeight": "$font.weight.regular",
      "fill": "$color.muted",
      "content": "Subtitle",
      "textGrowth": "auto",
      "fontFamily": "$font.family.body"
    },
    {
      "type": "frame",
      "id": "btn",
      "fill": "$color.primary",
      "children": [
        {
          "type": "text",
          "id": "btn-label",
          "fontWeight": "$font.weight.semibold",
          "fill": "$color.on-primary",
          "content": "Confirm",
          "textGrowth": "auto",
          "fontFamily": "$font.family.body"
        }
      ]
    }
  ]
}
```

<!-- source: rules/token-theme-required.md -->

---
title: Theme Axes Required (light/dark)
impact: CRITICAL
impactDescription: Designs created without theme axes cannot properly support dark mode.
tags: tokens,theme,dark-mode,light-mode,variables
---

## Theme Axes Required (light/dark)

When declaring variables, you must define a `themes` axis and support at least `light` and `dark` modes. If only single values exist without `themes`, dark-mode migration becomes a manual refactoring nightmare. Register variables with theme structure via `set-variables`.

**Incorrect (Why it's bad):**

```json
{
  "variables": {
    "color.background": {
      "type": "color",
      "value": "#FFFFFF"
    },
    "color.foreground": {
      "type": "color",
      "value": "#111827"
    },
    "color.primary": {
      "type": "color",
      "value": "#3B82F6"
    },
    "color.surface": {
      "type": "color",
      "value": "#F9FAFB"
    }
  }
}
```

**Correct (Why it's good):**

```json
{
  "themes": {
    "mode": [
      "light",
      "dark"
    ]
  },
  "variables": {
    "color.background": {
      "type": "color",
      "value": [
        {
          "theme": {
            "mode": "light"
          },
          "value": "#FFFFFF"
        },
        {
          "theme": {
            "mode": "dark"
          },
          "value": "#0F172A"
        }
      ]
    },
    "color.foreground": {
      "type": "color",
      "value": [
        {
          "theme": {
            "mode": "light"
          },
          "value": "#111827"
        },
        {
          "theme": {
            "mode": "dark"
          },
          "value": "#F1F5F9"
        }
      ]
    },
    "color.primary": {
      "type": "color",
      "value": [
        {
          "theme": {
            "mode": "light"
          },
          "value": "#3B82F6"
        },
        {
          "theme": {
            "mode": "dark"
          },
          "value": "#60A5FA"
        }
      ]
    },
    "color.surface": {
      "type": "color",
      "value": [
        {
          "theme": {
            "mode": "light"
          },
          "value": "#F9FAFB"
        },
        {
          "theme": {
            "mode": "dark"
          },
          "value": "#1E293B"
        }
      ]
    }
  }
}
```

<!-- source: rules/token-workflow.md -->

---
title: Token Registration Workflow
impact: HIGH
impactDescription: Starting design before tokens are registered often requires full refactoring later.
tags: tokens,workflow,set-variables,get-variables
---

## Token Registration Workflow

You must register tokens before getting started with design. Workflow: ① Register tokens with `set-variables` → ② Confirm registration with `get-variables` → ③ Reference `$token.name` in design. If you start by entering raw values directly, replacing them with tokens later requires editing every node.

**Incorrect (Why it's bad):**

- Start designing immediately without token registration

```json
{
  "type": "frame",
  "id": "landing-page",
  "fill": "#FFFFFF",
  "layout": "vertical",
  "children": [
    {
      "type": "text",
      "content": "Welcome",
      "fontSize": 48,
      "fill": "#111827"
    },
    {
      "type": "frame",
      "id": "cta",
      "fill": "#3B82F6",
      "children": [
        {
          "type": "text",
          "content": "Get Started",
          "fill": "#FFFFFF",
          "fontSize": 16
        }
      ]
    }
  ]
}
```

**Correct (Why it's good):**

```bash
# CLI command (run in terminal)
node scripts/set-variables.mjs design.pen --var '<name>=<type>:<value>'
node scripts/get-variables.mjs design.pen
```

- Step 1: Token registration
- Step 2: Confirm registration (optional) - run get-variables and verify the result
- Step 3: Design using token references

```json
[
  {
    "themes": {
      "mode": [
        "light",
        "dark"
      ]
    },
    "variables": {
      "color.background": {
        "type": "color",
        "value": [
          {
            "theme": {
              "mode": "light"
            },
            "value": "#FFFFFF"
          },
          {
            "theme": {
              "mode": "dark"
            },
            "value": "#0F172A"
          }
        ]
      },
      "color.foreground": {
        "type": "color",
        "value": [
          {
            "theme": {
              "mode": "light"
            },
            "value": "#111827"
          },
          {
            "theme": {
              "mode": "dark"
            },
            "value": "#F1F5F9"
          }
        ]
      },
      "color.primary": {
        "type": "color",
        "value": [
          {
            "theme": {
              "mode": "light"
            },
            "value": "#3B82F6"
          },
          {
            "theme": {
              "mode": "dark"
            },
            "value": "#60A5FA"
          }
        ]
      },
      "font.size.5xl": {
        "type": "number",
        "value": 48
      },
      "font.size.base": {
        "type": "number",
        "value": 16
      }
    }
  },
  {},
  {
    "type": "frame",
    "id": "landing-page",
    "fill": "$color.background",
    "layout": "vertical",
    "children": [
      {
        "type": "text",
        "id": "welcome",
        "fontWeight": "$font.weight.bold",
        "content": "Welcome",
        "fontFamily": "$font.family.display",
        "fontSize": "$font.size.5xl",
        "fill": "$color.foreground",
        "textGrowth": "auto"
      },
      {
        "type": "frame",
        "fill": "$color.primary",
        "children": [
          {
            "type": "text",
            "id": "cta-label",
            "fontWeight": "$font.weight.semibold",
            "content": "Get Started",
            "fontFamily": "$font.family.body",
            "fill": "$color.on-primary",
            "fontSize": "$font.size.base",
            "textGrowth": "auto"
          }
        ]
      }
    ]
  }
]
```

<!-- source: rules/typo-line-height.md -->

---
title: Line Height by Text Size
impact: MEDIUM
impactDescription: Using the same line-height for all text makes large headings too loose and body text too tight.
tags: typography,line-height,readability
---

## Line Height by Text Size

Line height should vary by text size. As a rule: large display text tight (1.1), body text loose (1.6), captions medium (1.4). If all text uses `lineHeight: 1.5`, display headings feel cramped and body readability suffers.

**Incorrect (Why it's bad):**

```json
{
  "type": "frame",
  "id": "content",
  "layout": "vertical",
  "children": [
    {
      "type": "text",
      "id": "display",
      "fontWeight": "$font.weight.bold",
      "fontSize": "$font.size.5xl",
      "lineHeight": 1.5,
      "content": "Large Hero Title",
      "textGrowth": "auto"
    },
    {
      "type": "text",
      "id": "heading",
      "fontWeight": "$font.weight.semibold",
      "fontSize": "$font.size.3xl",
      "lineHeight": 1.5,
      "content": "Section Title",
      "textGrowth": "auto"
    },
    {
      "type": "text",
      "id": "body",
      "fontWeight": "$font.weight.regular",
      "fontSize": "$font.size.base",
      "lineHeight": 1.5,
      "content": "Body text appears across multiple lines",
      "textGrowth": "auto"
    },
    {
      "type": "text",
      "id": "caption",
      "fontWeight": "$font.weight.regular",
      "fontSize": "$font.size.xs",
      "lineHeight": 1.5,
      "content": "Caption",
      "textGrowth": "auto"
    }
  ]
}
```

**Correct (Why it's good):**

```bash
# CLI command (run in terminal)
node scripts/set-variables.mjs design.pen --var '<name>=<type>:<value>'
```

- display — 48px+ large headings
- heading — 24~36px subheadings
- subheading — 18~20px
- body — 14~16px body text
- caption — 12px captions

```json
[
  {
    "variables": {
      "font.lineHeight.display": {
        "type": "number",
        "value": 1.1
      },
      "font.lineHeight.heading": {
        "type": "number",
        "value": 1.2
      },
      "font.lineHeight.subheading": {
        "type": "number",
        "value": 1.35
      },
      "font.lineHeight.body": {
        "type": "number",
        "value": 1.6
      },
      "font.lineHeight.caption": {
        "type": "number",
        "value": 1.4
      }
    }
  },
  {
    "type": "frame",
    "id": "content",
    "layout": "vertical",
    "children": [
      {
        "type": "text",
        "id": "display",
        "fontWeight": "$font.weight.bold",
        "fontFamily": "$font.family.display",
        "fontSize": "$font.size.5xl",
        "lineHeight": "$font.lineHeight.display",
        "content": "Large Hero Title",
        "textGrowth": "auto"
      },
      {
        "type": "text",
        "id": "heading",
        "fontWeight": "$font.weight.semibold",
        "fontFamily": "$font.family.display",
        "fontSize": "$font.size.3xl",
        "lineHeight": "$font.lineHeight.heading",
        "content": "Section Title",
        "textGrowth": "auto"
      },
      {
        "type": "text",
        "id": "body",
        "fontWeight": "$font.weight.regular",
        "fontFamily": "$font.family.body",
        "fontSize": "$font.size.base",
        "lineHeight": "$font.lineHeight.body",
        "content": "Body text appears across multiple lines",
        "textGrowth": "auto"
      },
      {
        "type": "text",
        "id": "caption",
        "fontWeight": "$font.weight.regular",
        "fontFamily": "$font.family.body",
        "fontSize": "$font.size.xs",
        "lineHeight": "$font.lineHeight.caption",
        "content": "Caption",
        "textGrowth": "auto"
      }
    ]
  }
]
```

<!-- source: rules/typo-pairing.md -->

---
title: Font Pairing — Display + Body
impact: MEDIUM
impactDescription: Using only a single font creates flat typography with weak hierarchy and little personality.
tags: typography,font-pairing,display,body
---

## Font Pairing — Display + Body

Combining a Display font (hero/headings) with a Body font (body/UI) creates visual hierarchy and brand character. Using Inter everywhere is a common AI-pattern default. Choose one of the recommended pairings below or define a custom pairing with the same principle.

### Recommended font pairings

| Display (for headings) | Body (for body/UI) | Style |
|-----------------|----------------|------|
| Playfair Display | Source Sans 3 | Classic · Editorial |
| Fraunces | DM Sans | Modern · Editorial |
| Cormorant Garamond | Inter | Luxury · Minimal |
| JetBrains Mono | Inter | Tech · Developer Tool |
| Syne | Figtree | Creative · Bold |

**Incorrect (Why it's bad):**

```json
{
  "type": "frame",
  "id": "landing",
  "children": [
    {
      "type": "text",
      "id": "h1",
      "fontFamily": "Inter",
      "fontSize": "$font.size.5xl"
    },
    {
      "type": "text",
      "id": "h2",
      "fontFamily": "Inter",
      "fontSize": "$font.size.2xl"
    },
    {
      "type": "text",
      "id": "body",
      "fontFamily": "Inter",
      "fontSize": "$font.size.base"
    },
    {
      "type": "text",
      "id": "label",
      "fontFamily": "Inter",
      "fontSize": "$font.size.sm"
    }
  ]
}
```

**Correct (Why it's good):**

- Display font — large headings
- Display font — subheadings
- Body font — body text
- Body font — UI labels

```json
{
  "type": "frame",
  "id": "landing",
  "children": [
    {
      "type": "text",
      "id": "h1",
      "fontFamily": "$font.family.display",
      "fontSize": "$font.size.5xl",
      "fontWeight": "$font.weight.bold",
      "lineHeight": "$font.lineHeight.display",
      "textGrowth": "auto"
    },
    {
      "type": "text",
      "id": "h2",
      "fontFamily": "$font.family.display",
      "fontSize": "$font.size.2xl",
      "fontWeight": "$font.weight.semibold",
      "lineHeight": "$font.lineHeight.heading",
      "textGrowth": "auto"
    },
    {
      "type": "text",
      "id": "body",
      "fontFamily": "$font.family.body",
      "fontSize": "$font.size.base",
      "fontWeight": "$font.weight.regular",
      "lineHeight": "$font.lineHeight.body",
      "textGrowth": "auto"
    },
    {
      "type": "text",
      "id": "label",
      "fontFamily": "$font.family.body",
      "fontSize": "$font.size.sm",
      "fontWeight": "$font.weight.medium",
      "textGrowth": "auto"
    }
  ]
}
```

<!-- source: rules/typo-scale.md -->

---
title: Minimum 6-Step Type Scale
impact: MEDIUM
impactDescription: Inconsistent font sizes collapse hierarchy and reduce consistency.
tags: typography,scale,font-size,hierarchy
---

## Minimum 6-Step Type Scale

Define type scale with at least 6 steps (xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl). Arbitrary values like `12, 15, 19, 23` lack proportional hierarchy and look visually awkward. Build scale on Major Third (×1.25) or Minor Third (×1.2), then register as tokens.

**Incorrect (Why it's bad):**

- Apply after running CLI(set-variables)

```json
{
  "variables": {
    "font.size.title": {
      "type": "number",
      "value": 23
    },
    "font.size.subtitle": {
      "type": "number",
      "value": 19
    },
    "font.size.text": {
      "type": "number",
      "value": 15
    },
    "font.size.small": {
      "type": "number",
      "value": 12
    }
  }
}
```

**Correct (Why it's good):**

- 9-step scale based on Major Third ratio (×1.25) (apply after running CLI(set-variables))

```json
{
  "variables": {
    "font.size.xs": {
      "type": "number",
      "value": 12
    },
    "font.size.sm": {
      "type": "number",
      "value": 14
    },
    "font.size.base": {
      "type": "number",
      "value": 16
    },
    "font.size.lg": {
      "type": "number",
      "value": 18
    },
    "font.size.xl": {
      "type": "number",
      "value": 20
    },
    "font.size.2xl": {
      "type": "number",
      "value": 24
    },
    "font.size.3xl": {
      "type": "number",
      "value": 30
    },
    "font.size.4xl": {
      "type": "number",
      "value": 36
    },
    "font.size.5xl": {
      "type": "number",
      "value": 48
    }
  }
}
```

<!-- source: rules/typo-text-rules.md -->

---
title: Text Column Width & Alignment Rules
impact: MEDIUM
impactDescription: Overly wide text columns cause reading fatigue, and centered body text reduces readability.
tags: typography,line-length,alignment,letter-spacing
---

## Text Column Width & Alignment Rules

Optimal readability for body text is about 65–75 characters per line. If `widthMode: "fill_container"` text stretches across full 1440px width, lines become too long to read comfortably. Constrain max width for body containers, default to left alignment (except right-to-left languages), and add `letterSpacing` for uppercase text.

**Incorrect (Why it's bad):**

```json
{
  "type": "frame",
  "id": "article-section",
  "width": "fill_container",
  "layout": "vertical",
  "padding": [
    "$space.section",
    "$space.page",
    "$space.section",
    "$space.page"
  ],
  "children": [
    {
      "type": "text",
      "id": "article-body",
      "fontWeight": "$font.weight.regular",
      "width": "fill_container",
      "textGrowth": "fixed-width",
      "textAlign": "center",
      "content": "Centered body copy across the full 1440px width. Lines are too long to read comfortably, and centered paragraphs make line starts harder to track."
    }
  ]
}
```

**Correct (Why it's good):**

- Max width 672px ≈ about 70 characters
- Add letterSpacing to uppercase

```json
{
  "type": "frame",
  "id": "article-section",
  "width": "fill_container",
  "layout": "vertical",
  "padding": [
    "$space.section",
    "$space.page",
    "$space.section",
    "$space.page"
  ],
  "children": [
    {
      "type": "frame",
      "id": "text-column",
      "width": 672,
      "layout": "vertical",
      "gap": "$space.lg",
      "children": [
        {
          "type": "text",
          "id": "eyebrow",
          "content": "CATEGORY",
          "textAlign": "left",
          "letterSpacing": 2,
          "fontSize": "$font.size.sm",
          "fontWeight": "$font.weight.medium",
          "fill": "$color.primary",
          "textGrowth": "auto",
          "fontFamily": "$font.family.display"
        },
        {
          "type": "text",
          "id": "article-body",
          "fontWeight": "$font.weight.regular",
          "width": "fill_container",
          "textGrowth": "fixed-width",
          "textAlign": "left",
          "lineHeight": "$font.lineHeight.body",
          "content": "Constrained width and left alignment ensure optimal readability.",
          "fontFamily": "$font.family.body"
        }
      ]
    }
  ],
  "alignItems": "center"
}
```

<!-- source: rules/typo-weight.md -->

---
title: Font Weight by Role
impact: MEDIUM
impactDescription: Using the same weight for all text removes hierarchy.
tags: typography,font-weight,hierarchy
---

## Font Weight by Role

Font weights should be differentiated by role. Basic rule: body → 400, UI label/caption → 500, subheading/card title → 600, large heading/hero → 700. If everything is 700, nothing stands out; if everything is 400, hierarchy disappears.

**Incorrect (Why it's bad):**

```json
{
  "type": "frame",
  "id": "blog-post",
  "layout": "vertical",
  "children": [
    {
      "type": "text",
      "id": "post-title",
      "content": "Blog Title",
      "fontSize": "$font.size.4xl",
      "fontWeight": "$font.weight.bold"
    },
    {
      "type": "text",
      "id": "post-sub",
      "content": "Subtitle",
      "fontSize": "$font.size.xl",
      "fontWeight": "$font.weight.bold"
    },
    {
      "type": "text",
      "id": "post-date",
      "content": "Jan 12, 2024",
      "fontSize": "$font.size.sm",
      "fontWeight": "$font.weight.bold"
    },
    {
      "type": "text",
      "id": "post-body",
      "content": "Body content goes here",
      "fontSize": "$font.size.base",
      "fontWeight": "$font.weight.bold"
    }
  ]
}
```

**Correct (Why it's good):**

- Large heading — Bold
- Subheading — SemiBold
- UI label — Medium
- Body — Regular

```json
{
  "type": "frame",
  "id": "blog-post",
  "layout": "vertical",
  "gap": "$space.md",
  "children": [
    {
      "type": "text",
      "id": "post-title",
      "content": "Blog Title",
      "fontSize": "$font.size.4xl",
      "fontWeight": "$font.weight.bold",
      "fontFamily": "$font.family.body",
      "textGrowth": "auto"
    },
    {
      "type": "text",
      "id": "post-sub",
      "content": "Subtitle",
      "fontSize": "$font.size.xl",
      "fontWeight": "$font.weight.semibold",
      "fontFamily": "$font.family.body",
      "textGrowth": "auto"
    },
    {
      "type": "text",
      "id": "post-date",
      "content": "Jan 12, 2024",
      "fontSize": "$font.size.sm",
      "fontWeight": "$font.weight.medium",
      "fontFamily": "$font.family.body",
      "textGrowth": "auto",
      "fill": "$color.muted"
    },
    {
      "type": "text",
      "id": "post-body",
      "content": "Body content goes here",
      "fontSize": "$font.size.base",
      "fontWeight": "$font.weight.regular",
      "fontFamily": "$font.family.body",
      "textGrowth": "auto",
      "lineHeight": "$font.lineHeight.body"
    }
  ]
}
```
