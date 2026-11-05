# Spaced Out: portfolio

Source for [spaced1127.github.io](https://spaced1127.github.io). Live at the root of the user site.

A single static page with no build step. Open `index.html`, or serve the folder:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Files

- `index.html`: the page and its content
- `styles.css`: layout, type, colour and motion
- `script.js`: the intake's bench status, section entrances and the footer image drift
- `assets/`: the portrait, project photos, favicon and image credits

## Deploy

The site is served from the `main` branch of the `Spaced1127/spaced.github.io` repository. Push a change and GitHub Pages picks it up.

## Content to keep current

- Project versions and links in the hero, intake and work sections
- The "Latest from the bench" line
- Photo credits in the footer if an image is replaced

## Image credits

- Avatar: Spaced Out
- StreamGuard popup screenshots: Spaced Out
- SVR 2011 title screen and match select screenshots: Spaced Out
- Repair bench: "Reparieren und Basteln" by Wolfgang Stief, CC0, via Wikimedia Commons
- Switch teardown: "Innenleben der Nintendo Switch" by PantheraLeo1359531, CC BY 4.0, via Wikimedia Commons
- Twilight: "Clear twilight sky fading from deep blue to an orange horizon" by Jeremy Ricketts, Unsplash, via picsum.photos

The StreamGuard popup and the SVR 2011 game screens are real captures. The performance readout, LapVoice tip and Repair Bench ticket are drawn in HTML and CSS, and the names, ticket and lap figures inside them are illustrative.
