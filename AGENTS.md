# AGENTS.md

## Project purpose

This repository contains Javier Contreras's personal website. The site will be
published with GitHub Pages.

## Intended content

The site should include:

- A short professional introduction.
- A profile picture.
- Links to Javier's LinkedIn profile.
- Links to Javier's GitHub profile and relevant projects.
- Links to specifications Javier has worked on.
- A link to Javier's Gerrit account.
- Other professional links that Javier explicitly provides.

## Implementation guidance

- Keep the site small, fast, responsive, and accessible.
- Prefer a simple static implementation that works with GitHub Pages.
- Use semantic HTML and support keyboard navigation.
- Provide useful alternative text for the profile picture and other meaningful
  images.
- Keep external links easy to identify and safe to open.
- Avoid unnecessary dependencies, frameworks, build steps, and client-side
  JavaScript.
- Keep `CONTENT.md` and all user-facing text in `index.html` in sync. When copy
  changes in either file, update the other in the same change.
- Do not invent biographical details, profile URLs, project claims, or
  specification contributions. Ask Javier for missing information.
- Do not add analytics, trackers, contact details, or other personal information
  unless Javier explicitly requests them.
- Do not commit secrets or credentials.

## Change scope

- Make focused changes that support the personal site.
- Preserve any user-provided wording and assets unless a change is requested.
- Verify the site remains compatible with GitHub Pages after implementation
  changes.
