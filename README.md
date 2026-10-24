# CloudWithPratap portfolio upgrade

A responsive static portfolio refresh for `cloudwithpratap.space`, designed for the existing S3 + CloudFront + ACM setup.

## Files
- `index.html` — content, project cards, architecture diagram
- `styles.css` — premium dark blue/purple responsive styling
- `script.js` — interactive case-study dialogs and mobile navigation

No framework, build tool, database, server, or additional AWS service is required.

## Before deploying
1. Back up the currently working website files and keep a local copy.
2. Replace placeholder LinkedIn/GitHub URLs in `index.html` with your actual profile URLs.
3. Verify all project descriptions. Monitoring and CI/CD are intentionally marked as planned projects; do not claim they are complete until built and tested.
4. Open `index.html` locally and test desktop and mobile widths.
5. Upload these three files to the same S3 object keys used by the current site. If your current website has other pages/assets, merge changes rather than replacing the whole bucket.
6. If CloudFront keeps showing old files, create an invalidation for `/index.html`, `/styles.css`, and `/script.js` (or `/*` only if a full refresh is intended). Check current invalidation usage/pricing.

## Deployment safety
- Do not delete the existing bucket or CloudFront distribution.
- Do not change DNS, ACM, OAC, or bucket policies just to deploy front-end files.
- Keep the S3 bucket private when using CloudFront OAC.
- Never put AWS access keys or other secrets in front-end files.

## Architecture shown
Browser → DNS → CloudFront (HTTPS / ACM certificate) → private S3 origin protected by OAC.

The diagram is illustrative. Verify your actual distribution and bucket policy before claiming the origin is private and OAC-protected.


## Personal branding update
- The homepage introduces the owner as “Pratap” and uses the title “Cloud Engineer / Building with AWS”.
- Replace the sample profile URLs in `index.html`:
  - `https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/`
  - `https://github.com/YOUR_GITHUB_USERNAME`
- If you prefer a full name or a different professional title, edit the hero kicker and headline in `index.html`.

## Safe deployment checklist
1. Download a backup of the current live `index.html`, `styles.css`, and `script.js` from S3 before replacing anything.
2. Replace the LinkedIn and GitHub username placeholders with your actual profile URLs.
3. Test the extracted files locally and confirm the case-study buttons work.
4. Upload only the updated `index.html` and `styles.css` to the bucket root. Keep `script.js` unchanged unless you also changed it.
5. Confirm the S3 bucket root contains all three website files.
6. In CloudFront distribution `E3OF3HHNMIOVBT`, create an invalidation for:
   `/index.html`
   `/styles.css`
7. Wait for the invalidation to complete, then test the site in a private/incognito window and on mobile.
8. Keep the backup until the updated site is verified. Do not change DNS, ACM, OAC, bucket policy, or the distribution configuration for this visual update.
