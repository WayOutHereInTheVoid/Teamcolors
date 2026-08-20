# TRL Color Studio

TRL Color Studio is a single-file React web application for managing, evaluating, and exporting color palettes for all 12 teams in The Real League (TRL), a fictional professional football league.

The entire application lives within `index.html`. There is no build step, no bundler, and no separate component files.

## Features

- **Teams Grid:** View and edit color palettes for all 12 TRL teams. Includes inline HSB tuning, palette health scoring, and version history.
- **Evaluate:** Preview team colors in simulated environments, such as broadcast score bugs and field/endzone layouts, with contrast and legibility checks.
- **Spectrum:** A searchable, filterable grid of all colors across the league, sortable by hue, brightness, or saturation.
- **Compare:** A workspace to compare any two colors side-by-side to check contrast ratios and simulate desaturation to reduce vibration.
- **Conflict Matrix:** An interactive heatmap identifying teams with similar primary colors to prevent uniform clashes during games.
- **Export Studio:** Generate customizable, high-resolution PNG palette graphics or export the league's color data as JSON, CSS Variables, or Tailwind config objects.

## Technology Stack

The app uses a lightweight, CDN-based architecture:
- **React 18 & ReactDOM:** Loaded from unpkg CDN.
- **Babel Standalone:** Transpiles JSX in the browser at runtime.
- **Tailwind CSS:** Loaded via CDN for utility-first styling.
- **Lucide React:** UMD build for icons.

## Usage

Simply open `index.html` in a web browser.

**Primary Use Environment:** The app is optimized for Safari on iOS. Note that Babel Standalone transpilation may cause a brief initial loading delay.
