# LearnHub - E-Learning Platform

## Overview

An e-learning platform that organizes educational content into tracks containing classes and resources. Students access content based on their subscription tier (Free, Pro, Max), with Pro unlocking classes and resources, and Max adding live events.

**Core Job Story**: When I want to learn a new skill, I want to follow a structured track of classes, so I can progressively build my knowledge and track my progress.

## Subscription Tiers

| Feature | Free | Pro | Max |
|---------|------|-----|-----|
| View tracks | Yes | Yes | Yes |
| View news feed | Yes | Yes | Yes |
| Access classes | No | Yes | Yes |
| Download resources | No | Yes | Yes |
| Access events | No | No | Yes |

---

## Home Page

`/(app)/home`

Dashboard showing recent activity and quick navigation to learning content.

**Job Story**: When I log in, I want to see what's new and continue where I left off, so I can stay engaged with my learning.

### Components

- **NewsFeed**: Displays recent classes and resources posted across all tracks
- **NavigationCards**: Quick-access cards to Tracks and Resources sections

### Behaviors

- **view news feed**: User sees a chronological list of recently added classes and resources with thumbnails and titles
- **navigate to tracks**: User clicks "Tracks" card and is redirected to /tracks
- **navigate to resources**: User clicks "Resources" card and is redirected to /resources

---

## Tracks Page

`/(app)/tracks`

Lists all available learning tracks for browsing.

**Job Story**: When I want to start learning, I want to browse available tracks, so I can choose a topic that interests me.

### Components

- **TrackGrid**: Grid of track cards showing title, description, and class count

### Behaviors

- **view tracks**: User sees all available tracks with their titles, descriptions, and thumbnail images
- **select track**: User clicks a track card and is redirected to /track/[trackId]

---

## Track Detail Page

`/(app)/track/[trackId]`

Shows the contents of a specific track including classes and resources.

**Job Story**: When I select a track, I want to see all its classes and resources, so I can plan my learning path.

### Components

- **TrackHeader**: Displays track title, description, and progress indicator
- **ClassList**: Ordered list of classes in the track with completion status
- **ResourceList**: List of downloadable resources associated with the track

### Behaviors

- **view track content**: User sees all classes and resources belonging to this track
- **access class (Pro/Max)**: Pro or Max user clicks a class and is redirected to /class/[classId]
- **access class (Free)**: Free user clicks a class and sees an upgrade prompt modal
- **download resource (Pro/Max)**: Pro or Max user clicks download and receives the resource file
- **download resource (Free)**: Free user clicks download and sees an upgrade prompt modal

---

## Class Page

`/(app)/class/[classId]`

Video player and interactive learning environment for a single class.

**Job Story**: When I'm taking a class, I want to watch the video and access related materials, so I can fully understand the topic.

### Components

- **VideoPlayer**: Embedded video player for the class content
- **ClassInfo**: Title, description, and track navigation breadcrumb
- **ClassResources**: List of downloadable resources for this specific class
- **CommentSection**: Area for adding and viewing class comments
- **CompletionToggle**: Checkbox to mark the class as completed

### Behaviors

- **access class**: Pro or Max user can view the page; Free users are redirected to /tracks with upgrade prompt
- **play video**: User clicks play button and the class video starts streaming
- **download resource**: User clicks download button and receives the resource file
- **add comment**: User types a comment and submits it; comment appears in the list
- **mark complete**: User toggles completion status; progress is saved and reflected in track progress

---

## Resources Page

`/(app)/resources`

Browsable library of all resources across all tracks.

**Job Story**: When I need a specific resource, I want to search and filter all available materials, so I can quickly find what I need.

### Components

- **SearchBar**: Text input for searching resources by name or description
- **CategoryFilter**: Dropdown or tags to filter by resource category
- **ResourceGrid**: Grid of resource cards with title, category, and download button

### Behaviors

- **view resources**: User sees all resources with their titles, categories, and thumbnails
- **search resources**: User types in search bar; results filter in real-time by name and description
- **filter by category**: User selects a category; only matching resources are displayed
- **download resource (Pro/Max)**: Pro or Max user clicks download and receives the file
- **download resource (Free)**: Free user clicks download on a paid resource and sees upgrade prompt

---

## Billing Page

`/(app)/billing`

Subscription management for upgrading, downgrading, or canceling plans.

**Job Story**: When I want to access more features, I want to manage my subscription, so I can choose the plan that fits my needs.

### Components

- **CurrentPlan**: Displays current subscription tier and status
- **PlanOptions**: Cards showing available plans with features and pricing
- **PaymentHistory**: List of past transactions (if applicable)

### Behaviors

- **view current plan**: User sees their current subscription tier and renewal date
- **upgrade plan**: User selects a higher tier and completes payment flow
- **downgrade plan**: Max user selects Pro plan; change takes effect at next billing cycle
- **cancel subscription**: User cancels subscription; access continues until period ends

---

## Admin: Tracks Management

`/admin/tracks`

CRUD interface for managing learning tracks.

**Job Story**: When I want to organize my course content, I want to create and manage tracks, so I can structure the learning experience.

### Components

- **TrackTable**: Table listing all tracks with edit/delete actions
- **TrackForm**: Form for creating or editing track details

### Behaviors

- **view tracks**: Admin sees a table of all tracks with title, class count, and status
- **create track**: Admin fills form with title, description, thumbnail; track is created
- **edit track**: Admin modifies track details; changes are saved
- **delete track**: Admin confirms deletion; track and associations are removed

---

## Admin: Classes Management

`/admin/classes`

CRUD interface for managing individual classes.

**Job Story**: When I want to add new lessons, I want to create and manage classes, so I can deliver content to my students.

### Components

- **ClassTable**: Table listing all classes with track assignment and actions
- **ClassForm**: Form for creating or editing class details including video upload

### Behaviors

- **view classes**: Admin sees a table of all classes with title, track, and status
- **create class**: Admin fills form with title, description, video URL, track assignment; class is created
- **edit class**: Admin modifies class details or reassigns to different track; changes are saved
- **delete class**: Admin confirms deletion; class and associated data are removed

---

## Admin: Resources Management

`/admin/resources`

CRUD interface for managing downloadable resources.

**Job Story**: When I want to provide supplementary materials, I want to upload and manage resources, so students can access additional content.

### Components

- **ResourceTable**: Table listing all resources with category and download count
- **ResourceForm**: Form for creating or editing resources including file upload

### Behaviors

- **view resources**: Admin sees a table of all resources with title, category, and associations
- **create resource**: Admin fills form with title, description, category, file, access tier; resource is created
- **edit resource**: Admin modifies resource details or replaces file; changes are saved
- **delete resource**: Admin confirms deletion; resource file and metadata are removed

---

## Deferred Features (Post-MVP)

The following features are noted but deferred for future iterations:

- **Events System**: Live events with calendar integration and ICS downloads (Max tier only)
- **App Builder**: Custom app building functionality at /builder
- **Event Calendar**: Calendar view on home page showing upcoming events
- **Resource Favorites**: Ability to save favorite resources for quick access
- **User Management**: Admin CRUD for user accounts (currently handled by auth system)
