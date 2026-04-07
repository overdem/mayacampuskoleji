# Campus Maya - Responsive Design Guidelines

## Breakpoints

| Device | Width | Breakpoint |
|--------|-------|-----------|
| Mobile | 320px - 639px | `sm` |
| Tablet | 640px - 1023px | `md` |
| Desktop | 1024px+ | `lg` / `xl` / `2xl` |

## Mobile First Approach

All styles start mobile-optimized, then enhance for larger screens.

```css
/* Mobile (default) */
.container {
  padding: 16px;
  font-size: 14px;
}

/* Tablet and up */
@media (min-width: 640px) {
  .container {
    padding: 24px;
    font-size: 16px;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    padding: 32px;
    font-size: 16px;
  }
}
```

## Component Breakpoints

### Sidebar Navigation
```
Mobile:  Hidden (burger menu)
Tablet:  Collapsible sidebar
Desktop: Full sidebar (always visible)
```

### Grid Layouts
```
Mobile:  1 column
Tablet:  2 columns
Desktop: 3-4 columns
```

### Tables
```
Mobile:  Stacked card layout
Tablet:  Horizontal scroll
Desktop: Normal table
```

### Images
```
Mobile:  100% width, optimized for small screens
Tablet:  80% width with margins
Desktop: Full width with max-width constraint
```

## Typography Scaling

### Headings
```
h1: 24px (mobile) → 36px (desktop)
h2: 20px (mobile) → 30px (desktop)
h3: 18px (mobile) → 24px (desktop)
h4: 16px (mobile) → 20px (desktop)
```

### Body Text
```
Base: 14px (mobile) → 16px (desktop)
Small: 12px (both)
```

### Line Height
```
Headings: 1.2
Body: 1.5
```

## Spacing Adjustments

```
Mobile:  4px, 8px, 12px, 16px, 20px
Tablet:  8px, 16px, 24px, 32px
Desktop: 16px, 24px, 32px, 48px
```

## Admin Panel Responsiveness

### Mobile (< 640px)
- Full-screen sidebar (overlay)
- Single column layout
- Stacked forms
- Mobile-optimized tables

### Tablet (640px - 1023px)
- Collapsible sidebar
- 2-column grid
- Readable forms
- Horizontal scrolling for complex tables

### Desktop (1024px+)
- Fixed sidebar
- Multi-column layouts
- Rich visualizations
- Full-featured tables

## Blog Responsiveness

### Mobile (< 640px)
- Single column content
- Hero section height: 250px
- Featured image: full width
- Navigation: hamburger menu

### Tablet (640px - 1023px)
- Main content + narrow sidebar
- Hero section height: 350px
- Featured image: 80% width
- Navigation: visible menu

### Desktop (1024px+)
- 2-3 column layout (content + sidebar + related)
- Hero section height: 500px
- Featured image: optimal width
- Full navigation with dropdowns

## Parent Portal Responsiveness

### Mobile (< 640px)
- Fullscreen navigation
- Cards stacked vertically
- Single student view
- Simplified calendar (month only)

### Tablet (640px - 1023px)
- Side navigation (collapsible)
- 2-column layout
- Multi-student tabs
- Week/month calendar view

### Desktop (1024px+)
- Fixed sidebar navigation
- 3-column layout
- Student selector panel
- Full calendar with details

## Touch Targets

- Minimum 44x44px on mobile
- Minimum 48x48px for buttons
- Adequate spacing between interactive elements (min 8px)

## Performance Considerations

### Images
- Use `srcset` for responsive images
- Optimize for each breakpoint
- Load full-resolution only on desktop
- Use WebP format with fallbacks

### CSS
- Mobile-first media queries
- Minimize overrides
- Use CSS Grid for complex layouts
- Avoid nested media queries

### JavaScript
- Lazy load non-critical scripts
- Use media query listeners sparingly
- Debounce resize handlers
- Feature detection over device detection

## Testing Checklist

- [ ] Mobile (iPhone SE 375px)
- [ ] Mobile (iPhone 14 390px)
- [ ] Mobile (Android 412px)
- [ ] Tablet (iPad 768px)
- [ ] Laptop (1024px)
- [ ] Desktop (1440px)
- [ ] Large Desktop (1920px)
- [ ] Landscape orientation (mobile and tablet)
- [ ] Touch interactions
- [ ] Keyboard navigation
- [ ] Screen reader testing
- [ ] Print styles

## Browser Support

- iOS Safari 14+
- Chrome/Edge 90+
- Firefox 88+
- Samsung Internet 14+

## RTL (Right-to-Left) Support

For future Turkish/Arabic support:
- Use logical CSS properties (margin-inline, padding-block, etc.)
- Avoid hardcoded left/right positioning
- Test direction switching
- Icons that point (arrow, etc.) should flip

## Accessibility + Responsive

- Ensure sufficient color contrast at all breakpoints
- Don't hide content purely for breakpoints (ensure semantic meaning)
- Touch targets remain accessible on mobile
- Keyboard navigation works at all breakpoints
- Focus indicators visible at all sizes
