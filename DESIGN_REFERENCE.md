# Campus Maya - Design Reference for Stitch

**Kullanım:** Stitch'te mockup tasarlarken, bu dosyadaki kuralları takip edin.

---

## 🎨 Brand Colors

Stitch'te color palette oluşturken şu renkleri kullan:

### Primary Color (Mavi)
```
#1E40AF (Desktop, buttons, headers)
#2563EB (Hover state)
#1D4ED8 (Active state)
```

### Secondary Color (Yeşil)
```
#059669 (CTAs, success, accents)
#16A34A (Hover)
#14532D (Dark variant)
```

### Accent Color (Orange)
```
#F97316 (Highlights, alerts)
#F59E0B (Hover)
#92400E (Dark variant)
```

### Neutral (Grays)
```
#111827 (Text - darkest)
#4B5563 (Text - dark)
#6B7280 (Text - medium)
#9CA3AF (Text - light)
#D1D5DB (Borders)
#E5E7EB (Light backgrounds)
#F3F4F6 (Very light bg)
#F9FAFB (Lightest bg)
```

### Status Colors
```
Success: #059669
Error: #DC2626
Warning: #F59E0B
Info: #0EA5E9
```

---

## 📝 Typography

### Fonts (Install in Stitch)
```
Headings: Poppins (Google Fonts)
Body: Inter (Google Fonts)
Mono: Courier New (fallback)
```

### Font Sizes

| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| H1 | 36px | Bold (700) | 1.2 | Page titles |
| H2 | 30px | Bold (700) | 1.2 | Section titles |
| H3 | 24px | Bold (700) | 1.3 | Subsection titles |
| H4 | 20px | Semibold (600) | 1.4 | Card titles |
| Body | 16px | Regular (400) | 1.5 | Main text |
| Small | 14px | Regular (400) | 1.5 | Secondary text |
| Tiny | 12px | Regular (400) | 1.5 | Labels, captions |

---

## 📐 Spacing

Use these values consistently (4px base unit):

```
4px   (1x)
8px   (2x)
12px  (3x)
16px  (4x) ← Most common
20px  (5x)
24px  (6x)
32px  (8x)
40px  (10x)
48px  (12x)
```

### Examples
- Button padding: 12px (vertical) × 16px (horizontal)
- Card padding: 24px
- Page padding: 16px (mobile) → 32px (desktop)
- Component gap: 16px

---

## 🔲 Border Radius

```
4px   (Small - inputs, small buttons)
8px   (Medium - cards, buttons)
12px  (Large - panels, modals)
16px  (Extra large - rounded cards)
9999px (Full circle - avatars, badges)
```

---

## 🎭 Components

### Buttons

#### Primary Button
- Background: #1E40AF
- Hover: #2563EB
- Text: White, 16px, Semibold
- Padding: 12px 24px
- Border radius: 8px
- Shadow: md

#### Secondary Button
- Background: Transparent
- Border: 2px #1E40AF
- Text: #1E40AF, 16px, Semibold
- Padding: 12px 24px
- Border radius: 8px

#### Danger Button
- Background: #DC2626
- Hover: #B91C1C
- Text: White
- Same padding & radius

#### Sizes
```
Small:  8px (v) × 16px (h), 14px text
Medium: 12px (v) × 24px (h), 16px text ← Default
Large:  16px (v) × 32px (h), 18px text
```

### Cards

- Background: White (#FFFFFF)
- Border: 1px #E5E7EB
- Border radius: 12px
- Padding: 24px
- Shadow: base (light gray shadow)

### Input Fields

- Background: #F9FAFB
- Border: 1px #D1D5DB
- Focus border: 2px #1E40AF
- Padding: 12px 16px
- Border radius: 8px
- Font: 16px Inter, Regular

### Modal / Dialog

- Background: White
- Border radius: 12px
- Padding: 32px
- Shadow: xl (prominent)
- Overlay: rgba(0, 0, 0, 0.5)

---

## 📱 Responsive Breakpoints

Design for these widths:

| Device | Width | Notes |
|--------|-------|-------|
| Mobile | 375px | iPhone 12/13 |
| Tablet | 768px | iPad |
| Desktop | 1024px+ | Standard laptop |
| Wide | 1440px | Full HD |

### Layout Changes
```
Mobile:  Single column, full width with 16px padding
Tablet:  2-column, 24px padding
Desktop: 3-4 column, 32px padding
```

---

## 🎯 Admin Panel Design Rules

### Layout
```
Header (fixed)     → 64px height
Sidebar            → 250px width (collapsible on mobile)
Main content       → Flexible width
```

### Color Scheme
```
Header:      #1E40AF
Sidebar:     #111827 (dark gray/black)
Active item: #F97316 (orange highlight)
Background:  #F9FAFB
```

### Navigation
- Menu items: 14px, Regular, with icons
- Active state: Orange left border + light background
- Hover: Light background (#F3F4F6)

---

## 🌐 Blog Design Rules

### Hero Section
```
Height: 500px (desktop), 300px (mobile)
Background: Gradient #1E40AF → #059669
Text overlay: White, centered
Featured image: Cover the entire area
```

### Post Card
```
Width: 300px (grid item)
Image height: 180px
Padding: 16px
Title: 18px, Bold
Excerpt: 14px, Regular, 3 lines max
Author + Date: 12px, Light gray
```

### Article Layout
```
Max width: 800px
Line length: 60-70 characters
Spacing between paragraphs: 24px
Image spacing: 24px above/below
```

---

## 👨‍👩‍👧 Parent Portal Design Rules

### Dashboard
- Welcome section at top
- Quick stats cards (3-4 metrics)
- 2-column layout (student selector on left)
- Card-based layout for each section

### Student Selector
- Card size: 160px × 160px
- Display name, grade, photo
- Border highlight on selection
- Hover effect: shadow increase

### Tables
```
Header row:      Background #F3F4F6, Bold text
Data rows:       Alternate #FFFFFF and #F9FAFB
Row hover:       Background #F0FDF4
Padding:         16px per cell
Font:            14px Regular
```

---

## ✨ Interactive Elements

### Hover States
- Buttons: Darker shade (see color specs)
- Links: Underline (#1E40AF)
- Cards: Shadow increase + slight scale
- Table rows: Background color change

### Loading States
- Use spinner/skeleton
- Opacity: 0.6
- Animation: Smooth fade/pulse

### Focus States
- Outline: 2px solid #1E40AF
- Offset: 2px
- Border radius: Match element radius

---

## 📐 Spacing Rules

### Margins between sections
```
Related content:  16px
New section:      32px
Major sections:   48px
Page top/bottom:  32px (desktop), 24px (mobile)
```

### Component internal spacing
```
Padding inside card:     24px
Padding in input:        12px vertical, 16px horizontal
Button icon-text gap:    8px
List item spacing:       12px
```

---

## 📸 Image Guidelines

### Featured Images (Blog)
```
Aspect ratio: 16:9 (1920×1080, 1280×720, 960×540)
Format: JPG or WebP
Compression: Optimized
```

### Gallery Images
```
Max width: 400px
Aspect ratio: Maintain original
Lightbox: Click to expand
```

### Icons
```
Size: 24px (usually)
Style: Outlined or filled (consistent)
Color: Inherit parent text color
```

---

## 🎨 Creating Design in Stitch

### Step-by-step
1. **Create Artboard** for each page
2. **Set background** to #F9FAFB or white
3. **Add components** using the colors above
4. **Use typography** as specified
5. **Apply spacing** consistently
6. **Test responsive** (resize frame)
7. **Create interactive** (link pages together)
8. **Export** component specs

### Naming Convention in Stitch
```
[Module]/[Page Name]/[Component]
Examples:
  admin/Dashboard/StatCard
  blog/Article/ReadMore
  parent/Grades/GradeTable
```

---

## 🔗 Interactive Prototyping

Link these flows in Stitch:

### Admin Flow
```
Admin Login → Dashboard → Blog Manager → Blog Editor
                       ↓
                  Media Manager → Upload
                       ↓
                  Social Publisher → Schedule
```

### Blog Flow
```
Homepage → News List ↔ News Detail
        ↓
      Gallery → Lightbox
```

### Parent Flow
```
Login → Dashboard → Student Selector
            ↓
      Grades / Attendance / Messages
```

---

## ✅ Quality Checklist

Before finalizing designs:

- [ ] All colors match brand palette
- [ ] Typography follows rules
- [ ] Spacing is consistent (4px grid)
- [ ] Components are aligned
- [ ] Text has sufficient contrast (WCAG AA)
- [ ] Mobile versions designed
- [ ] Interactive flows linked
- [ ] No unsupported fonts
- [ ] Images optimized
- [ ] Naming convention followed
- [ ] Design system applied

---

## 📞 Color Hex Codes (Quick Copy)

```
Primary:    #1E40AF, #2563EB, #1D4ED8
Secondary:  #059669, #16A34A
Accent:     #F97316
Dark:       #111827, #4B5563
Gray:       #6B7280, #D1D5DB, #F3F4F6
Success:    #059669
Error:      #DC2626
Warning:    #F59E0B
Info:       #0EA5E9
White:      #FFFFFF
```

---

## 🚀 Stitch Export

After design is complete:

1. **Generate Specs** - Components with all variants
2. **Create Share Link** - For stakeholder review
3. **Document Decisions** - Notes on design choices
4. **Prepare Handoff** - Developer-friendly specs

Next: PHASE 1 → Code generation from Stitch design
