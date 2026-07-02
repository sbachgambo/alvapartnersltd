# Alva Partners — Elementor (Free) Build Kit

A step-by-step blueprint to rebuild this coded site in **WordPress + Elementor Free**, matching
the design 1:1. This is a **rebuild guide**, not an import — Elementor stores pages in its own
format, so each section is recreated with widgets. Everything here uses **free** tools only.

> Keep the coded site open beside you as the visual reference. All colours, fonts, spacing,
> copy, and images below come straight from it.

---

## 0. What you'll install (all free)

| Tool | Why | Notes |
|------|-----|-------|
| **WordPress** | The CMS | On your host, or local (LocalWP) to build first |
| **Astra** theme | Header/footer + performance without Elementor Pro | Free. Its Customizer builds the header (logo + menu) and footer — the job Elementor *Pro's* Theme Builder would otherwise do |
| **Elementor** (free) | Page builder | Site Settings (global colours/fonts), and most section widgets |
| **Essential Addons for Elementor** (free) | Fills widget gaps | Gives **Post Grid** (News), **Advanced Tabs** (product categories), and extra layout widgets Elementor Free lacks |
| **Fluent Forms** (free) | Contact + Quote forms | Elementor Free has **no** form widget; build forms here, drop them in via the **Shortcode** widget |

> **Why Astra?** Elementor's own header/footer builder (Theme Builder) is Pro-only. Astra's
> free Customizer handles the site-wide header and footer, so you don't need Pro.

---

## 1. Global Site Settings (do this FIRST)

Elementor → hamburger (top-left) → **Site Settings**. Setting these once styles the whole site.

### 1a. Global Colours  (Site Settings → Global Colors)
Replace the four defaults and add the extras. These are the exact brand values:

| Elementor slot | Name | HEX |
|----------------|------|-----|
| Primary | Black | `#1A1A1A` |
| Secondary | Steel | `#565B62` |
| Text | Body Black | `#111111` |
| Accent | Silver-Steel | `#7E858E` |
| + Add Custom | Light Silver | `#B9BEC5` |
| + Add Custom | Off-White | `#F4F5F6` |
| + Add Custom | White | `#FFFFFF` |
| + Add Custom | Deep Steel (labels) | `#4E535A` |

### 1b. Global Fonts  (Site Settings → Global Fonts)
| Slot | Font | Weight | Used for |
|------|------|--------|----------|
| Primary | **Playfair Display** | 700 | All headings (H1–H4) |
| Secondary | **Inter** | 400/500/600 | Body text, buttons, labels |
| Text | Inter | 400 | Paragraphs |
| Accent | **Cinzel** | 600 | Logo wordmark only |

(Elementor pulls these from Google Fonts automatically — no upload needed.)

### 1c. Typography scale  (Site Settings → Typography)
Matches the CSS `clamp()` sizes:
- **H1** Playfair 700, ~2.6–4rem, line-height 1.15, letter-spacing −0.02em
- **H2** Playfair 700, ~2–2.8rem, line-height 1.2
- **H3** Playfair 600, ~1.3–1.6rem
- **Body** Inter 400, 1rem, line-height 1.7, colour `#111111`

### 1d. Buttons  (Site Settings → Buttons)
- Background **Black `#1A1A1A`**, Text **White**, Typography Inter 600, Padding 14×36, Radius 4px
- Hover: Background `#333333`
- (On dark sections, override a button's background to **Light Silver `#B9BEC5`** with **Black** text so it stays visible — see §2 pattern.)

### 1e. Layout  (Site Settings → Layout)
- Content width **1200px**, Widgets space 0, default section padding via each section.

---

## 2. Reusable design patterns (build once, copy everywhere)

These recur on every page. Build them once, then right-click → **Copy** / **Paste**, or save as a
**Template** (Elementor → Templates → Saved Templates).

- **Section Label** — Heading widget, Inter 700, 0.8rem, uppercase, letter-spacing 2px, colour **Deep Steel `#4E535A`**, centered.
- **Primary button (light section)** — Button widget, Black bg / White text (global default).
- **Primary button (dark section)** — Button widget, **Light Silver `#B9BEC5`** bg / **Black** text.
- **Card** — Inner Section or Container: White bg, radius 12px, box-shadow `0 8px 30px rgba(0,0,0,0.08)`, 1px border `rgba(35,35,35,0.04)`; hover lift (Motion Effects → translateY −6px).
- **Icon circle** — Icon Box / Icon widget: 64×64, Black `#1A1A1A` circle, **Silver `#7E858E`** icon.
- **Page banner (inner pages)** — Section: min-height ~320px, background = the page image (below)
  with a **black overlay** (Background → Overlay → Classic → Black, opacity ~85%). White heading,
  centered, top padding ~140px to clear the fixed header.

---

## 3. Header & Footer (Astra Customizer — no Elementor Pro needed)

**Appearance → Customize → Header Builder:**
- **Logo:** upload the ALVA logo (see §6). Or, to reproduce the CSS wordmark, use a Custom HTML/
  Heading with "ALVA" in Cinzel 600, letter-spacing 0.22em, a grey→black gradient, and a small
  "Partners" in Inter caps `#565B62`.
- **Primary Menu:** create a WordPress Menu (Appearance → Menus): Home, About, Services,
  Renewable Energy, Projects, News, Contact. Place it right-aligned.
- **"Contact" as a button:** give the Contact menu item a black button style (Astra menu → last item
  as button, or a CSS class).
- Sticky header: Astra → Header → Sticky (mimics the fixed, blurred header).

**Appearance → Customize → Footer Builder:** dark background `#151515`, four columns
(Brand+address / Quick Links / Products / Company), white headings, silver social icons.
Rebuild from the coded footer.

---

## 4. Page-by-page section map

For each page: create Pages → Add New → **Edit with Elementor** → set page layout to
**Elementor Full Width / Canvas** (Astra: disable title/sidebar). Then build the sections top-down.
Copy exact wording and images from the matching HTML file.

### `index.html` → **Home**
1. **Hero** — Section, Black bg, 2 columns. Left: eyebrow badge (Icon + text), H1 ("Trusted Business
   Solutions…" with the silver span), paragraph, two buttons (silver primary + white outline).
   Right: Image `images/hero-solar.jpg` (radius 12).
2. **Trust bar** — Off-white section, Heading "Trusted by Leading Organizations", an Icon-List /
   row of Icon+text items (NSITF, TETFund, Lekki Port, Oak Homes, NASENI, REA).
3. **Two Pillars** — Section-label + H2 + intro; 2-column cards (Icon circle, tag, H3, text, Icon
   List of checks). Use the Card pattern.
4. **Featured Products** — Section-label + H2 + intro; 4-column grid of product cards
   (Image + H4 + text + button). Images: `product-street-light / -garden-light / -flood-light / -wall-light`.
5. **News teaser** — 2-column: featured card + list of 3.
6. **CTA** — Black section, H2, text, silver button.

### `about.html` → **About**
Banner (`about-header.jpg`) → Intro (text + `pillars-business.jpg`) → Mission/Vision cards →
Core Values grid → Board (Icon-box grid, initials/placeholder) → Key Personnel → Certifications → CTA.

### `services.html` → **Services**
Banner (`services-header.jpg`) → Services grid (Icon-box × 6, keep the icons) → Process steps
(numbered) → CTA.

### `solar.html` → **Renewable Energy** *(this is the merged products page)*
Banner (`solar-header.jpg`) → Partnership banner → **Product catalogue** (Advanced Tabs from
Essential Addons for the category filter, or a plain 3-col grid) of 6 products with
`product-*` / `pillars-solar` images → **Benefits** (4 icon-boxes) → **Request a Quote**
(Fluent Form, see §5, 2-col with contact info) → CTA.

### `portfolio.html` → **Projects**
Banner (`portfolio-header.jpg`) → filter row → Projects grid (cards with the themed images) → CTA.

### `news.html` → **News**
Banner (`news-header.jpg`) → **Post Grid** (Essential Addons) pulling real WordPress **Posts**
(see §7) → newsletter signup (Fluent Form) → CTA.

### `contact-us.html` → **Contact**
Banner (`contact-header.jpg`) → 2-col: **Fluent Form** + info cards (address/phone/email/hours) →
**Google Maps** widget (free, built-in) set to the Gwarinpa, Abuja address → CTA.

---

## 5. Forms (Fluent Forms — free)

Elementor Free has no form widget, so:
1. **Fluent Forms → New Form.** Build **Contact** (Name, Email, Phone, Subject dropdown, Message)
   and **Quote** (Name, Email, Phone, Product dropdown, Quantity, Message).
2. Set **notification email** to the business inbox (replaces Web3Forms — no access key needed;
   WordPress emails directly, ideally with an SMTP plugin like *FluentSMTP* free for deliverability).
3. Copy each form's **shortcode** → in Elementor drop a **Shortcode** widget and paste it.
> This replaces the Web3Forms setup entirely once on WordPress.

---

## 6. Assets to upload (Media Library)

From this repo's `images/` folder — upload all and reuse:
`hero-solar, about-header, services-header, solar-header, portfolio-header, news-header,
contact-header, pillars-business, pillars-solar, business-meeting, product-street-light,
product-garden-light, product-flood-light, product-wall-light, product-rooftop, product-panel,
store-header`. Plus the **logo** file (once finalized) for the header.

---

## 7. News as real Posts (so it's editable/growable)

- **Posts → Add New** for each article (the current news items become your first posts). Add a
  Featured Image (use `business-meeting`, `pillars-solar`, `product-rooftop`, etc.).
- On the News page, the **Post Grid** widget (Essential Addons) displays them automatically — new
  posts appear with no page edits. This is the big win of going WordPress.

---

## 8. Free-tier limitations & workarounds

| Pro feature | Free workaround |
|-------------|-----------------|
| Theme Builder (header/footer) | **Astra** Customizer header/footer |
| Form widget | **Fluent Forms** + Shortcode widget |
| Posts / Loop Grid | **Essential Addons Post Grid** |
| Nav Menu widget | Astra native menu (or HFE plugin) |
| Tabs filter | Elementor **Tabs** (free) or EA **Advanced Tabs** |
| Sticky header | Astra sticky header setting |

---

## 9. Brand quick-reference (paste into Global settings)

```
Black (primary)        #1A1A1A
Body text              #111111
Steel (secondary)      #565B62
Silver-steel (accent)  #7E858E
Light silver           #B9BEC5
Deep steel (labels)    #4E535A
Off-white              #F4F5F6
White                  #FFFFFF
Footer / deepest       #151515

Fonts:  Playfair Display (headings) · Inter (body/UI) · Cinzel (logo)
Radius: 4px buttons · 8–12px cards   Content width: 1200px
Shadow: 0 8px 30px rgba(0,0,0,0.08)
```

---

### Build order (fastest path)
1. Install WordPress → Astra → Elementor → Essential Addons → Fluent Forms.
2. Site Settings: Global Colours, Fonts, Typography, Buttons (§1).
3. Astra header + footer (§3).
4. Build the reusable patterns as Saved Templates (§2).
5. Home page, then inner pages (§4).
6. Forms (§5) and News posts (§7).
7. Review responsiveness (Elementor's device preview) against the coded site.
