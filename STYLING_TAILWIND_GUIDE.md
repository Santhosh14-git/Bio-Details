# Experience Timeline - Styling & Tailwind CSS Guide

## 🎨 Core Tailwind Classes Used

### Glass Morphism Effect
```css
.glass-card {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* In Tailwind: */
className="glass-card p-6 lg:p-8 rounded-2xl backdrop-blur-md border border-white/10"
```

### Gradient Text
```css
.text-gradient {
  background: linear-gradient(
    135deg,
    hsl(217, 91%, 60%) 0%,
    hsl(262, 83%, 68%) 50%,
    hsl(192, 91%, 56%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* In Tailwind: */
className="text-gradient"
```

### Timeline Line
```css
background: linear-gradient(
  to bottom,
  hsl(217, 91%, 60%) 0%,
  hsl(262, 83%, 68%) 50%,
  hsl(192, 91%, 56%) 100%
);
```

## 🔧 Key Tailwind Classes Breakdown

### Container & Layout
| Class | Purpose |
|-------|---------|
| `relative` | Positioning context for absolute elements |
| `flex items-center` | Vertical centering |
| `grid grid-cols-3` | 3-column responsive grid |
| `gap-8 lg:gap-16` | Responsive spacing |
| `w-full lg:w-[calc(50%-40px)]` | Half-width on lg screens |
| `absolute left-1/2 -translate-x-1/2` | Center absolute positioning |

### Styling
| Class | Purpose |
|-------|---------|
| `glass-card` | Custom glassmorphism effect |
| `rounded-2xl` | Large border radius |
| `border border-white/10` | Semi-transparent border |
| `backdrop-blur-md` | Blur background effect |
| `shadow-lg shadow-primary/20` | Colored shadow |
| `hover:shadow-lg hover:shadow-primary/20` | Hover glow effect |

### Text & Typography
| Class | Purpose |
|-------|---------|
| `heading-lg` | Large heading (custom) |
| `font-semibold` | Medium font weight |
| `text-primary` | Primary accent color |
| `text-muted-foreground` | Secondary text color |
| `text-gradient` | Gradient text effect |
| `line-clamp-2` | Limit to 2 lines of text |

### Colors & Gradients
| Class | Purpose |
|-------|---------|
| `bg-gradient-to-br` | Bottom-right gradient |
| `from-blue-500 to-cyan-500` | Color range |
| `text-foreground` | Main text color |
| `bg-primary/10` | Primary with 10% opacity |
| `border-primary/20` | Primary border with 20% opacity |

### Responsive Design
| Class | Purpose |
|-------|---------|
| `lg:grid-cols-2` | 2 columns on large screens |
| `lg:pr-12` | Padding right on large screens |
| `lg:order-2` | Flexbox order on large screens |
| `w-full` | Full width |
| `max-w-5xl` | Max width constraint |

## 🌈 Color Customization Palette

### Primary Brand Colors (Change these for different themes)
```tailwind
Primary:      hsl(217, 91%, 60%)  /* Blue #3B82F6 */
Secondary:    hsl(262, 83%, 68%)  /* Purple #A78BFA */
Accent:       hsl(192, 91%, 56%)  /* Cyan #06B6D4 */
```

### Work Experience Colors
```tailwind
from-blue-500 to-cyan-500
/* Alternatives:
from-slate-600 to-slate-800       (Dark)
from-cyan-500 to-blue-600         (Neon)
from-amber-500 to-orange-600      (Warm)
from-emerald-500 to-teal-500      (Fresh)
*/
```

### Education Colors
```tailwind
from-purple-500 to-pink-500
/* Alternatives:
from-indigo-600 to-indigo-800     (Dark)
from-pink-500 to-purple-600       (Neon)
from-rose-500 to-red-600          (Warm)
from-violet-500 to-purple-500     (Purple)
*/
```

## 📐 Spacing System

### Standard Spacing Values
```tailwind
Padding:
- p-6   (24px) - Default card padding
- p-8   (32px) - Large card padding
- p-3   (12px) - Icon container padding

Margin:
- mb-4  (16px) - Between elements
- mb-6  (24px) - Section breaks
- mb-12 (48px) - Large gaps
- mb-20 (80px) - Section gaps (mobile)

Gap:
- gap-2 (8px)  - Tight spacing
- gap-4 (16px) - Standard
- gap-8 (32px) - Large
```

## 🎭 Hover & Interactive States

### Card Hover Effect
```tailwind
className="hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
```

What happens:
- Border becomes more opaque (white/20)
- Shadow increases in size and color intensity
- Smooth 300ms transition

### Button Hover
```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Icon Hover
```tailwind
className="group-hover:text-primary transition-colors"
```

## 📱 Responsive Breakpoints

```tailwind
sm:  640px   /* Mobile landscape */
md:  768px   /* Tablet portrait */
lg:  1024px  /* Tablet landscape / Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large desktop */
```

## 🎬 Animation Classes & Transitions

### Smooth Transitions
```tailwind
transition-all        /* All properties */
duration-300          /* 300ms duration */
duration-500          /* 500ms duration */
ease-out              /* Easing function */
```

### With Framer Motion
```tsx
// Fade in
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}

// Slide in
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ delay: 0.1 }}

// Scale pulse
animate={{ scale: [1, 1.2, 1] }}
transition={{ duration: 2.5, repeat: Infinity }}
```

## 🔍 CSS Grid & Flexbox

### Timeline Zig-Zag Layout
```tailwind
/* Flex container */
className="flex items-center mb-12 lg:mb-20"

/* Left card order (on large screens) */
className="w-full lg:w-[calc(50%-40px)] lg:order-2 lg:pl-12"

/* Right card order (default) */
className="w-full lg:w-[calc(50%-40px)] lg:pr-12"
```

### Skill Tags Grid
```tailwind
className="flex flex-wrap gap-2"
/* Creates wrapped row of items with 8px spacing */
```

## 🌟 Custom CSS Variables

If you need dark mode support, add to your CSS file:

```css
@layer base {
  :root {
    --foreground: 0 0% 100%;
    --background: 0 0% 0%;
    --primary: 217 91% 60%;
    --muted-foreground: 215 13.8% 34.1%;
  }

  .dark {
    --foreground: 0 0% 100%;
    --background: 0 0% 0%;
  }
}
```

## 📊 Opacity Scales

```tailwind
/5   - 5%     (nearly invisible)
/10  - 10%    (very subtle)
/20  - 20%    (subtle)
/50  - 50%    (medium)
/75  - 75%    (mostly visible)
/100 - 100%   (fully opaque, default)
```

Example:
```tailwind
bg-white/10      /* 10% opacity white background */
border-white/20  /* 20% opacity white border */
text-primary/50  /* 50% opacity primary text */
```

## 🎯 Shadow System

```tailwind
shadow-lg              /* Large shadow */
shadow-primary/50      /* Primary colored shadow at 50% opacity */
shadow-primary/20      /* Subtle primary shadow */

/* In component: */
className="shadow-lg shadow-primary/50 hover:shadow-lg hover:shadow-primary/20"
```

## 🔐 Z-Index Stacking

```tailwind
z-10       /* Timeline dot - on top of line */
z-20       /* Modal or overlay would be here */
-inset-1   /* Slight negative space (-4px) */
```

## 💡 Pro Tips

### 1. Extract Common Classes
Create utility classes in your CSS:

```css
@layer components {
  .timeline-card {
    @apply glass-card p-6 lg:p-8 rounded-2xl backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20;
  }

  .timeline-dot {
    @apply w-6 h-6 rounded-full bg-gradient-to-br from-primary to-blue-500 border-4 border-background shadow-lg shadow-primary/50;
  }
}
```

Then use: `className="timeline-card"` instead of repeating all classes.

### 2. Dynamic Classes with Conditionals
```tsx
className={`glass-card p-6 ${isInView ? 'opacity-100' : 'opacity-0'} transition-opacity`}
```

### 3. Arbitrary Values for Custom Sizing
```tailwind
w-[calc(50%-40px)]    /* Custom width calculation */
gap-[13px]            /* Custom gap */
p-[33px]              /* Custom padding */
```

### 4. Responsive Typography
```tailwind
className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
```

## 📋 Complete Class Reference - Timeline Component

| Element | Classes | Purpose |
|---------|---------|---------|
| Section | `py-32 overflow-hidden` | Padding and overflow control |
| Container | `section-container` | Custom max-width wrapper |
| Heading | `heading-lg mb-6` | Large heading |
| Timeline | `relative max-w-5xl mx-auto` | Container with constraints |
| Line | `absolute left-1/2 -translate-x-1/2 w-1 h-full` | Vertical center line |
| Card | `glass-card p-6 lg:p-8 rounded-2xl` | Main card styling |
| Dot | `w-6 h-6 rounded-full bg-gradient-to-br` | Timeline marker |
| Skill | `px-3 py-1 rounded-full bg-primary/10` | Tag styling |

---

**Version**: 1.0  
**Last Updated**: January 2026  
**Tailwind CSS Version**: v3.4+
