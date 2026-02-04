# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js 13 App Router, React 18, and Tailwind CSS. Content is managed via JSON files rather than a database.

## Commands

```bash
npm run dev      # Start development server on localhost:3000
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint code linting
```

## Architecture

### Data-Driven Content
All portfolio content lives in `app/json/`:
- `profile.json` - Name, title, bio, social links
- `experience.json` - Work history entries
- `projects.json` - Project showcase items

To modify portfolio content, edit these JSON files directly.

### Component Structure
- **Server Components** (async): `ProfileCard.jsx`, `About.jsx` - fetch data at build time
- **Client Components** ("use client"): `Navigation.jsx`, `Spotlight.jsx`, `Analytics.jsx` - require browser APIs

### Layout Pattern
Two-column responsive grid:
- Left sidebar (sticky on desktop): Profile card + navigation
- Right content (scrollable): About, experience, projects sections

Navigation uses scroll-based active state detection via `getBoundingClientRect()`.

### Styling
- Tailwind CSS with custom config in `tailwind.config.js`
- Global styles and CSS resets in `styles/globals.css`
- Mouse-tracking spotlight effect using CSS variables (`--mouse-x`, `--mouse-y`)

### Path Aliases
Configured in `jsconfig.json`:
```javascript
"@*": ["./*"]  // e.g., @components/About
```

## Key Files

- `app/page.jsx` - Main landing page, orchestrates all sections
- `app/layout.jsx` - Root layout with metadata and font config
- `components/Navigation.jsx` - Scroll-aware navigation with mobile support
- `components/Spotlight.jsx` - Mouse-following gradient effect
