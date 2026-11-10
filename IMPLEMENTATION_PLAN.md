# Tracy Akhionbare portfolio

The linked Figma frame measures 1440 × 4595 px. The page uses a dark introduction and contact section around a warm, light work index.

## Section map

| Section | Figma node | Layout and content |
| --- | --- | --- |
| Navigation and hero | 2894:4176 | Name and Work, About, Resume navigation. Centered location, headline and introduction, an outlined work CTA, then Mavapay and Chaincode logos. |
| Featured work introduction | 2901:4249, 2901:4252 | Heading and two-project count above a band bounded by thin rules. The heading and count stay at the top of the viewport while the featured projects scroll and leave at Other work. |
| Mavapay | 2901:4296, 3000:6565, 2917:5395 | Numbered project intro with tags, summary, case study link, and right-aligned facts. The homepage and case study share the interactive three-screen montage. |
| Chaincode Labs | 2977:11526, 3000:6576, 2977:11620 | The same intro pattern, with contract metadata and three overlapping screen previews. Hover, keyboard focus, or tap brings a screen forward. |
| Other work | 2989:16823, 3000:6564 | Heading and short description above side-by-side Rently Africa and CloudNest cards. |
| Contact | 3006:5520 | Centered availability label, two-line headline, and email link on the dark background. |

## Tailwind theme

| Role | Value |
| --- | --- |
| Dark background, light text | #0c1512, #ffffff |
| Work background, primary and muted text | #edeadf, #1f1f1c, #5f5e57 |
| Accent, section rule, tag outline, gallery surface | #d3a63d, #d8d7cd, #b8b8b8, #dcdad1 |
| Display | Neue Montreal Medium. Hero 72/75.6 px, section and project headings 40/44 px, contact 56/75.6 px. Use Inter when the licensed font is unavailable. |
| Body | Inter. Hero intro 18/27 px, project copy 16/24 px, gallery titles 24/36 px. |
| Labels and project facts | JetBrains Mono. Nav 15/22 px, eyebrows and facts 14/22 px, tags 11/16 px. |
| Buttons and links | Geist Medium and Semibold at 15/22 px. |
| Layout | 1312 px content width, 64 px desktop gutters, 888 px centered hero and contact column, 1141 px featured artwork width. Recurring gaps include 8, 12, 16, 24 and 32 px. |

## Implementation

1. Set up a local Vite site with Tailwind and keep shared values in the Tailwind stylesheet. Use semantic sections and reusable templates for project intros, tags, facts, and gallery cards.
2. Build the homepage in display order and place the original Figma artwork in the matching slots. Use responsive Grid and Flexbox. Keep the desktop proportions and adapt the galleries, metadata, and navigation for small screens.
3. Wire Work to the project index, About to the supplied intro, Resume to the attached PDF, and Contact to the displayed email. The Figma homepage contains no prototype destinations for the case study buttons. Use authored case study content where available, and keep missing destinations explicit.
4. Compare the local page with the desktop Figma reference, check smaller widths and keyboard navigation, then run the production build.

## Local preview

Run `npm install` and `npm run dev` from the project folder. Use `npm run build` to generate the static site in `dist/`. The build includes the homepage, Mavapay case study, and Chaincode Labs project overview.

## Source gaps

- Both preview stacks use the supplied PNG exports. The Chaincode overview uses the homepage copy.
- The Figma Starter-plan tool limit blocked the full Mavapay case study visual audit. The Mavapay page uses the supplied narrative and the homepage montage.
- The source gives Mavapay's homepage entry a 2025–2026 date and the detailed case study a 2023–2024 timeline. Both values are preserved for review.
- The site uses Inter for display typography until a licensed Neue Montreal webfont is provided.
