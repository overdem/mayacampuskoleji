# Campus Maya - User Flows & Navigation

## Admin Panel Flow

### Admin Login Flow
```
Start
  ↓
[Admin Login Page]
  ├→ Email input
  ├→ Password input
  ├→ "Remember me" checkbox
  └→ [LOGIN] button
      ↓
   Validate
      ├→ Success → [Admin Dashboard]
      └→ Error → Show error message
```

### Admin Dashboard Flow
```
[Admin Dashboard]
  ├→ Statistics Cards
  │   ├→ Total Posts
  │   ├→ Total Views
  │   ├→ Recent Activity
  │   └→ Social Media Stats
  ├→ Quick Actions
  │   ├→ [Create Blog Post] → [Blog Editor]
  │   ├→ [Upload Media] → [Media Manager]
  │   └→ [Publish Social] → [Social Publisher]
  └→ Sidebar Navigation
      ├→ Blog Management
      ├→ Media Manager
      ├→ Social Publisher
      ├→ Analytics
      └→ Settings
```

### Blog Management Flow
```
[Blog Manager]
  ├→ Search & Filter
  │   ├→ Status (Draft, Published)
  │   ├→ Category
  │   └→ Date Range
  ├→ Blog Post List
  │   ├→ Title, Author, Date
  │   ├→ [Edit] → [Blog Editor]
  │   ├→ [Delete] → Confirm → Delete
  │   └→ [Preview] → New Tab
  └→ [Create New Post] → [Blog Editor]
```

### Blog Editor Flow
```
[Blog Editor]
  ├→ Title Input
  │   └→ Slug auto-generate
  ├→ Featured Image
  │   ├→ [Upload] or [Select from Media]
  │   └→ Preview
  ├→ Content Editor (Rich Text)
  │   ├→ Bold, Italic, Underline
  │   ├→ Headers (H1-H3)
  │   ├→ Lists
  │   ├→ Images
  │   ├→ Links
  │   └→ Embeds
  ├→ SEO Settings
  │   ├→ Meta Title
  │   ├→ Meta Description
  │   └→ Keywords
  ├→ Categories & Tags
  │   └→ Multi-select
  ├→ Publish Settings
  │   ├→ Status (Draft, Published)
  │   ├→ Publish Date
  │   └→ Featured (Yes/No)
  ├→ Bottom Actions
  │   ├→ [Save Draft]
  │   ├→ [Preview]
  │   └→ [Publish]
  └→ On Save → Return to Blog Manager
```

### Media Manager Flow
```
[Media Manager]
  ├→ Upload Area
  │   ├→ Drag & Drop
  │   └→ [Select Files] Button
  ├→ Search & Filter
  │   ├→ Type (Image, Video)
  │   └→ Date Range
  ├→ Media Grid
  │   ├→ Thumbnail
  │   ├→ File size & type
  │   ├→ [Delete] button
  │   └→ [Copy URL] button
  └→ Bulk Actions
      └─ Select multiple → [Delete All]
```

### Social Publisher Flow
```
[Social Publisher]
  ├→ Text Composer (Textarea)
  │   └→ Character count
  ├→ Media Upload
  │   └→ Drag & drop or select
  ├→ Platform Selector
  │   ├→ ☐ Facebook
  │   ├→ ☐ Instagram
  │   ├→ ☐ Twitter
  │   └→ ☐ LinkedIn
  ├→ Preview
  │   ├→ Facebook preview
  │   ├→ Instagram preview
  │   ├→ Twitter preview
  │   └→ LinkedIn preview
  ├→ Schedule
  │   ├→ [Publish Now] or [Schedule]
  │   └→ Date & Time picker
  └→ [Publish] / [Schedule] button
```

## Blog (Public) Flow

### Homepage Flow
```
[Homepage]
  ├→ Hero Section
  │   ├→ Image/Video
  │   ├→ Title & Description
  │   └→ Search bar
  ├→ Featured Posts
  │   └→ [Read More] → [News Detail]
  ├→ Latest News Grid
  │   ├→ Post cards
  │   └→ [Read More] on each card → [News Detail]
  ├→ Navigation Menu
  │   ├→ [Home]
  │   ├→ [News] → [News List]
  │   ├→ [Gallery] → [Gallery]
  │   ├→ [About]
  │   └→ [Contact]
  └→ Footer
      ├→ Social media links
      └→ Contact info
```

### News List Flow
```
[News List]
  ├→ Sidebar Filters
  │   ├→ Category
  │   ├→ Date Range
  │   └→ [Apply Filters]
  ├→ Search bar
  ├→ News Items
  │   ├→ Thumbnail
  │   ├→ Title
  │   ├→ Excerpt
  │   ├→ Author & Date
  │   └→ [Read More] → [News Detail]
  └→ Pagination
      └─ [1] [2] [3] ... [Next]
```

### News Detail Flow
```
[News Detail]
  ├→ Breadcrumb
  │   └→ Home > News > [Title]
  ├→ Article Header
  │   ├→ Title
  │   ├→ Author
  │   └→ Date
  ├→ Featured Image
  ├→ Article Content
  │   └→ Full rich text
  ├→ Share Buttons
  │   ├→ [Share on Facebook]
  │   ├→ [Share on Twitter]
  │   ├→ [Copy Link]
  │   └→ [Print]
  ├→ Author Card
  │   ├→ Avatar
  │   ├→ Bio
  │   └→ Other posts
  └→ Related Posts
      └→ [Read] links to other articles
```

### Gallery Flow
```
[Gallery]
  ├→ Filter
  │   ├→ Category selector
  │   └→ [Apply]
  ├→ Gallery Grid
  │   ├→ Thumbnail images
  │   └→ [Click] → Lightbox
  ├→ Lightbox Modal
  │   ├→ Full image
  │   ├→ [Previous] [Next]
  │   ├→ Close [X]
  │   └→ Caption/Description
  └→ Pagination
      └─ [1] [2] [3] ... [Next]
```

## Parent Portal Flow

### Parent Login Flow
```
Start
  ↓
[Parent Login Page]
  ├→ Email input
  ├→ Password input
  └→ [LOGIN] button
      ↓
   Validate
      ├→ Success → Check if 2FA enabled
      │   ├→ Yes → [2FA Input] → Code input → [Verify]
      │   └→ No → [Parent Dashboard]
      └→ Error → Show error message
```

### Parent Dashboard Flow
```
[Parent Dashboard]
  ├→ Header
  │   ├→ Logo
  │   ├→ User Menu
  │   └→ [Logout]
  ├→ Sidebar
  │   ├→ [Student Selector]
  │   ├→ [Grades]
  │   ├→ [Attendance]
  │   ├→ [Calendar]
  │   ├→ [Notifications]
  │   ├→ [Messages]
  │   └→ [Settings]
  ├→ Main Content
  │   ├→ Selected Student Info
  │   ├→ Grade Summary
  │   ├→ Attendance Summary
  │   ├→ Upcoming Events
  │   └→ Recent Notifications
  └→ Footer
```

### Student Selector Flow
```
[Student Selector]
  ├→ Display List of Students
  │   ├→ Name
  │   ├→ Grade Level
  │   ├→ Photo
  │   └→ [Select] button
  └→ On Select
      └→ Set active student → Reload dashboard
```

### Grades Flow
```
[Grades View]
  ├→ Student Info (Photo, Name)
  ├→ Semester Selector
  │   ├→ [2024 Fall]
  │   ├→ [2025 Spring]
  │   └→ [2025 Fall]
  ├→ Grades Table
  │   ├→ Subject
  │   ├→ Grade
  │   ├→ Percentage
  │   └→ Comments
  ├→ Statistics
  │   ├→ GPA
  │   ├→ Average Grade
  │   └→ Strengths & Weaknesses
  └→ Charts
      └─ Subject breakdown (bar chart)
```

### Attendance Flow
```
[Attendance Calendar]
  ├→ Student Info
  ├→ Calendar View (Month)
  │   ├→ Green: Present
  │   ├→ Red: Absent
  │   ├→ Yellow: Late
  │   └→ Blue: Excused
  ├→ Month Navigator
  │   ├→ [Previous Month]
  │   └→ [Next Month]
  ├→ Statistics
  │   ├→ Attendance %
  │   ├→ Total Absences
  │   ├→ Total Late
  │   └→ Total Present
  └→ Absence List
      ├→ Date
      ├→ Reason
      └→ Notes
```

### Academic Calendar Flow
```
[Academic Calendar]
  ├→ Filter by Type
  │   ├→ ☐ Holidays
  │   ├→ ☐ Exams
  │   ├→ ☐ Events
  │   └→ [Apply]
  ├→ Calendar Display
  │   ├→ Month view (default)
  │   ├→ Color-coded events
  │   └→ [Click Event] → Details
  ├→ Event Details Modal
  │   ├→ Event name
  │   ├→ Date & Time
  │   ├→ Description
  │   └→ Location
  └→ Month Navigator
```

### Notifications Flow
```
[Notifications]
  ├→ Filter
  │   ├→ Unread only
  │   ├→ Type selector
  │   └→ [Apply]
  ├→ Notification List
  │   ├→ Icon (type indicator)
  │   ├→ Title
  │   ├→ Message
  │   ├→ Date
  │   ├→ Read/Unread indicator
  │   └→ [Mark as Read] / [Delete]
  └→ Pagination
      └─ Show 20 per page
```

### Messaging Flow
```
[Messaging]
  ├→ Conversation List (Left Panel)
  │   ├→ Search conversations
  │   ├→ List of conversations
  │   │   ├→ Avatar
  │   │   ├→ Name
  │   │   ├→ Last message preview
  │   │   ├→ Date
  │   │   └→ [Click] → Open conversation
  │   └→ [New Message] → Conversation Modal
  └→ Chat Panel (Right Side)
      ├→ Conversation Header (Name, Date)
      ├→ Message History
      │   ├→ User messages (right)
      │   └→ Other messages (left)
      ├→ Message Input
      │   ├→ Text area
      │   ├→ [Attach File]
      │   └→ [Send]
      └→ Read receipts
```

## Navigation Structure

### Admin Top Level
```
/admin
  ├─ /login
  ├─ /dashboard
  ├─ /blog
  │  ├─ list
  │  └─ [id]/edit
  ├─ /media
  ├─ /social
  └─ /analytics
```

### Blog Top Level
```
/
├─ /haberler (news list)
├─ /haberler/[slug] (news detail)
├─ /galeri (gallery)
├─ /hakkimizda (about)
└─ /iletisim (contact)
```

### Parent Portal Top Level
```
/parent
├─ /login
├─ /2fa (two-factor auth)
├─ /dashboard
├─ /students
├─ /grades
├─ /attendance
├─ /calendar
├─ /notifications
└─ /messages
```
