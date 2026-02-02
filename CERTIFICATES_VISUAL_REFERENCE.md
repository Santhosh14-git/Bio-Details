# Certificates Section - Visual Reference & Code Examples

## Visual Component Hierarchy

```
CertificatesSection (Main Container)
├── Heading
│   ├── Badge: "Credentials & Achievements"
│   ├── Title: "My Certifications"
│   └── Subtitle: "Continuously learning..."
│
├── Orbit System
│   ├── Center Core (animated)
│   │   └── Award Icon + "Certified" Text
│   │
│   ├── Orbit 1 (Radius: 200px, Speed: 30s)
│   │   ├── Ring Border
│   │   ├── Gradient Ring
│   │   └── 3 Certificates (angles: 0°, 120°, 240°)
│   │
│   ├── Orbit 2 (Radius: 320px, Speed: -25s)
│   │   ├── Ring Border
│   │   ├── Gradient Ring
│   │   └── 3 Certificates (angles: 45°, 165°, 285°)
│   │
│   └── Orbit 3 (Radius: 420px, Speed: 35s)
│       ├── Ring Border
│       ├── Gradient Ring
│       └── 2 Certificates (angles: 90°, 270°)
│
├── Category Legend
│   └── Category Pills (Frontend, Backend, Design, IoT)
│
└── Certificate Detail Modal (on click)
    ├── Close Button
    ├── Icon
    ├── Title
    ├── Issuer (primary text)
    ├── Year
    ├── Category Badge
    ├── Skills Tags
    └── View Credential Button
```

## Certificate Data Model

```typescript
interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  category: string;
  orbitIndex: number;  // 0, 1, or 2
  angle: number;       // 0-360
  skills?: string[];
  credentialUrl?: string;
}
```

### Example Certificate Objects

```typescript
// Frontend category - Innermost orbit
{
  id: 1,
  title: 'React Advanced Patterns',
  issuer: 'Udemy',
  year: '2024',
  category: 'Frontend',
  orbitIndex: 0,  // 1st orbit
  angle: 0,       // At top
  skills: ['React', 'Hooks', 'State Management'],
  credentialUrl: 'https://udemy.com/certificate/react-patterns',
}

// Backend category - Middle orbit
{
  id: 4,
  title: 'Node.js Backend Development',
  issuer: 'Coursera',
  year: '2023',
  category: 'Backend',
  orbitIndex: 1,  // 2nd orbit
  angle: 45,      // Upper right
  skills: ['Node.js', 'Express', 'REST API'],
  credentialUrl: 'https://coursera.org/certificate/nodejs',
}

// Design category - Outer orbit
{
  id: 7,
  title: 'UI/UX Design Principles',
  issuer: 'Interaction Design Foundation',
  year: '2022',
  category: 'Design',
  orbitIndex: 2,  // 3rd orbit
  angle: 90,      // Right side
  skills: ['UI Design', 'UX Research', 'Figma'],
  credentialUrl: 'https://interaction-design.org/certificate/uiux',
}
```

## Angular Positioning Guide

Perfect positions on orbits:

```
         0°
         ▲
         │
180° ◄───●───► 0°
         │
         ▼
        180°

Common angles:
- 0°:   Top
- 45°:  Top-right
- 90°:  Right
- 135°: Bottom-right
- 180°: Bottom
- 225°: Bottom-left
- 270°: Left
- 315°: Top-left
```

### Distribution Examples

**3 Certificates (120° apart):**
```
         1
         ▲
        /
       /
      /
2 ◄──●──────► 3
     \
      \
       \
```
Angles: 0°, 120°, 240°

**4 Certificates (90° apart):**
```
         1
         ▲
         │
    4 ◄─●─► 2
         │
         ▼
         3
```
Angles: 0°, 90°, 180°, 270°

**6 Certificates (60° apart):**
```
         1
        /│\
       / │ \
      /  │  \
    6 ◄──●──► 2
      \  │  /
       \ │ /
        \│/
         5
         │
         3
```
Angles: 0°, 60°, 120°, 180°, 240°, 300°

## Color Reference

### Gradients

**Center Core Gradient:**
```typescript
'from-primary via-blue-500 to-cyan-500'
// Results in: Blue → Light Blue → Cyan

'from-purple-600 via-pink-500 to-purple-400'
// Results in: Dark Purple → Pink → Light Purple

'from-green-600 via-emerald-500 to-teal-400'
// Results in: Dark Green → Emerald → Teal
```

### Transparency Levels

```
/5   = 5% opacity   (very subtle)
/10  = 10% opacity  (minimal)
/20  = 20% opacity  (subtle)
/30  = 30% opacity  (visible)
/50  = 50% opacity  (prominent)
/70  = 70% opacity  (strong)
```

### Card Colors

```css
/* Border colors */
border-white/10      /* Very subtle white border */
border-primary/20    /* Subtle primary border */
border-primary/50    /* Prominent primary border (hover) */

/* Background colors */
bg-primary/10        /* Very light background */
bg-primary/20        /* Light background */
bg-gradient-to-br    /* Gradient effect */

/* Text colors */
text-primary         /* Main accent color */
text-foreground      /* Main text color */
text-muted-foreground /* Secondary text color */
```

## Animation Reference

### Rotation Animation
```typescript
const ROTATION_SPEEDS = [30, -25, 35];

// Orbit 1: rotates 360° in 30 seconds (clockwise)
// Orbit 2: rotates 360° in 25 seconds (counter-clockwise - negative)
// Orbit 3: rotates 360° in 35 seconds (clockwise, slower)

// Formula: Faster number = faster rotation
// Negative = reverse direction
```

### Scale Animations
```typescript
whileHover={{ scale: 1.15 }}      // 15% larger on hover
whileHover={{ scale: 1.1 }}       // 10% larger (subtle)
whileHover={{ scale: 1.25 }}      // 25% larger (dramatic)

initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
// Fades in and grows from 80% to 100%
```

### Timing Functions
```typescript
ease: 'linear'        // Constant speed (good for rotation)
ease: 'easeInOut'     // Slow start and end
ease: 'easeOut'       // Fast start, slow end
ease: 'circInOut'     // Circular easing (smooth)

transition={{ 
  duration: 0.3,      // 300 milliseconds
  delay: 0.1,         // Wait 100ms before starting
  type: 'spring'      // Spring physics (bouncy)
}}
```

## Responsive Breakpoints

```typescript
// Desktop (lg: 1024px and above)
className="hidden lg:block"          // Only shows on desktop
className="lg:grid-cols-3"           // 3 columns on desktop
className="lg:mb-20"                 // Larger margin on desktop
className="h-screen max-h-[800px] md:h-[900px]" // Height varies

// Tablet (md: 768px to 1023px)
className="md:block"                 // Shows on tablet+
className="md:h-[900px]"             // Larger height on tablet

// Mobile (under 768px)
className="max-h-[600px]"            // Smaller height on mobile
className="gap-4"                    // Smaller gap
className="p-4"                      // Smaller padding
```

## State Management

### Current Implementation

```typescript
const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
// Tracks which certificate is selected for modal view

const [hoveredOrbit, setHoveredOrbit] = useState<number | null>(null);
// Tracks which orbit is being hovered (to pause rotation)
```

### Usage Example

```typescript
// When certificate is clicked
<motion.div onClick={() => setSelectedCert(cert)}>

// When orbit is hovered
<motion.div 
  onMouseEnter={() => setHoveredOrbit(orbitIndex)}
  onMouseLeave={() => setHoveredOrbit(null)}
>

// When modal close is clicked
<button onClick={() => setSelectedCert(null)}>
  <X className="..." />
</button>
```

## Computed Properties

### Categories (Auto-generated)

```typescript
const categories = Array.from(new Set(certificatesData.map(c => c.category)));

// Returns: ['Frontend', 'Backend', 'Design', 'IoT']
// Automatically derived from certificate data
// No need to manually maintain this list
```

### Certificate Position (Trigonometry)

```typescript
const angle = (cert.angle * Math.PI) / 180;  // Convert degrees to radians
const x = radius * Math.cos(angle);           // Horizontal position
const y = radius * Math.sin(angle);           // Vertical position

// Example: cert at 90° on 200px radius orbit
// angle = π/2 = 1.5708 radians
// x = 200 * cos(π/2) = 200 * 0 = 0       (no horizontal offset)
// y = 200 * sin(π/2) = 200 * 1 = 200     (200px down from center)
```

## Modal Interaction Flow

### Opening Modal
```
User clicks certificate
  ↓
onSelect() called with certificate object
  ↓
setSelectedCert(cert)
  ↓
selectedCert !== null, modal renders
  ↓
Modal animates in: scale 0.8 → 1, opacity 0 → 1
  ↓
User sees certificate details
```

### Closing Modal
```
User clicks close button OR clicks outside
  ↓
setSelectedCert(null)
  ↓
selectedCert === null, modal unrenders
  ↓
Modal animates out: scale 1 → 0.8, opacity 1 → 0
  ↓
Background clickable again
```

## CSS Class Patterns

### Glassmorphism Pattern
```css
.glass-card {
  /* Frosted glass effect */
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
}
```

In Tailwind:
```tailwind
glass-card p-4 rounded-xl backdrop-blur-md 
border border-white/10 shadow-lg
```

### Hover State Pattern
```css
.card {
  transition: all 300ms ease;
}

.card:hover {
  border-color: rgba(var(--primary), 0.5);
  box-shadow: 0 0 20px rgba(var(--primary), 0.3);
}
```

In Tailwind:
```tailwind
border border-white/10 hover:border-primary/50 
transition-all duration-300 hover:shadow-primary/30
```

## Browser DevTools Tips

### Inspect Animations
```javascript
// In Console, slow animations for debugging
document.documentElement.style.animationPlayState = 'paused';

// Resume animations
document.documentElement.style.animationPlayState = 'running';
```

### Check State
```javascript
// React DevTools Extension needed
// Look in React Components tab:
// CertificatesSection
//   ├── selectedCert: Certificate | null
//   └── hoveredOrbit: number | null
```

### Test Responsive
```
Chrome DevTools → Toggle device toolbar (Ctrl+Shift+M)
→ Select device (iPhone, iPad, etc.)
→ Check layout and interactions
```

## Performance Optimization Tips

1. **Lazy Load Categories**
   ```typescript
   const categories = useMemo(() => 
     Array.from(new Set(certificatesData.map(c => c.category))), 
     [certificatesData]
   );
   ```

2. **Memoize Certificate Cards**
   ```typescript
   const CertificateCard = React.memo(({ cert, ...props }) => {
     // Component code
   }, (prev, next) => prev.cert.id === next.cert.id);
   ```

3. **Conditional Rendering**
   ```typescript
   {selectedCert && (
     <motion.div>
       {/* Only renders when needed */}
     </motion.div>
   )}
   ```

---

**Need more help?** Check `CERTIFICATES_SECTION_DOCS.md` for in-depth documentation.

*Last Updated: January 2025*
