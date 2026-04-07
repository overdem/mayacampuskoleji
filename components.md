# Campus Maya - React Components Architecture

## Component Structure

```
components/
├── shared/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   ├── Badge.tsx
│   ├── Avatar.tsx
│   ├── Spinner.tsx
│   ├── Toast.tsx
│   └── Pagination.tsx
│
├── layout/
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── LayoutAdmin.tsx
│   ├── LayoutBlog.tsx
│   └── LayoutParent.tsx
│
├── admin/
│   ├── LoginForm.tsx
│   ├── DashboardStats.tsx
│   ├── BlogManager.tsx
│   ├── BlogEditor.tsx
│   ├── MediaManager.tsx
│   ├── SocialPublisher.tsx
│   └── AnalyticsPanel.tsx
│
├── blog/
│   ├── HeroSection.tsx
│   ├── PostCard.tsx
│   ├── PostGrid.tsx
│   ├── NewsListItem.tsx
│   ├── ArticleContent.tsx
│   ├── AuthorCard.tsx
│   ├── RelatedPosts.tsx
│   ├── GalleryGrid.tsx
│   └── LightboxModal.tsx
│
└── parent/
    ├── LoginForm.tsx
    ├── StudentSelector.tsx
    ├── GradesTable.tsx
    ├── AttendanceCalendar.tsx
    ├── NotificationList.tsx
    ├── MessagingPanel.tsx
    └── AcademicCalendar.tsx
```

## Shared Components

### Button
**Props:**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
```

**Usage:**
```tsx
<Button variant="primary" size="md">
  Submit
</Button>
```

### Input
**Props:**
```typescript
interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'date';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  label?: string;
}
```

### Card
**Props:**
```typescript
interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined';
  children: React.ReactNode;
  className?: string;
}
```

### Modal
**Props:**
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}
```

### Badge
**Props:**
```typescript
interface BadgeProps {
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  children: React.ReactNode;
}
```

## Layout Components

### LayoutAdmin
- Header with user menu
- Sidebar navigation
- Main content area
- Footer

### LayoutBlog
- Header with navigation
- Hero section (homepage)
- Content area
- Footer

### LayoutParent
- Header with user info
- Sidebar with student selector
- Main content area
- Footer

## Admin Module Components

### BlogEditor
Rich text editor for blog posts:
- Title input
- Featured image upload
- Rich text content editor
- Tag input
- Category selector
- Publish/Draft buttons
- Preview mode

### MediaManager
Image/video management:
- Drag & drop upload area
- Media grid view
- Search and filter
- Delete functionality
- Size/type information

### SocialPublisher
Social media content:
- Text composer
- Media upload
- Platform selector (Facebook, Instagram, Twitter, LinkedIn)
- Schedule date/time picker
- Preview for each platform

### AnalyticsPanel
Performance metrics:
- Date range picker
- Key metrics cards
- Line charts (trends)
- Bar charts (comparisons)
- Pie charts (distributions)
- Export to CSV/PDF

## Blog Module Components

### PostGrid
Display posts in grid layout:
- Responsive columns (1-4)
- Featured image
- Title, excerpt
- Author, date
- Read more link

### ArticleContent
Individual article display:
- Breadcrumb navigation
- Title and metadata
- Featured image
- Rich content
- Share buttons
- Author card
- Related posts

### GalleryGrid
Image gallery:
- Responsive grid
- Lightbox modal on click
- Caption support
- Filter by category

## Parent Module Components

### StudentSelector
Choose which student to view:
- Student cards with photos
- Grade level info
- Select button
- Add/remove students

### GradesTable
Display grades:
- Subject columns
- Grade values
- Semester selector
- Statistics (GPA, average)
- Subject breakdown chart

### AttendanceCalendar
Calendar-based attendance:
- Full month view
- Color-coded dates
- Absence reasons
- Statistics (attendance %)
- Absence list

### MessagingPanel
Communication system:
- Conversation list
- Chat messages
- Message input
- File attachments
- Read receipts

## State Management

**Context API for:**
- User authentication
- Student selection
- Notifications
- Theme (light/dark)

**localStorage for:**
- User preferences
- Draft blog posts
- UI state

## Accessibility Features

- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast WCAG AA
- Screen reader support
- Form error messages linked to inputs

## Performance Optimization

- Code splitting by module
- Image lazy loading
- Memoization of expensive components
- Virtual scrolling for long lists
- CSS-in-JS for critical styles

## Testing Strategy

- Unit tests for shared components
- Integration tests for modules
- E2E tests for critical flows
- Visual regression tests
