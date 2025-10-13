# NEXT3LABS Company Website

Static company website built with Eleventy (11ty).

## Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

## Deployment

This site is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Pages Setup (One-time)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Source**: GitHub Actions
4. Save the settings

Once configured, every push to `main` will automatically build and deploy the site.

Your site will be available at: `https://next3labs.github.io/company-site/`

## Documentation

- [CLAUDE.md](./CLAUDE.md) - Developer documentation
- [Content Guide](./docs/content-guide.md) - How to edit content

## Project Structure

```
src/
├── _includes/     # Reusable components and layouts
├── _data/         # Site data (JSON files)
├── assets/        # CSS, JS, images
├── pages/         # Site pages
└── blog/          # Blog posts (optional)
```

## Tech Stack

- **Static Site Generator**: Eleventy v3.x
- **Template Engine**: Nunjucks
- **Styling**: Vanilla CSS
- **JavaScript**: Vanilla JavaScript
- **Package Manager**: Yarn v4.x
