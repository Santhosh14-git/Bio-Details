# Certificates Orbit System - Quick Start & Customization

## 🚀 Quick Start

### View Your Certificates
Navigate to: `http://localhost:8081/#certificates`

Or use the navigation menu:
- Click "Certificates" in the header
- Smooth scroll to the section

### Test Interactions
1. **Hover over certificates** - They scale up and borders glow
2. **Hover over orbit** - Rotation pauses smoothly
3. **Click a certificate** - Modal opens with full details
4. **Click outside modal** - Closes smoothly
5. **Mobile** - Tap to interact, simplified layout

---

## 🎨 Customization Examples

### Example 1: Add Your Certifications

**File:** `src/components/CertificatesSection.tsx`

Find this section:
```typescript
const certificatesData: Certificate[] = [
  {
    id: 1,
    title: 'React Advanced Patterns',
    issuer: 'Udemy',
    year: '2024',
    category: 'Frontend',
    orbitIndex: 0,
    angle: 0,
    skills: ['React', 'Hooks', 'State Management'],
    credentialUrl: '#',
  },
  // ... more certificates
];
```

**Add new certificate:**
```typescript
{
  id: 9,
  title: 'Your Certificate Title',
  issuer: 'Course Provider',
  year: '2024',
  category: 'Your Category',
  orbitIndex: 1,  // Which orbit (0, 1, or 2)
  angle: 90,      // Position (0-360 degrees)
  skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  credentialUrl: 'https://your-credential-link.com',
},
```

**Categories:** Frontend, Backend, Design, IoT (or your own)

---

### Example 2: Change Orbit Sizes

**File:** `src/components/CertificatesSection.tsx`

Find:
```typescript
const ORBIT_RADIUS = [200, 320, 420];      // Current sizes
```

**Make orbits closer:**
```typescript
const ORBIT_RADIUS = [150, 280, 400];      // Tighter spacing
```

**Make orbits farther:**
```typescript
const ORBIT_RADIUS = [250, 380, 480];      // More spread out
```

---

### Example 3: Adjust Rotation Speeds

**File:** `src/components/CertificatesSection.tsx`

Find:
```typescript
const ROTATION_SPEEDS = [30, -25, 35];     // Seconds per rotation
```

**Faster rotation:**
```typescript
const ROTATION_SPEEDS = [20, -15, 25];     // Spins faster
```

**Slower rotation:**
```typescript
const ROTATION_SPEEDS = [45, -40, 50];     // More subtle
```

**All same direction:**
```typescript
const ROTATION_SPEEDS = [30, 25, 35];      // Remove negative value
```

---

### Example 4: Change Primary Colors

**File:** `src/components/CertificatesSection.tsx`

Find the gradient in center core:
```typescript
className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-blue-500 to-cyan-500 ..."
```

**Make it purple-based:**
```typescript
className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-purple-400 ..."
```

**Make it green-based:**
```typescript
className="w-24 h-24 rounded-full bg-gradient-to-br from-green-600 via-emerald-500 to-teal-400 ..."
```

---

### Example 5: Modify Card Hover Effects

**File:** `src/components/CertificatesSection.tsx`

Find in CertificateCard:
```typescript
whileHover={{ scale: 1.15, y: -8 }}
```

**Subtle hover:**
```typescript
whileHover={{ scale: 1.05, y: -2 }}       // Less dramatic
```

**Dramatic hover:**
```typescript
whileHover={{ scale: 1.25, y: -15 }}      // More impressive
```

**Rotate on hover:**
```typescript
whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
```

---

### Example 6: Change Modal Appearance

**File:** `src/components/CertificatesSection.tsx`

Find modal styling:
```typescript
className="glass-card p-8 rounded-3xl backdrop-blur-md border border-white/10 ..."
```

**More prominent border:**
```typescript
className="glass-card p-8 rounded-3xl backdrop-blur-md border-2 border-primary/50 ..."
```

**Softer backdrop:**
```typescript
onClick={() => setSelectedCert(null)}
className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
```

**Darker backdrop:**
```typescript
className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
```

---

### Example 7: Add More Orbits

**Step 1:** Update orbit configuration

```typescript
// Before
const ORBIT_RADIUS = [200, 320, 420];
const ROTATION_SPEEDS = [30, -25, 35];

// After (4 orbits)
const ORBIT_RADIUS = [150, 280, 380, 480];
const ROTATION_SPEEDS = [30, -25, 35, -20];
```

**Step 2:** Add certificates to new orbit (orbitIndex: 3)

```typescript
{
  id: 10,
  title: 'Your New Certificate',
  issuer: 'Provider',
  year: '2024',
  category: 'New Category',
  orbitIndex: 3,  // New orbit!
  angle: 180,
  skills: ['Skills'],
  credentialUrl: '#',
},
```

---

### Example 8: Customize Category Legend

**File:** `src/components/CertificatesSection.tsx`

The categories are auto-generated from certificate data:
```typescript
const categories = Array.from(new Set(certificatesData.map(c => c.category)));
```

Categories appear as pills at the bottom. To change styling:

```typescript
className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium"
```

**Larger badges:**
```typescript
className="px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-base font-bold"
```

**Colorful badges:**
```typescript
const categoryColors = {
  'Frontend': 'bg-blue-500/20 border-blue-500/30 text-blue-400',
  'Backend': 'bg-purple-500/20 border-purple-500/30 text-purple-400',
  'Design': 'bg-pink-500/20 border-pink-500/30 text-pink-400',
  'IoT': 'bg-green-500/20 border-green-500/30 text-green-400',
};
```

---

### Example 9: Change Certificate Count Per Orbit

**File:** `src/components/CertificatesSection.tsx`

Current distribution:
- Orbit 0: 3 certificates (angles: 0, 120, 240)
- Orbit 1: 3 certificates (angles: 45, 165, 285)
- Orbit 2: 2 certificates (angles: 90, 270)

**To add more to Orbit 0:**
```typescript
{
  id: 11,
  title: 'Another Certificate',
  issuer: 'Provider',
  year: '2024',
  category: 'Frontend',
  orbitIndex: 0,
  angle: 60,  // Between existing angles
  skills: ['Skills'],
  credentialUrl: '#',
},
```

**Spacing formula:** 
- For N certificates: angle increment = 360 / N
- 3 certs: 0, 120, 240
- 4 certs: 0, 90, 180, 270
- 5 certs: 0, 72, 144, 216, 288
- 6 certs: 0, 60, 120, 180, 240, 300

---

### Example 10: Animation Duration Tweaks

**Orbit rotation speed (seconds):**
```typescript
const ROTATION_SPEEDS = [30, -25, 35];  // 30 seconds per rotation
```

**Center core rotation (milliseconds):**
```typescript
animate={{ rotate: 360 }}
transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}  // 20 seconds
```

**Modal animation:**
```typescript
transition={{ delay: index * 0.05 }}  // Stagger skills by 50ms
```

**Change to 100ms:**
```typescript
transition={{ delay: index * 0.1 }}
```

---

## 📋 Configuration Checklist

- [ ] Added all your certificates to `certificatesData`
- [ ] Updated certificate categories
- [ ] Customized orbit sizes/speeds
- [ ] Changed colors to match portfolio theme
- [ ] Added credential URLs
- [ ] Tested on mobile
- [ ] Verified navigation links work
- [ ] Built and deployed

---

## 🔍 File Structure

```
src/
├── components/
│   ├── CertificatesSection.tsx       (← Edit this)
│   ├── Header.tsx                    (← Navigation updated)
│   └── ExperienceSection.tsx         (← Related section)
└── pages/
    └── Index.tsx                     (← Component imported)
```

---

## 💡 Pro Tips

1. **Space certificates evenly** using the angle property
2. **Use opposite rotation speeds** for visual interest (30 and -25)
3. **Keep certificate titles short** (under 25 characters)
4. **Limit to 8-10 certificates** for clean layout
5. **Use 2-3 categories maximum** for best visual hierarchy

---

## 🚨 Common Issues

| Issue | Solution |
|-------|----------|
| Orbits not rotating | Check `ROTATION_SPEEDS` are not `[0, 0, 0]` |
| Certificates overlapping | Reduce count or increase `ORBIT_RADIUS` |
| Modal won't close | Verify `onClick={() => setSelectedCert(null)}` |
| Colors not changing | Clear browser cache (Ctrl+Shift+Delete) |
| Mobile looks cramped | Reduce `max-h-[800px]` to `max-h-[600px]` |

---

**Ready to deploy?** Run: `npm run build`

---

*Last Updated: January 2025*
*Component: CertificatesSection.tsx*
*Status: ✅ Production Ready*
