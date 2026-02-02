# Experience Timeline - Visual & Component Reference

## 🎨 Visual Timeline Layout

### Desktop View (lg screens and above)
```
┌─────────────────────────────────────────────────────────────┐
│                        "My Journey"                           │
│              Professional Timeline Heading                    │
└─────────────────────────────────────────────────────────────┘

                         TIMELINE LINE
                      (grows on scroll)
                            ↓

┌──────────────────────┐   ●   ┌──────────────────────┐
│   2022 Education     │   │   │                      │
│   Web Developer      │   │   │                      │
│   First Projects     │   │   │                      │
│   Skills: HTML/CSS   │   │   │                      │
└──────────────────────┘   ●   │   2023 Work          │
                           │   │   Full Stack Dev     │
         ┌──────────────────┐   │   Backend Focus      │
         │                  │   │   Skills: PHP/MySQL  │
         │ 2024 React Dev   │   │                      │
         │ Modern Frontend  │   │                      │
         │ TypeScript Focus │   │                      │
         │ Skills: React/TS │   │                      │
         └──────────────────┘   │                      │
                                └──────────────────────┘
                                   ●   ┌──────────────┐
                                   │   │ 2025 Current │
                                   │   │ Full Stack + │
                                   │   │ AI Focused   │
                                   │   │              │
                                   ●   └──────────────┘
                                   │
                            (continues)
```

### Mobile View (sm/md screens)
```
┌──────────────────────────────────────────┐
│        "My Journey" Timeline              │
└──────────────────────────────────────────┘

● 2022
│   ┌─────────────────────┐
│   │ Education           │
│   │ Web Developer       │
│   │ First Projects      │
│   └─────────────────────┘
│
● 2023
│   ┌─────────────────────┐
│   │ Work                │
│   │ Full Stack Dev      │
│   │ Backend Focus       │
│   └─────────────────────┘
│
● 2024
│   ┌─────────────────────┐
│   │ React Developer     │
│   │ Modern Frontend     │
│   │ TypeScript Focus    │
│   └─────────────────────┘
│
● 2025 (continues...)
```

---

## 📦 Component File Structure

### ExperienceSection.tsx (262 lines)

```
ExperienceSection Component (Main)
├── State & Refs
│   ├── containerRef (for scroll tracking)
│   ├── headingRef (for heading animation)
│   └── timelineRef (for timeline animation)
│
├── experienceData Array (5 items)
│   ├── 2022 - Learning Phase
│   ├── 2023 - IoT & Backend
│   ├── 2024 - React & TypeScript
│   ├── 2025 - Full Stack & AI
│   └── 2026 - Senior Developer Vision
│
├── TimelineItem Component (Sub)
│   ├── Animation Logic
│   │   ├── Slide-in animations
│   │   ├── Fade-in effects
│   │   └── Stagger delays
│   │
│   ├── Card Content
│   │   ├── Icon (briefcase/graduation)
│   │   ├── Title & Company
│   │   ├── Description
│   │   └── Skill Tags
│   │
│   └── Timeline Dot
│       ├── Pulsing animation
│       ├── Year label
│       └── Gradient styling
│
├── Timeline Rendering
│   ├── Vertical center line
│   ├── Animated progress line
│   └── Map through items
│
└── CTA Section
    └── "Let's Work Together" Button
```

---

## 🎬 Animation Flow Diagram

```
User scrolls into view
        ↓
    ┌───────────────────┐
    │ Heading appears   │
    │ (opacity: 0→1)    │
    └────────┬──────────┘
             ↓
    ┌───────────────────┐
    │ Timeline line     │
    │ grows from top    │
    │ (height: 0→100%)  │
    └────────┬──────────┘
             ↓
    For each TimelineItem (staggered):
    ┌────────────────────────┐
    │ 1. Dot appears         │
    │    (scale: 0→1)        │
    │    delay: index * 0.1s │
    └────────┬───────────────┘
             ↓
    ┌────────────────────────┐
    │ 2. Card slides in      │
    │    from left/right     │
    │    (x: ±20→0)          │
    │    (opacity: 0→1)      │
    └────────┬───────────────┘
             ↓
    ┌────────────────────────┐
    │ 3. Skills appear       │
    │    one by one          │
    │    (scale: 0.8→1)      │
    └────────┬───────────────┘
             ↓
    ┌────────────────────────┐
    │ Dot pulses continuously│
    │ (scale: 1→1.2→1)      │
    │ (infinite loop)        │
    └────────────────────────┘

On card hover:
    ┌────────────────────────┐
    │ Card elevates          │
    │ Border glows           │
    │ Shadow increases       │
    └────────────────────────┘
```

---

## 🧩 Data Flow

```
experienceData[] 
      ↓
   .map(item, index)
      ↓
   TimelineItem Component
      ↓
   ┌─────────────────────────────┐
   │ useInView Hook              │
   │ Triggers when visible       │
   └──────────┬──────────────────┘
              ↓
   ┌─────────────────────────────┐
   │ Initial Animation State     │
   │ opacity: 0, x: ±20          │
   └──────────┬──────────────────┘
              ↓
   ┌─────────────────────────────┐
   │ Animate to Final State      │
   │ opacity: 1, x: 0            │
   │ delay: index * 0.1          │
   └──────────┬──────────────────┘
              ↓
   ┌─────────────────────────────┐
   │ Render Card + Dot + Skills  │
   │ Apply Tailwind Classes      │
   └──────────┬──────────────────┘
              ↓
        Displayed on Page
```

---

## 🎨 CSS Class Hierarchy

### Root Section
```tsx
<section className="relative py-32 overflow-hidden">
  {/* Base styling */}
```

### Container
```tsx
<div className="section-container">
  {/* Max-width wrapper */}
```

### Heading Area
```tsx
<div className="max-w-2xl mx-auto text-center mb-20">
  <span className="inline-block text-primary font-medium mb-4">
    {/* Label */}
  </span>
  <h2 className="heading-lg mb-4">
    {/* Title with gradient */}
  </h2>
  <p className="text-muted-foreground">
    {/* Subtitle */}
  </p>
</div>
```

### Timeline Container
```tsx
<div className="relative max-w-5xl mx-auto">
  {/* Timeline wrapper */}
  
  <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b">
    {/* Background line */}
    
    <motion.div className="...">
      {/* Animated progress line */}
    </motion.div>
  </div>
  
  <div className="relative">
    {/* Timeline items container */}
  </div>
</div>
```

### Timeline Item
```tsx
<motion.div className="relative flex items-center mb-12 lg:mb-20">
  {/* Item wrapper */}
  
  <div className="w-full lg:w-[calc(50%-40px)]">
    {/* Left/Right card container */}
    
    <motion.div className="glass-card p-6 lg:p-8 rounded-2xl">
      {/* Card */}
      
      <div className="flex items-start gap-3 mb-4">
        {/* Icon + header */}
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">
        {/* Description */}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {/* Skills */}
      </div>
    </motion.div>
  </div>
  
  <div className="absolute left-1/2 -translate-x-1/2">
    {/* Timeline dot and year */}
  </div>
</motion.div>
```

---

## 🔄 Props & State Flow

```
ExperienceSection
├── Props: None (self-contained)
│
├── Internal State:
│   ├── containerRef (useRef)
│   ├── headingRef (useRef)
│   ├── timelineRef (useRef)
│   ├── isHeadingInView (useInView)
│   ├── isTimelineInView (useInView)
│   ├── scrollYProgress (useScroll)
│   └── timelineHeight (useTransform)
│
└── Passes to TimelineItem:
    ├── item: ExperienceItem
    └── index: number

TimelineItem
├── Props:
│   ├── item: ExperienceItem
│   └── index: number
│
├── Internal State:
│   ├── ref (useRef for visibility)
│   └── isInView (useInView)
│
└── Derived Values:
    └── isLeft (boolean from item.side)
```

---

## 🎯 Key CSS Classes Used

### Layout Classes
```
relative        - Positioning context
absolute        - Absolute positioning
left-1/2        - 50% from left
-translate-x-1/2 - Center horizontally
w-full          - Full width
w-[calc(50%-40px)] - Half width minus gap
h-full          - Full height
flex            - Flexbox
items-center    - Vertical center
gap-2           - Item spacing
grid grid-cols-3 - 3-column grid
```

### Styling Classes
```
glass-card      - Glassmorphism effect
rounded-2xl     - Large border radius
backdrop-blur-md - Blur background
border          - Border
border-white/10 - Semi-transparent border
shadow-lg       - Large shadow
overflow-hidden - Hide overflow
```

### Typography Classes
```
heading-lg      - Large heading
font-semibold   - Font weight 600
text-primary    - Primary color
text-muted-foreground - Secondary text
text-gradient   - Gradient text
text-sm         - Small text
text-xs         - Extra small text
line-clamp-2    - Limit to 2 lines
```

### Spacing Classes
```
py-32           - Vertical padding (128px)
mb-4            - Margin bottom (16px)
mb-6            - Margin bottom (24px)
mb-12           - Margin bottom (48px)
mb-20           - Margin bottom (80px)
p-6             - Padding (24px)
p-8             - Padding (32px)
gap-2           - Gap (8px)
gap-4           - Gap (16px)
```

### Responsive Classes
```
lg:grid-cols-2  - 2 columns on large screens
lg:pr-12        - Right padding on large
lg:w-[calc(...)]  - Half width on large
lg:order-2      - Order 2 on large
lg:pl-12        - Left padding on large
```

### Interaction Classes
```
hover:border-white/20 - Hover border opacity
hover:shadow-lg       - Hover shadow
hover:shadow-primary/20 - Hover shadow color
hover:scale-1.1       - Hover scale
transition-all        - Animate all properties
duration-300          - 300ms duration
cursor-pointer        - Pointer cursor
group-hover:text-primary - Group hover text
```

---

## 📊 Responsive Grid Layout

### Desktop (lg+)
```
┌─────────────────────┬───┬─────────────────────┐
│   50% - 40px        │ Dot │   50% - 40px       │
│   (Right aligned)   │     │   (Left aligned)   │
└─────────────────────┴───┴─────────────────────┘
```

### Tablet/Mobile
```
┌────────────────────────────────────┐
│  100% width                        │
│  Stacked single column             │
│  Timeline dot moved to left side   │
└────────────────────────────────────┘
```

---

## 🚀 Performance Metrics

| Metric | Value |
|--------|-------|
| Component Size | ~10KB (unminified) |
| Animations | GPU-accelerated |
| Render Count | 1 per viewport scroll |
| Re-renders | Minimized with `once: true` |
| Build Time | ~13 seconds |
| Production Bundle Impact | Minimal |

---

## 🎓 Learning Resources Referenced

- **Framer Motion**: `useScroll`, `useTransform`, `useInView`, `motion` components
- **React Hooks**: `useRef`, custom component composition
- **Tailwind CSS**: Grid, Flexbox, Gradients, Animations, Responsive Design
- **TypeScript**: Interfaces, Type annotations, Component typing

---

**Version**: 1.0  
**Created**: January 22, 2026  
**Status**: Production Ready ✅
