# IT Services Template

A modern, responsive website template designed for IT Services, Cybersecurity, and Cloud Services companies. Built with Bootstrap 5, featuring Indian localization and accessibility-first design.

## 🌟 Features

- **Unique Design**: Custom-built, not from marketplaces
- **Indian-Ready**: ₹ currency, +91 phone formats, local payment options
- **Responsive**: Mobile-first design with Bootstrap 5
- **Accessible**: WCAG 2.1 AA compliant
- **SEO Optimized**: Semantic HTML, Open Graph tags, structured data
- **Dark Mode**: Optional dark theme
- **AJAX Forms**: Contact and quote forms with validation
- **Client Portal**: Dashboard for clients to track services

## 📁 Structure

```
it-services-template/
├── assets/          # CSS, JS, images, fonts
├── pages/           # All HTML pages
├── partials/        # Reusable components (header, footer)
├── docs/            # Documentation
└── .github/         # CI workflows
```

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/it-services-template.git
cd it-services-template
```

2. Open `pages/index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

3. Visit `http://localhost:8000/pages/index.html`

## 🎨 Customization

### Colors
Edit `assets/css/style.css` and update CSS custom properties:
```css
:root {
  --primary-color: #0066cc;
  --secondary-color: #00cc99;
  --dark-color: #1a1a2e;
}
```

### Content
- Company info: Update `partials/header.html` and `partials/footer.html`
- Services: Modify `pages/services.html` and `pages/service-details.html`
- Pricing: Edit `pages/pricing.html` with your plans

### Images
Replace placeholder images in `assets/img/` with your own. Maintain aspect ratios:
- Hero: 16:6
- Service cards: 4:3
- Team photos: 1:1

## 📄 Pages

- **index.html**: Landing page with hero, services overview, testimonials
- **about.html**: Company story, mission, team
- **services.html**: All services overview
- **service-details.html**: Individual service pages
- **solutions.html**: Industry-specific solutions
- **case-studies.html**: Customer success stories
- **pricing.html**: Service plans and pricing
- **contact.html**: Contact form and locations
- **careers.html**: Job listings
- **blog.html**: Blog posts and articles
- **login.html**: Client portal login
- **dashboard.html**: Client dashboard
- **404.html**: Error page

## 🔧 Technologies

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- JavaScript (ES6+)
- Bootstrap 5.3
- Font Awesome 6
- AOS (Animate On Scroll)
- Chart.js (for dashboard)

## ♿ Accessibility

- Semantic HTML
- ARIA labels and roles
- Keyboard navigation
- Skip links
- Color contrast ratio ≥ 4.5:1
- Alt text for all images

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Deployment

### GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select `main` branch
4. Save

Your site will be live at `https://YOUR_USERNAME.github.io/it-services-template/`

## 📝 License

MIT License - see LICENSE.md for details

## 🤝 Contributing

Contributions welcome! Please open an issue or submit a pull request.

## 📞 Support

For questions or issues, please open a GitHub issue.

---

Built with ❤️ for the IT services community

