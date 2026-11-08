# TEAM 009 // STRIDER RELAY PERSONNEL ARCHIVE

A free, static, mobile-friendly D&D campaign website. The published roster contains the canonical Team 009 historical archive: 57 cycles (0787–0843), 117 unique Striders, and Cycle 0844 with three UNASSIGNED player positions. These are the approved Cycle 0742–0798 records shifted forward by 45. Inter-Strider relay notices are atmospheric interface text.

## Open it

Open `index.html` in a browser. There is no build step, account, database, API key, or paid service. For a live link, publish the entire folder to GitHub Pages.

## Free hosting on GitHub Pages

1. Create a free GitHub account (if needed) and a new **public** repository, for example `team-nine-archive`.
2. Upload the **contents** of this folder to the repository root: `index.html`, `styles.css`, `app.js`, and the `data/` and `assets/` folders.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**; choose `main` and `/ (root)`; save.
5. After GitHub finishes publishing, the site will be at `https://YOUR-USERNAME.github.io/team-nine-archive/` (substitute your actual username and repository name). Add that URL to your Discord channel.

GitHub Pages sites published from public repositories are publicly accessible. The access terminal is fictional and does **not** restrict access. Only publish information you're comfortable sharing publicly.

## Edit the archive

Open `data/roster.js` in a text editor. Each cycle must contain exactly **three** `members`. A member can include:

- `id`: permanent ID, such as `009-0141` (keep the same ID for returning Striders)
- `name`: displayed current name
- `species`: short species name
- `status`: `ACTIVE`, `SURVIVED`, `TRANSFERRED`, or `DECEASED`
- `firstCycle`, `lastCycle`: known complete service range, including unpublished cycles
- `serviceCycles`: array of actual published and unpublished cycles served, e.g. `[842,841,839]` (only published cycle numbers become clickable)
- `portrait`: relative image path, e.g. `assets/my-strider.png` (if missing, the amber silhouette appears)
- `formerNames`: optional array of former names
- `finalExpedition`: optional title; hidden for `ACTIVE` records

For a current-cycle character who has not been assigned yet, use `name: 'UNASSIGNED'` and `status: 'PENDING'` with no ID. The current recruitment cycle 0844 has three such slots.

Newly added cycles sort automatically newest to oldest. A cycle with fewer than three complete records is not published. Keep the published roster complete. The current cycle is an exception: its three UNASSIGNED slots are allowed.

The three portraits in each cycle sort by displayed full name, without changing the underlying data order. If a Strider returns, reuse their exact ID and portrait path, and record their **status for each individual cycle**.

## Edit Strider Network

Open `data/transmissions.js`. Add new conversation objects at the **top** of the array. Each conversation contains one or more `messages` with `user`, `cycle`, `text`, and optional `linkCycle` (for a clickable archive link). The player sees the newest conversations first, followed by shuffled older conversations, with no repeats until the list cycles.

## Notes

- No sound, AI bot, database, authentication, analytics, or subscriptions.
- Search includes current and former names, partial matching, punctuation/space/diacritic tolerance, and basic typo matching.
- Searching clears expanded files and service-history return history. Opening a portrait while search results are displayed keeps the search active.
- Clicking a service-history link restores the full gallery and creates a step-by-step temporary return trail.
- All changes are visible after the player refreshes or reconnects, not live mid-session.
- Historical portrait IMAGE FILES were not bundled with the conversation archive. The website deliberately displays the Pale Lodge insignia rather than reusing another character's portrait. Exact known approved illustration descriptions are preserved in `window.TEAM009_DATA.portraitPrompts`, keyed by permanent ID, for later recreation or matching to original files.
- All historical records are populated for 0787–0843. The site preserves the three unassigned 0844 slots. Check individual character images before publishing them because text portrait prompts are not the same as original image files.


### Custom missing-portrait artwork
The default image for UNASSIGNED slots and missing/failed portraits is `assets/archive-placeholder.png` (the black-background bird emblem based on the supplied reference). Replace this file with another image of the same name if desired. The placeholder is used in the gallery, expanded records, and full-size viewer.

### Holographic animation
Entering the archive triggers a brief relay materialization effect. A faint scan line repeats roughly every 13 seconds; it is CSS-only and free to host. Users who request reduced motion will not see these animations.


## V4 changes
- All demo Striders now use the same official insignia until individual portrait paths are supplied in `data/roster.js`.
- The emblem is smaller and centered in portrait frames, personnel files, and the full viewer.
- The archive has a more visible 7-second scanning sweep, lateral drift, and occasional restrained signal interference.
- Motion effects turn off for users with reduced-motion preferences.


## Version 5 additions

- The access-terminal button starts a 3.65-second Pale Lodge Uplink sequence (with SKIP INITIALIZATION). Reduced-motion users enter immediately.
- A tiny animated dimensional portal appears in the archive header. It is a decorative status indicator, not a real network monitor.
- After entering the archive, the first signal warning occurs randomly after 30 seconds to 3 minutes. The anomaly notification appears randomly 2–60 seconds after that warning. Ten minutes after an anomaly appears, the next cycle begins with another 30-second-to-3-minute warning delay and 2–60-second anomaly delay. It can be dismissed; GO TO ANOMALY always opens the fictional insufficient-clearance notice.
- All Version 4 roster, search, portraits, scans, personnel files, and Strider Network content are retained.


## Search-engine-unlisted edition

The `index.html` includes `<meta name="robots" content="noindex, nofollow">` to request that compliant search engines exclude the page from search results. Do not block crawlers using robots.txt because they must be able to read the meta tag. This is not authentication or privacy protection: anyone with the link, or who discovers the public GitHub repository, can read published files. Keep spoilers and secrets out of the public files.

## Published 2026-11-07 canonical archive

- **Historical range:** Cycles 0787–0843 (old Cycles 0742–0798 plus 45).
- **Current campaign:** Cycle 0844, three player positions UNASSIGNED.
- **Complete historical roster:** 57 cycles × three Striders = 171 expedition slots, 117 unique personnel IDs, 98 deaths, 18 permanent transfers, one retired veteran (Haldren Stonebrook), and no active historical survivor. Nerissa Tideveil (009-0116) survived the expedition and transferred permanently after Cycle 0843.
- **Mortality:** 98/171 = 57.3% of deployment slots.
- **Preserved:** first/last cycles, every service-cycle ID and outcome, expeditions, locations, annex designations, recorded permanent transfers, IDs, original portrait description text where available.
- **Artwork limitation:** source first-portrait image assets are not included in the exported archive; until matching assets are added, the Pale Lodge emblem is used for all historical Striders. Do not substitute another Strider's portrait.
- **Relay:** Demo references were replaced with fictional administrative notices that link to published cycles.
