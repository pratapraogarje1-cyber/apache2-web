const caseStudies = {
portfolio: {
eyebrow: "CASE STUDY · CURRENT PROJECT",
title: "My Portfolio on AWS",
summary: "A static portfolio served through CloudFront with a private S3 origin and HTTPS on a custom domain.",
body: `<h3>Goal</h3><p>Publish a fast, responsive portfolio without operating a server or database, while keeping infrastructure simple and cost-aware.</p>
<div class="callout"><strong>Architecture:</strong> Browser → DNS → CloudFront (HTTPS / ACM certificate) → Amazon S3 (static files protected with OAC).</div>
<h3>Implementation checklist</h3><ul><li>Upload HTML, CSS, JavaScript, and assets to the S3 origin bucket.</li><li>Configure CloudFront with the S3 origin and default root object <code>index.html</code>.</li><li>Use Origin Access Control (OAC) and a bucket policy that permits the intended distribution.</li><li>Request the ACM certificate in <code>us-east-1</code> for CloudFront custom domains and validate it through DNS.</li><li>Point the <code>www</code> DNS record to CloudFront and verify HTTPS.</li><li>After publishing updates, invalidate only paths that need refreshing or use versioned asset names.</li></ul>
<h3>Security and cost decisions</h3><ul><li>No EC2 server or database is needed for a static portfolio.</li><li>Keep the S3 bucket private when using CloudFront OAC; do not make it public just to fix an access error.</li><li>Check AWS Billing for actual charges; free-tier and plan eligibility can vary.</li></ul>
<h3>Lessons learned</h3><p>DNS records, certificate validation, CloudFront alternate domain names, and TLS settings must agree. Test DNS and HTTPS separately rather than changing multiple settings at once.</p>
<div class="callout"><strong>Before publishing:</strong> Add your actual screenshots, dates, tested results, and repository links. Don't claim performance or cost savings without measurements.</div>`
},
monitoring: {
eyebrow: "PROJECT PLAN · NOT YET DEPLOYED", title: "Cloud Monitoring Lab",
summary: "A learning project to explore AWS monitoring concepts using a small, controlled test workload.",
body: `<h3>Goal</h3><p>Learn to observe resource health, inspect logs, and configure a useful alert without creating unnecessary recurring costs.</p><h3>Proposed steps</h3><ul><li>Set a budget alert before creating any test workload.</li><li>Review available metrics and choose one actionable threshold.</li><li>Configure a CloudWatch alarm and test the notification path.</li><li>Document metric dimensions, alarm state changes, and cleanup steps.</li></ul><h3>Cost note</h3><p>Metrics, alarms, logs, dashboards, and notifications can incur charges. Check current pricing and delete test resources when finished.</p><div class="callout"><strong>Status:</strong> Planned. Add screenshots and verified results after completing the lab.</div>`
},
cicd: {
eyebrow: "PROJECT PLAN · NOT YET DEPLOYED", title: "Static Site Deployment Pipeline",
summary: "A future automation project to make website updates repeatable and safer.",
body: `<h3>Proposed flow</h3><div class="callout"><strong>Git push</strong> → checks → deploy approved files to S3 → targeted CloudFront invalidation → verify website.</div><h3>Implementation and security</h3><ul><li>Keep source code in Git and test changes on a branch.</li><li>Use narrowly scoped AWS permissions in your CI/CD provider.</li><li>Prefer short-lived role-based credentials over long-lived access keys.</li><li>Add manual approval before production deployment.</li><li>Verify the deployed website and keep a rollback path.</li></ul><h3>Cost note</h3><p>CI/CD minutes and AWS requests can have limits or charges. Check current terms before enabling automation.</p><div class="callout"><strong>Status:</strong> Planned. Never place AWS keys in browser JavaScript or commit them to Git.</div>`
}};
const dialog = document.getElementById("caseDialog");
document.querySelectorAll("[data-case]").forEach(button => button.addEventListener("click", () => {
 const item = caseStudies[button.dataset.case]; if (!item) return;
 document.getElementById("caseEyebrow").textContent = item.eyebrow;
 document.getElementById("caseTitle").textContent = item.title;
 document.getElementById("caseSummary").textContent = item.summary;
 document.getElementById("caseBody").innerHTML = item.body;
 dialog.showModal();
}));
document.getElementById("closeDialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
const menuToggle = document.getElementById("menuToggle"), nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));


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
