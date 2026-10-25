# Majd Al-Meskawi – personal tourism site

Static single page (HTML + CSS + vanilla JS, no build step).

- Run locally: open `index.html` in a browser (or `python3 -m http.server`).
- Publish: upload the whole folder to GitHub Pages / Netlify / any static host.
- Replace images in `assets/`: `profile.jpg` (circle photo), `hero-bg.jpg` (hero background), `logo.png`.
- Edit texts in the `I18N` dictionary and links in `CONTACTS` inside `js/main.js`.

## Updates
- **Website card**: added to `CONTACTS` in `js/main.js` (opens https://afaqtravel.site/ in a new tab).
- **Top banner**: `assets/background.jpg` is shown under the ticker (`.hero__bg` in `css/style.css`) with a very slow zoom (`hero-cinema`). Disabled by `prefers-reduced-motion`.
- **Background video**: put the file at `assets/bg-video.mp4` (H.264, muted, ~720p, under ~5 MB is ideal). It plays behind the whole site (`<video id="bgVideo">`). If the file is missing, or the visitor uses reduced-motion / data-saver, the site silently falls back to the static `assets/background.jpg` background.
  Compress example: `ffmpeg -i input.mp4 -an -vf "scale=-2:720,fps=24" -c:v libx264 -crf 28 -preset veryfast -pix_fmt yuv420p -movflags +faststart assets/bg-video.mp4`
- Text readability over the video is tuned with `--veil-video` in `css/style.css`.
