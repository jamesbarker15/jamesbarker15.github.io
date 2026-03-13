# SEO fixes – checklist and redirect setup

This file summarises the fixes applied and what you need to do on your **hosting** side (redirects can’t be done in HTML alone).

**This site is hosted on GitHub Pages.** GitHub Pages does **not** run `.htaccess` or Netlify `_redirects`. To get proper 301 redirects (HTTP→HTTPS and duplicate URL consolidation), you need **Cloudflare** (or another proxy) in front of your domain.

---

## Done in the codebase

- **Meta keywords removed** from all pages (Google ignores them; focus is on copy, links, schema).
- **Schema expanded** on the homepage: Organization (with @id), WebSite, LocalBusiness with telephone and NAP. Align name, address, phone with your Google Business Profile.
- **New pages** for local/service SEO:
  - `web-design-uxbridge.html`
  - `seo-uxbridge.html`
  - `seo-hillingdon.html`
  - Sitemap updated with all new URLs.

---

## GitHub Pages: redirects via Cloudflare

GitHub Pages serves your files but does **not** support custom redirects. To fix:

1. **HTTP → HTTPS** (protocol canonicalization)  
2. **/index.html → /** (duplicate URL consolidation)

you put **Cloudflare** in front of `jbwebsolutions.co.uk` and add redirect rules there.

### Step 1: Add the site to Cloudflare

1. Sign up or log in at [dash.cloudflare.com](https://dash.cloudflare.com).
2. Add site → enter `jbwebsolutions.co.uk` → choose Free plan.
3. Cloudflare will show you two nameservers (e.g. `ada.ns.cloudflare.com`, `bob.ns.cloudflare.com`).
4. At your domain registrar (where you bought jbwebsolutions.co.uk), change the **nameservers** to those two. Wait for propagation (often 5–60 minutes).
5. In GitHub: repo → Settings → Pages → Custom domain: keep `jbwebsolutions.co.uk` and leave **Enforce HTTPS** enabled (GitHub will issue the cert for the Pages host; Cloudflare will handle HTTPS to visitors).

### Step 2: SSL mode for GitHub Pages

In Cloudflare: **SSL/TLS** → Overview → set encryption mode to **Full** (or **Full (strict)** if you’re comfortable with GitHub’s certificate). That way traffic from visitor → Cloudflare → GitHub is over HTTPS.

### Step 3: Redirect rules in Cloudflare

Use **Redirect Rules** (or **Page Rules** on Free plan, depending on what your dashboard shows).

**Rule 1 – Force HTTPS (301)**  
- **If:** URI Path does not match regex: `.*` (or use “All remaining traffic” / equivalent).  
- **Then:** Dynamic redirect → `https://jbwebsolutions.co.uk${uri.path}${uri.query_string}` → **301 Permanent**.  
- Or use the built-in **Always Use HTTPS** under SSL/TLS → Edge Certificates (turns HTTP requests into HTTPS; effectively a 301).

**Rule 2 – /index.html → / (301)**  
- **If:** URI Path equals exactly `/index.html`.  
- **Then:** Redirect to `https://jbwebsolutions.co.uk/` with status **301 Permanent**.

After this, `http://jbwebsolutions.co.uk` will 301 to `https://...`, and `https://jbwebsolutions.co.uk/index.html` will 301 to `https://jbwebsolutions.co.uk/`.

### If your dashboard has “Redirect Rules” (new UI)

1. **Rules** → **Redirect Rules** → Create rule.
2. **Rule 1:** Name e.g. “Force HTTPS”. When: `(http.host eq "jbwebsolutions.co.uk") and (not ssl)`. Then: Dynamic redirect, expression: `concat("https://jbwebsolutions.co.uk", http.request.uri.path, if(length(http.request.uri.query) > 0, concat("?", http.request.uri.query), ""))`, Status code 301.
3. **Rule 2:** Name e.g. “Index to root”. When: `(http.host eq "jbwebsolutions.co.uk") and (http.request.uri.path eq "/index.html")`. Then: Redirect to `https://jbwebsolutions.co.uk/`, 301.

### If you only have “Page Rules” (legacy)

- Page Rule 1: `*jbwebsolutions.co.uk*` → Setting: **Always Use HTTPS**.
- Page Rule 2: `jbwebsolutions.co.uk/index.html` → Setting: **Forwarding URL** → `https://jbwebsolutions.co.uk/` → 301 Permanent.

(Free plan has a limit of 3 Page Rules; the two above use 2.)

---

## 14-day priority checklist (GitHub Pages)

| Day | Task |
|-----|------|
| 1 | Point **jbwebsolutions.co.uk** to **Cloudflare** (change nameservers at registrar). |
| 2 | In Cloudflare: **Always Use HTTPS** (or Redirect Rule) + **/index.html → /** 301. |
| 3 | In **Google Search Console**: add property `https://jbwebsolutions.co.uk`, submit sitemap `https://jbwebsolutions.co.uk/sitemap.xml`. |
| 4 | **Google Business Profile**: claim/verify, NAP (name, address, phone) matches site and schema. |
| 5 | Optional: Add more **sameAs** in schema (LinkedIn, etc.) if you use them. |
| 6–7 | Check GSC for crawl errors; confirm HTTP→HTTPS and /index.html redirects in a browser. |
| 8–14 | Consider more pages (e.g. `seo-iver.html`, `seo-langley.html`) or case studies. |

---

## Other hosts (for reference)

- **`.htaccess`** in this repo is for **Apache** (e.g. cPanel). Not used on GitHub Pages.
- **`_redirects`** and **`netlify.toml`** are for **Netlify**. Not used on GitHub Pages.

If you ever move to Netlify or an Apache host, you can use those files there.
