# TEAM 009 // STRIDER RELAY PERSONNEL ARCHIVE

A free, static, mobile-friendly D&D campaign website. The published roster contains the canonical Team 009 historical archive: 57 historical expedition records (Cycles 0282–0843, spanning approximately 20 Earth years), 117 unique Striders, and Cycle 0844 with three UNASSIGNED player positions. These represent the original 57 approved roster snapshots, now renumbered with irregular chronological gaps. An Archives cycle equals 13 Earth days; each published cycle is a recorded expedition, not a mandatory complete team replacement. Inter-Strider relay notices are atmospheric interface text.

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
- All 57 historical records are populated across Cycles 0282–0843. The site preserves the three unassigned 0844 slots. Check individual character images before publishing them because text portrait prompts are not the same as original image files.


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

- **Historical range:** 57 recorded expedition rosters across Cycles 0282–0843, approximately 20 Earth years. The current recruitment remains Cycle 0844.
- **Current campaign:** Cycle 0844, three player positions UNASSIGNED.
- **Complete historical roster:** 57 recorded historical roster entries × three Striders = 171 expedition slots, 117 unique personnel IDs, 98 deaths, 18 permanent transfers, one retired veteran (Haldren Stonebrook), and no active historical survivor. Nerissa Tideveil (009-0116) survived the expedition and transferred permanently after Cycle 0843.
- **Mortality:** 98/171 = 57.3% of deployment slots.
- **Preserved:** all 117 personnel identities, expedition assignments and statuses, deaths, transfers, locations, annexes, portraits, and original portrait descriptions. Cycle numbers and first/last/service/leave references were consistently remapped to the new ~20-year chronology.
- **Artwork limitation:** source first-portrait image assets were not in the first website export, but an independently verified 117-file portrait upload package is available. Until the package is imported, the Pale Lodge emblem is used for historical Striders. Do not substitute another Strider's portrait.
- **Relay:** All 24 approved fictional Strider Network conversations were preserved verbatim, and message cycle stamps and linked archival cycles were updated to the new chronology.

## Upload original Strider portraits

A complete set of 117 verified WebP images is ready, split into eight approximately 1 MB ZIP packages because the single 8 MB download failed in the user's client. The archive is derived from their original `Photos.zip` and the three additional approved portraits.

To publish all portraits, upload all eight files named `team-nine-portraits-part-01-of-08.zip` through `team-nine-portraits-part-08-of-08.zip` to the repository ROOT, via `https://github.com/siearrawebb77/pl-x7k42-r9/upload/main`, then commit them to the `main` branch. Do not extract the ZIPs or alter their filenames.

The GitHub workflow `Import Team 009 Portraits` automatically waits until all eight ZIP files exist on `main`. It then validates all 117 permanent personnel IDs, copies portraits to `assets/portraits/009-XXXX.webp`, links each member's `portrait` property in `data/roster.js` for every appearance, and removes the temporary ZIP parts. GitHub Pages will then deploy the updated website. No other personnel fields are changed.

If the import workflow fails, inspect its Actions run before re-uploading. The eight parts together contain each of the 117 portraits exactly once.

## ~20-year historical timeline (November 2026 revision)

- Archive timekeeping: **1 cycle = 13 Earth days**.
- Team Nine was reactivated approximately **20 Earth years** before the current recruitment, Cycle 0844.
- **Cycle 0282** is the earliest displayed expedition record; **Cycle 0843** is the final historical expedition; **Cycle 0844** remains current recruitment.
- The 57 historical entries are selected expedition/personnel snapshots, **not** an uninterrupted 57-cycle period. Intervals range from one cycle to 37 cycles (~1.3 years), with irregular gaps and returning personnel. Some individual service records span more than two years.
- The `originalCycle` fields retain the source numbering (0742–0798) for provenance only, not current in-world dates.
- The legacy public archive currently displays three slots in Cycle 0844. The planned private Strider Relay will support the DM's optional fourth slot, without altering the historical three-person records.
