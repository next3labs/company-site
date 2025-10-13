# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the company website repository for Next3Labs. The repository is currently in its initial setup phase.

## Repository Information

- **Repository**: next3labs/company-site
- **Remote**: git@github.com:next3labs/company-site.git
- **Primary Branch**: main

## Development Workflow

### Branch Protection
- **NEVER make direct changes to the main branch**
- **NEVER edit files while checked out on the main branch**
- Always create feature branches for any changes
- Use pull requests for code review before merging to main

### Git Workflow
- Use `gh` command for GitHub operations (issues, pull requests, etc.)
- Create labels before creating issues when using `gh issue create`
- Follow conventional commit message format

### Agent-First Development
- All development tasks must be routed through the appropriate engineering lead agent
- Engineering leads assess, plan, and delegate to specialized agents
- Never implement directly without proper agent analysis and planning

## Project Setup Requirements

When setting up this project, consider the following based on company standards:

### Documentation Structure
Create the following documentation hierarchy:
```
docs/
├── planning/          # Design plans and proposals
├── architecture/      # Technical architecture documentation
├── features/         # Feature specifications
└── api/             # API documentation (if applicable)
```

### Knowledge Graph Context
This project should use the knowledge graph context: `project-company-site`

Updates to the knowledge graph should occur:
- When new features or components are implemented
- When architecture decisions are made
- When new patterns or agents are introduced
- At the end of development sessions

## Technology Stack

This is a static website built with:
- **Static Site Generator**: Eleventy (11ty) v3.x
- **Template Engine**: Nunjucks (.njk files)
- **Styling**: Vanilla CSS (no framework)
- **JavaScript**: Vanilla JavaScript (no framework)
- **Package Manager**: Yarn v4.x

## Project Structure

```
company-site/
├── src/
│   ├── _includes/          # Reusable components and layouts
│   │   ├── layouts/
│   │   │   └── base.njk   # Base HTML template
│   │   ├── header.njk     # Site header component
│   │   ├── footer.njk     # Site footer component
│   │   └── nav.njk        # Navigation component
│   ├── _data/             # Site data files (JSON)
│   │   ├── site.json      # Site metadata (title, description, etc.)
│   │   ├── team.json      # Team member data
│   │   └── services.json  # Services/products data
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css  # Main stylesheet
│   │   ├── js/
│   │   │   └── main.js    # Main JavaScript file
│   │   └── images/        # Image assets
│   ├── pages/             # Site pages (Nunjucks templates)
│   │   ├── index.njk      # Homepage
│   │   ├── about.njk      # About page
│   │   ├── services.njk   # Services page
│   │   └── contact.njk    # Contact page
│   └── blog/              # Blog posts (Markdown, optional)
├── _site/                 # Generated output (gitignored)
├── .eleventy.js           # Eleventy configuration
├── package.json           # Project dependencies and scripts
├── yarn.lock              # Yarn lockfile
└── docs/                  # Project documentation
```

## Development Commands

### Essential Commands
- `yarn install` - Install project dependencies
- `yarn start` - Start development server with live reload (http://localhost:8080)
- `yarn build` - Build production site to `_site/` directory
- `yarn clean` - Clean output directory

### Development Workflow
1. Run `yarn start` to start the development server
2. Edit files in `src/` directory
3. Browser will automatically reload on changes
4. Build with `yarn build` before deployment

## Content Management

### Editing Site-Wide Content
Edit JSON files in `src/_data/`:
- **Site info**: `src/_data/site.json` - site title, description, URL, year
- **Team members**: `src/_data/team.json` - add/edit team member profiles
- **Services**: `src/_data/services.json` - add/edit services offered

### Editing Pages
Edit `.njk` files in `src/pages/`:
- Use Nunjucks template syntax: `{{ variable }}`, `{% for item in items %}`
- Access data with: `{{ site.title }}`, `{{ team }}`, `{{ services }}`
- All pages use the base layout from `src/_includes/layouts/base.njk`

### Modifying Reusable Components
Edit components in `src/_includes/`:
- **Header**: `header.njk` - logo, navigation
- **Footer**: `footer.njk` - copyright, footer links
- **Navigation**: `nav.njk` - main navigation menu
- Changes to these files automatically apply site-wide

### Styling
- Main stylesheet: `src/assets/css/style.css`
- Uses CSS custom properties (variables) defined in `:root`
- Responsive design with mobile-first approach
- No CSS framework dependencies

### JavaScript
- Main script: `src/assets/js/main.js`
- Minimal vanilla JavaScript
- Handles smooth scrolling and form interactions
- No JavaScript framework dependencies

## Eleventy Configuration

Configuration file: `.eleventy.js`

Key settings:
- Input directory: `src/`
- Output directory: `_site/`
- Includes directory: `_includes/`
- Data directory: `_data/`
- Template engines: Nunjucks for HTML, Nunjucks for Markdown
- Assets copied directly to output via passthrough copy

## Deployment

The `_site/` directory contains the complete static website and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload the contents of `_site/` to your hosting provider.

## Adding New Pages

1. Create a new `.njk` file in `src/pages/`
2. Add front matter at the top:
   ```
   ---
   layout: layouts/base.njk
   title: Page Title
   description: Page description
   permalink: /page-url/
   ---
   ```
3. Add your content using HTML and Nunjucks syntax
4. Update navigation in `src/_includes/nav.njk` if needed
