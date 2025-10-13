# Content Management Guide

This guide explains how to update and manage content on the Next3Labs website without needing deep technical knowledge.

## Quick Overview

The website uses a static site generator called Eleventy. Content is stored in simple files that anyone can edit:
- **JSON files** for structured data (team members, services, site info)
- **Nunjucks (.njk) files** for page content
- **CSS files** for styling

## Editing Site-Wide Information

### Site Metadata (Title, Description, etc.)

**File**: `src/_data/site.json`

```json
{
  "title": "Next3Labs",
  "description": "Next3Labs - Innovative technology solutions",
  "url": "https://next3labs.com",
  "author": "Next3Labs Team",
  "currentYear": 2025
}
```

**What you can change:**
- `title`: Company name shown in header and browser tabs
- `description`: Brief description for SEO
- `url`: Website URL
- `currentYear`: Update this each year for copyright notice

### Team Members

**File**: `src/_data/team.json`

```json
[
  {
    "name": "Team Member 1",
    "role": "CEO & Founder",
    "bio": "Brief bio about the team member",
    "image": "/assets/images/team/member1.jpg"
  }
]
```

**To add a new team member:**
1. Add a comma after the last team member's closing `}`
2. Copy the entire team member block
3. Update the name, role, bio, and image path
4. Save the file

**To remove a team member:**
- Delete the entire block for that person (including the comma if it's not the last one)

### Services

**File**: `src/_data/services.json`

```json
[
  {
    "title": "Service 1",
    "description": "Description of the first service",
    "icon": "icon-1"
  }
]
```

**To add/edit services:**
1. Follow the same pattern as team members
2. Update title, description, and icon for each service

## Editing Page Content

### Homepage

**File**: `src/pages/index.njk`

The homepage has three main sections:
1. **Hero Section** - The large banner at the top
2. **Services Grid** - Automatically pulls from `services.json`
3. **Call-to-Action (CTA)** - The bottom section

**To edit the hero text:**
```html
<h1>Welcome to {{ site.title }}</h1>
<p class="lead">{{ site.description }}</p>
```
Change the text between `<h1>` and `</h1>` or `<p>` and `</p>`.

**Note**: `{{ site.title }}` automatically shows the site title from `site.json`. You can replace this with plain text if preferred.

### About Page

**File**: `src/pages/about.njk`

Edit the intro text in the "about-intro" section:
```html
<h2>Who We Are</h2>
<p>Your content here...</p>
```

The team section automatically displays all team members from `team.json`.

### Services Page

**File**: `src/pages/services.njk`

The services are automatically displayed from `services.json`. You can edit the intro text in the page header section.

### Contact Page

**File**: `src/pages/contact.njk`

**To update contact information:**
```html
<h3>Email</h3>
<p><a href="mailto:info@next3labs.com">info@next3labs.com</a></p>

<h3>Location</h3>
<p>Your Location Here</p>
```

**Note**: The contact form currently doesn't submit anywhere. You'll need to integrate a form service (like Formspree or Netlify Forms) to make it functional.

## Modifying Navigation

**File**: `src/_includes/nav.njk`

```html
<li><a href="/">Home</a></li>
<li><a href="/about/">About</a></li>
<li><a href="/services/">Services</a></li>
<li><a href="/contact/">Contact</a></li>
```

**To add a new navigation item:**
1. Copy a line like `<li><a href="/">Home</a></li>`
2. Change the URL in `href=""` and the text between `<a>` and `</a>`
3. Make sure to create the corresponding page!

## Styling Changes

### Colors

**File**: `src/assets/css/style.css`

Find the `:root` section at the top:
```css
:root {
  --primary-color: #0066cc;     /* Main brand color */
  --secondary-color: #333333;   /* Dark gray */
  --text-color: #444444;        /* Body text */
  --light-bg: #f8f9fa;          /* Light background */
  --white: #ffffff;
  --border-color: #e0e0e0;
}
```

Change the hex color codes (e.g., `#0066cc`) to update colors site-wide.

### Fonts

Look for the `body` selector:
```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', ...;
}
```

You can add custom fonts here or change to a specific font family.

## Adding Images

1. Place images in `src/assets/images/`
2. For team photos, create a subfolder: `src/assets/images/team/`
3. Reference images in your content with: `/assets/images/filename.jpg`

## Preview Your Changes

1. Open terminal in the project folder
2. Run: `yarn start`
3. Open your browser to `http://localhost:8080`
4. Make changes to files - the browser will automatically reload

## Build for Production

When ready to deploy:
1. Run: `yarn build`
2. Upload the entire `_site/` folder to your web host

## Common Tasks Cheat Sheet

| Task | File to Edit | What to Change |
|------|-------------|----------------|
| Change site title | `src/_data/site.json` | `title` field |
| Add team member | `src/_data/team.json` | Add new object to array |
| Edit homepage hero | `src/pages/index.njk` | `<section class="hero">` |
| Change colors | `src/assets/css/style.css` | `:root` variables |
| Update navigation | `src/_includes/nav.njk` | Add/remove `<li>` items |
| Edit footer | `src/_includes/footer.njk` | Footer content |
| Change contact email | `src/pages/contact.njk` | Email link |

## Tips

1. **Always test locally** with `yarn start` before deploying
2. **Keep backups** of files before making major changes
3. **Be careful with brackets**: `{ }`, `[ ]`, `< >` must always match
4. **JSON files are picky**: Missing commas or quotes will break the build
5. **File paths**: Always start with `/` for absolute paths from the site root

## Getting Help

If you break something:
- Check the terminal for error messages
- Look for missing commas, brackets, or quotes
- Compare your changes with the original files
- Run `yarn build` to see if there are any errors

## Next Steps

- Customize content in data files
- Replace placeholder images with real photos
- Update colors to match brand guidelines
- Set up form submission service for contact form
- Add more pages as needed
