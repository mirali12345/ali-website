# Portfolio Website

This is a small portfolio website scaffold with the following pages:

- `index.html` — Home
- `about.html` — About
- `projects.html` — Projects (includes Project 1 and Hour of Code example)
- `resume.html` — Resume / download

Structure:

- `assets/css/style.css` — styles
- `assets/js/main.js` — mobile nav toggle
- `assets/img/` — placeholder images (SVG)

Quick start (view locally):

1. Open `index.html` in your browser OR run a local HTTP server, e.g.:

```powershell
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

Publishing to GitHub

1. Initialize a local git repo and make the first commit (already done locally):

```powershell
cd "c:/Users/mirza/OneDrive/Документы/ali website/website"
git init
git add .
git commit -m "Initial website scaffold"
```

2. Create a new public repository on GitHub, then add it as a remote and push:

```powershell
git remote add origin https://github.com/your-username/your-repo.git
git branch -M main
git push -u origin main
```

3. (Optional) Enable GitHub Pages in the repository settings to publish the site from the `main` branch (`/` root).

2. Update links in the header/footer to point to your real `github.com/your-username/your-repo` and Codecademy profile.

3. Make the repository public on GitHub and push the files.

Customizing:
- Replace `assets/img/profile.svg` with your profile photo (keep the same filename or update the HTML).
- Update project cards in `projects.html` with real descriptions, images, and links.

If you want, I can:
- Add a `package.json` and deployment config for GitHub Pages.
- Create a real `README` with screenshots and a license.
- Commit these files and prepare the repo for publishing (you will need to provide your GitHub username).
