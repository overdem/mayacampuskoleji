# Campus Maya - Stitch Design Specifications

**Project**: https://stitch.withgoogle.com/projects/17752545092534538294

---

## 🎨 Design System

### Colors (Material Design 3)
```
Primary: #1E40AF (Blue)
Secondary: #059669 (Green)
Accent: #F97316 (Orange)

Grays:
  900: #111827 (Text Dark)
  600: #4B5563 (Text Medium)
  500: #6B7280 (Text Light)
  300: #D1D5DB (Border)
  200: #E5E7EB (Light BG)
  100: #F3F4F6 (Lighter BG)
  50:  #F9FAFB (Lightest BG)

Status:
  Success: #059669
  Error: #DC2626
  Warning: #F59E0B
  Info: #0EA5E9
```

### Typography
```
Headlines: Poppins
  H1: 36px, Bold (700), Line: 1.2
  H2: 30px, Bold (700), Line: 1.2
  H3: 24px, Bold (700), Line: 1.3

Body: Inter
  Base: 16px, Regular (400), Line: 1.5
  Small: 14px, Regular (400), Line: 1.5
  Tiny: 12px, Regular (400), Line: 1.5
```

### Spacing (4px Grid)
```
4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px
```

### Border Radius
```
4px (sm), 8px (base), 12px (md), 16px (lg), 9999px (full)
```

---

## 📄 Homepage Layout

### 1. NAVBAR (Fixed, 80px)
- BG: White
- Shadow: sm
- Logo: "Campus Maya", 20px, Bold, #1E40AF
- Menu: Inter, 14px, gap 32px
- Button: Primary #1E40AF

### 2. HERO (600px min-height)
- BG: Image with overlay
- Overlay: Gradient from #1E40AF/60
- Card: white/10 backdrop blur
- Text: White
- Layout: max-w-2xl, left-aligned

### 3. MISSION & VISION (2-Column Grid)
- Left: Light gray card
- Right: Primary blue card, white text
- Height: equal, vertical center
- Icon: 64px, centered

### 4. CORE VALUES (Asymmetric Bento)
- 5 values in custom grid
- Value 2: Large, centered
- Card: Light backgrounds with icons
- Hover: subtle shadow increase

### 5. TEAM (4-Column Grid)
- Image: 4:5 aspect ratio, rounded
- Name: H4, Bold
- Role: Small, uppercase, secondary color
- Quote: Italic
- Hover: Image scales 110%

### 6. CTA (Call to Action Box)
- BG: Primary container color
- Padding: 80px
- Icon: Forest emoji, opacity 10%
- Buttons: Primary + Secondary
- Border Radius: md

### 7. FOOTER
- BG: Light gray
- Text: 12px, gray
- Links: Hover primary color
- Border-top: 1px light

---

## 📱 Responsive Breakpoints

| Device | Width | Grid | Padding |
|--------|-------|------|---------|
| Mobile | 375px | 1 col | 16px |
| Tablet | 768px | 2 col | 24px |
| Desktop | 1024px+ | 3-4 col | 32px |

---

## ✅ Component Specs (Design.md Compatible)

### Button
- Primary: #1E40AF bg, white text, 12px v × 24px h, 8px radius
- Secondary: white bg, #1E40AF border, same padding
- Danger: #DC2626, white text
- All: rounded-base (8px), shadow-md, hover darker

### Card
- BG: White
- Border: 1px #E5E7EB
- Radius: 12px
- Padding: 24px
- Shadow: base, hover:lg

### Badge
- success/error/warning/info variants
- Padding: 4px 12px
- Radius: full (9999px)
- Font: 12px, semibold

---

## 🎯 Implementation Notes

All sections are **mobile-first responsive**.
All colors use Design.md palette.
All typography uses Poppins (headlines) + Inter (body).
All spacing uses 4px grid.
All border radius follows spec.
