# Task 1 — Personal Portfolio Website

## Requirements covered
- Responsive portfolio using HTML, CSS and JavaScript.
- About, Skills, Projects and Contact sections.
- Working client-side contact form with validation and a mailto submission flow.
- Mobile navigation.
- Keyboard-friendly skip link, labels, focus states and status messages.
- No framework required; the project is lightweight and GitHub Pages compatible.


## Run locally
Open `index.html` in a browser, or use VS Code Live Server.

## Deploy on GitHub Pages
1. Create a GitHub repository, for example `DTEN_Task1_Personal_Portfolio`.
2. Upload `index.html`, `styles.css`, `script.js` and this README to the repository root.
3. In GitHub open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select `main` and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish the site and open the generated URL.

## Important
The contact form does not require PHP or MySQL. It validates the form in the browser and opens the visitor's email client using `mailto:`. This keeps it compatible with GitHub Pages. For server-side email delivery, replace the mailto flow with a service such as Formspree or Web3Forms.
