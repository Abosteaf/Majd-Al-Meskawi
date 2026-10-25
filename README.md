# Majd Al-Meskawi – personal tourism site

Static single page (HTML + CSS + vanilla JS, no build step).

- Run locally: open `index.html` in a browser (or `python3 -m http.server`).
- Publish: upload the whole folder to GitHub Pages / Netlify / any static host.
- Replace images in `assets/`: `profile.jpg` (circle photo), `hero-bg.jpg` (hero background), `logo.png`.
- Edit texts in the `I18N` dictionary and links in `CONTACTS` inside `js/main.js`.

## Updates
- **Top banner removed**: the image under the news ticker (and its hidden decorative scene) is gone; the ticker is unchanged.
- **Site background**: `assets/bg-image.jpg` is the fixed full-page background / fallback (`body::before` in `css/style.css`). A light veil (`--veil`, `--veil-video`) keeps text readable.
- **Background video**: put the file at `assets/bg-video.mp4` (H.264, muted, portrait ~720x1280 recommended, ideally under ~5 MB). It plays behind the whole site (`<video id="bgVideo">`, autoplay/muted/loop/playsinline, fixed, `object-fit: cover`). If the file is missing, or the visitor uses reduced-motion / data-saver, the site silently keeps the static image.
  Compress example: `ffmpeg -i input.mp4 -an -vf "scale=-2:1280,fps=24" -c:v libx264 -crf 28 -preset veryfast -pix_fmt yuv420p -movflags +faststart assets/bg-video.mp4`
- **Contact cards**: all cards are wide horizontal rectangles, one per row (`.cards` / `.card` in `css/style.css`).
- **Website card**: title and link are in `I18N` / `CONTACTS` in `js/main.js`; the logo is `assets/logo-afaq.png`; opens https://afaqtravel.site/ in a new tab.
