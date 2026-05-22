# Amul Kool Gold - Exotic Rose Website

A premium, responsive website for Amul Kool Gold showcasing the exotic rose flavored milk beverage. Built with HTML, CSS, Tailwind CSS, and Canvas animation.

## Features

- **Responsive Design**: Fully responsive layout that adapts to all screen sizes (mobile, tablet, desktop)
- **Smooth Scrolling**: Anchor links with smooth scroll behavior
- **Canvas Animation**: Sequential frame animation synchronized with page scroll
- **Dark Mode Support**: Built-in dark mode theme toggle
- **Tailwind CSS**: Utility-first styling framework
- **Hero Text Animation**: Fading hero text on scroll
- **Fixed Navigation**: Sticky navbar with offset anchor scrolling

## Project Structure

```
├── code.html              # Main website file
├── index.html             # Alternative entry point
├── style.css              # Stylesheet
├── script.js              # JavaScript functionality
├── serve.ps1              # PowerShell development server
├── vercel.json            # Vercel deployment configuration
├── .gitignore             # Git ignore file
├── frames/                # Animation frame images (224 JPG files)
└── README.md              # This file
```

## Local Development

### Using PowerShell Server
```powershell
.\serve.ps1
```
Then open `http://localhost:8000` in your browser.

### Using Python
```bash
python -m http.server 8000
```

### Using Node.js http-server
```bash
npx http-server -p 8000
```

## Deployment on Vercel

### Prerequisites
- Git installed on your machine
- GitHub account
- Vercel account (free tier available)

### Step 1: Push to GitHub

```bash
cd "path/to/Animated website"

# Initialize git (if not already done)
git init

# Add the remote repository
git remote add origin https://github.com/hamza-creates-web/Milk-Website.git

# Stage all files
git add .

# Create initial commit
git commit -m "Initial commit: Amul Kool Gold website with responsive design and animations"

# Push to GitHub (first time)
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

**Option A: Using Vercel Dashboard (Recommended)**
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import the GitHub repository: `hamza-creates-web/Milk-Website`
5. Click "Deploy"
6. Your site will be live at `https://<project-name>.vercel.app`

**Option B: Using Vercel CLI**
```bash
npm i -g vercel
cd "path/to/Animated website"
vercel
```

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 640px

## Performance Notes

- Canvas frames are preloaded asynchronously
- Smooth scroll behavior is CSS-native
- Tailwind CSS is loaded from CDN
- Images are optimized and lazy-loaded where applicable

## Customization

### Colors
Edit the Tailwind config in `code.html`:
```javascript
colors: {
    primary: "#D4AF37",        // Gold
    "secondary": "#ff6b81",    // Rose Pink
    // ... other colors
}
```

### Animation Frames
Replace frame images in the `frames/` directory. Images should be named:
- `ezgif-frame-001.jpg` to `ezgif-frame-224.jpg`

### Content
All text and images can be edited directly in `code.html`.

## Troubleshooting

### Images not loading
- Ensure all frame images are in the `frames/` folder
- Check image naming convention: `ezgif-frame-XXX.jpg`

### Animation not playing
- Verify all 224 frame images are present
- Check browser console for errors
- Try refreshing the page

### Responsive issues
- Clear browser cache (Ctrl+Shift+Delete)
- Test in different browsers
- Check viewport meta tag is present

## Future Enhancements

- [ ] Add product purchase functionality
- [ ] Implement email newsletter signup
- [ ] Add store locator with maps integration
- [ ] Multi-language support
- [ ] Performance optimization with WebP images
- [ ] Service worker for offline support

## License

© 2023 Gujarat Cooperative Milk Marketing Federation Ltd. All rights reserved.

## Contact

- **Email**: customercare@amul.coop
- **Phone**: 1800 258 3333
- **Website**: [amul.coop](https://amul.coop)

---

**Last Updated**: May 22, 2026
**Made with ❤️ for Amul Kool Gold**
