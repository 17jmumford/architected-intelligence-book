# Architected Intelligence (book site)

Static site for *Architected Intelligence*—promotional and educational overview of the book’s framework. Deployed with [GitHub Pages](https://pages.github.com/) from the repository root (`index.html`).

## Run locally

From the repository root, start any static file server so assets and fonts resolve correctly (avoid opening `index.html` directly as `file://`).

**Python 3** (ships on macOS):

```bash
cd /path/to/architected-intelligence-book
python3 -m http.server 8080
```

Then open [http://127.0.0.1:8080](http://127.0.0.1:8080).

**Node** (if you use npm):

```bash
npx --yes serve -l 8080
```

Stop the server with `Ctrl+C`.

## Project layout

- `index.html` — main page  
- `css/site.css` — styles  
- `book_cover.jpg` — cover image  
- `.nojekyll` — tells GitHub Pages not to run Jekyll  

Reference content for authors and agents: `agents.md`, `style_guide.md`, `book_summary.md`.
