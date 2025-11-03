# Start Local Development Server

This website uses dynamic header and footer components that must be loaded from a web server. Follow these simple steps to run the site locally:

## Quick Start (Recommended)

### Option 1: Python (Most Common)
If you have Python installed (comes pre-installed on macOS and most Linux systems), run:

```bash
# Python 3
cd C:\smartfusion\IT
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```

Then open: http://localhost:8000/pages/index.html

### Option 2: Node.js
If you have Node.js installed:

```bash
cd C:\smartfusion\IT
npx http-server -p 8000
```

Then open: http://localhost:8000/pages/index.html

### Option 3: PHP
If you have PHP installed:

```bash
cd C:\smartfusion\IT
php -S localhost:8000
```

Then open: http://localhost:8000/pages/index.html

### Option 4: VS Code Live Server
If you use VS Code:
1. Install the "Live Server" extension
2. Right-click on `index.html` in the project root
3. Select "Open with Live Server"

## Why?
The website loads header and footer components dynamically from separate files. This requires a web server to work properly due to browser security restrictions.

## Testing
Once the server is running, you can:
- Visit any page at: http://localhost:8000/pages/[page-name].html
- The header and footer will load automatically on all pages
- Theme toggle and navigation will work correctly

---

**Note**: The site will work on any web hosting service (like GitHub Pages, Netlify, etc.) without any additional configuration!

