# Advanced Implementation Examples

## Custom Styling & Themes

### 1. Dark Mode with Enhanced Glow

```typescript
// Modify categoryColors for a darker, more glowing aesthetic
const categoryColors: Record<string, { bg: string; border: string; shadow: string }> = {
  'Frontend': { 
    bg: 'from-blue-600 to-cyan-600', 
    border: 'border-blue-300', 
    shadow: 'shadow-blue-600/40' 
  },
  'Backend': { 
    bg: 'from-purple-600 to-pink-600', 
    border: 'border-purple-300', 
    shadow: 'shadow-purple-600/40' 
  },
  // ... etc
};
```

### 2. Pastel Theme

```typescript
const categoryColors: Record<string, { bg: string; border: string; shadow: string }> = {
  'Frontend': { 
    bg: 'from-sky-300 to-cyan-300', 
    border: 'border-sky-200', 
    shadow: 'shadow-sky-400/20' 
  },
  // ... lighter colors across all categories
};
```

### 3. Neon Cyberpunk Theme

```typescript
const categoryColors: Record<string, { bg: string; border: string; shadow: string }> = {
  'Frontend': { 
    bg: 'from-lime-400 to-cyan-400', 
    border: 'border-lime-300', 
    shadow: 'shadow-lime-500/60' 
  },
  'Backend': { 
    bg: 'from-pink-500 to-purple-500', 
    border: 'border-pink-300', 
    shadow: 'shadow-pink-500/60' 
  },
};

// Also update background colors in ParticleBackground
// Replace: from-slate-900 via-purple-900 to-slate-900
// With:    from-black via-slate-950 to-black
```

## Advanced Animation Customizations

### 1. Faster Orbits

```typescript
const ROTATION_SPEEDS = [20, -15, 25]; // Much faster rotation
```

### 2. Slower, Majestic Motion

```typescript
const ROTATION_SPEEDS = [60, -50, 75]; // Slower, more stately
```

### 3. All Orbits Same Direction

```typescript
const ROTATION_SPEEDS = [40, 35, 50]; // All positive (counterclockwise)
```

### 4. Custom Spring Physics for Zoom

In `PlanetCard`, modify the spring stiffness:

```typescript
// More bouncy (energetic)
transition={{ type: 'spring', stiffness: 400, damping: 20 }}

// More damped (smooth, elegant)
transition={{ type: 'spring', stiffness: 150, damping: 40 }}
```

## Adding Interactive Features

### 1. Category Filter Button

Add to component state:

```typescript
const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

// Filter certificates
const filteredCerts = selectedCategory 
  ? certificatesData.filter(c => c.category === selectedCategory)
  : certificatesData;
```

Then render filtered data:

```typescript
{filteredCerts.map(cert => (
  <motion.div key={cert.id}>
    {/* ... */}
  </motion.div>
))}
```

### 2. Click to Play/Pause All Orbits

```typescript
const [isAnimating, setIsAnimating] = useState(true);

// In each orbit rotate:
animate={{
  rotate: isAnimating && !selectedCert?.id === cert.id ? 360 : 0,
}}
```

### 3. Click Planet to Copy Credential URL

```typescript
const handleCertificateClick = (cert: Certificate) => {
  setSelectedCert(cert);
  
  // Optional: Auto-copy credential URL
  if (cert.credentialUrl) {
    navigator.clipboard.writeText(cert.credentialUrl);
    toast.success('Credential link copied!'); // requires toast library
  }
};
```

## Data Management Patterns

### 1. Fetch Certificates from API

```typescript
const [certificates, setCertificates] = useState<Certificate[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchCerts = async () => {
    try {
      const response = await fetch('/api/certificates');
      const data = await response.json();
      setCertificates(data);
    } catch (error) {
      console.error('Failed to fetch certificates:', error);
    } finally {
      setLoading(false);
    }
  };
  
  fetchCerts();
}, []);

// In JSX:
{loading ? <LoadingSpinner /> : <CertificatesSection />}
```

### 2. Sort by Year (Newest First)

```typescript
const sortedCertificates = certificatesData.sort((a, b) => {
  return parseInt(b.year) - parseInt(a.year);
});
```

### 3. Filter by Year Range

```typescript
const getCertificatesByYearRange = (from: number, to: number) => {
  return certificatesData.filter(cert => {
    const year = parseInt(cert.year);
    return year >= from && year <= to;
  });
};
```

## Performance Optimization

### 1. Memoize Planet Cards (if parent re-renders often)

```typescript
const MemoizedPlanetCard = React.memo(PlanetCard, (prev, next) => {
  return (
    prev.cert.id === next.cert.id &&
    prev.isSelected === next.isSelected &&
    prev.isOtherSelected === next.isOtherSelected
  );
});
```

### 2. Reduce Particle Count on Mobile

```typescript
const particleCount = window.innerWidth < 768 ? 30 : 60;
const particles = Array.from({ length: particleCount }, ...);
```

### 3. Lazy Load Images

```typescript
const CertificateImageCard = ({ cert, isVisible }: CertificateImageCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <img
      src={cert.imageUrl}
      alt={cert.title}
      onLoad={() => setImageLoaded(true)}
      style={{ opacity: imageLoaded ? 1 : 0.5 }}
    />
  );
};
```

## Accessibility Enhancements

### 1. Add ARIA Labels

```typescript
<motion.div
  role="button"
  tabIndex={0}
  aria-label={`${cert.title} certificate`}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onSelect(cert);
    }
  }}
  onClick={() => onSelect(cert)}
>
  {/* content */}
</motion.div>
```

### 2. Add Focus Indicators

```typescript
const PlanetCard = ({ ... }: PlanetCardProps) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <motion.div
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        outline: isFocused ? '2px solid rgba(59, 130, 246, 0.5)' : 'none',
      }}
    >
      {/* content */}
    </motion.div>
  );
};
```

### 3. Keyboard Navigation

```typescript
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      // Select next certificate
      const nextId = Math.min((selectedCert?.id || 0) + 1, certificatesData.length);
      setSelectedCert(certificatesData[nextId - 1]);
    }
    if (e.key === 'ArrowLeft') {
      // Select previous certificate
      const prevId = Math.max((selectedCert?.id || 1) - 1, 1);
      setSelectedCert(certificatesData[prevId - 1]);
    }
  };
  
  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [selectedCert]);
```

## Analytics Integration

### 1. Track Certificate Views

```typescript
const handleCertificateSelect = (cert: Certificate) => {
  setSelectedCert(cert);
  
  // Track with analytics
  if (window.gtag) {
    window.gtag('event', 'view_certificate', {
      certificate_title: cert.title,
      category: cert.category,
      issuer: cert.issuer,
    });
  }
};
```

### 2. Track Image Opens

```typescript
const CertificateImageCard = ({ cert, isVisible }: CertificateImageCardProps) => {
  useEffect(() => {
    if (isVisible && window.gtag) {
      window.gtag('event', 'view_certificate_image', {
        certificate_id: cert.id,
        certificate_title: cert.title,
      });
    }
  }, [isVisible, cert]);
  
  // ... rest of component
};
```

## Testing Examples

### 1. Unit Test - Certificate Sorting

```typescript
describe('CertificatesSection', () => {
  it('should arrange certificates in correct orbit rings', () => {
    const frontendCerts = certificatesData.filter(c => c.orbitIndex === 0);
    expect(frontendCerts).toHaveLength(3);
    expect(frontendCerts.every(c => c.category === 'Frontend')).toBe(true);
  });

  it('should display correct number of orbit rings', () => {
    expect(ORBIT_RADIUS).toHaveLength(3);
    expect(ROTATION_SPEEDS).toHaveLength(3);
  });
});
```

### 2. Component Test - Selection

```typescript
it('should select certificate on click', () => {
  const { getByText } = render(<CertificatesSection />);
  const certButton = getByText('React Advanced Patterns');
  
  fireEvent.click(certButton);
  
  expect(getByText('Udemy')).toBeInTheDocument();
});
```

### 3. Animation Test

```typescript
it('should pause orbit when planet is selected', () => {
  const { container } = render(<CertificatesSection />);
  const planets = container.querySelectorAll('[class*="relative"]');
  
  // Check that rotation animation stops
  // (implementation depends on your testing setup)
});
```

## Deployment Checklist

- [ ] All certificate data complete
- [ ] Image URLs are valid
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Mobile responsiveness verified
- [ ] ESC key functionality tested
- [ ] Performance acceptable on low-end devices
- [ ] No console errors
- [ ] Accessibility tested (keyboard nav)
- [ ] Analytics tracking working
- [ ] Images optimized (< 100KB each)
- [ ] Lazy loading implemented if needed

## Troubleshooting Tips

### Planets overlap or positioning wrong?
```typescript
// Check angle values are 0-360 and evenly distributed
const angleDifference = 360 / certificatesData.length;
// Should be ~45deg for 8 certificates
```

### Animations feel laggy?
```typescript
// Reduce particles
const particles = Array.from({ length: 30 }, ...); // was 60

// Reduce bloom effect blur-3xl -> blur-2xl
<div className="blur-2xl" />

// Disable some glow animations on mobile
const isMobile = window.innerWidth < 768;
animate={isMobile ? {} : { rotate: 360 }} // Skip on mobile
```

### Images not displaying?
```typescript
// Check CORS and image URL format
// Use images.unsplash.com for reliable free images:
imageUrl: 'https://images.unsplash.com/photo-ID?w=400&h=500&fit=crop'
```

---

**Advanced Features**: Ready for production portfolio use! 🚀
