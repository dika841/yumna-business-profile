# PRD — Yumna Makeup

> Product Requirements Document

**Product Name:** Yumna Makeup
**Product Type:** Business Profile & Marketing Website
**Business Category:** Makeup Artist (MUA)
**Primary Location:** Kota Bandung, Jawa Barat
**Primary Goal:** Brand awareness, portfolio showcase, local SEO, dan lead generation melalui WhatsApp
**Framework:** TanStack Start
**Language:** Bahasa Indonesia
**Rendering:** SSR + Static Prerendering bila memungkinkan
**Status:** MVP

---

## 1. Product Overview

Yumna Makeup adalah website resmi untuk memperkenalkan layanan Makeup Artist (MUA) kepada calon pelanggan di wilayah Kota Bandung.

Website berfungsi sebagai:

- Business profile
- Digital portfolio
- Service showcase
- Brand presentation
- Local SEO landing page
- Lead generation channel

Website **tidak menyediakan sistem booking internal**.

Seluruh proses konsultasi dan booking akan diarahkan ke WhatsApp.

### Primary CTA

> Booking via WhatsApp

### Secondary CTA

> Lihat Portfolio

---

# 2. Product Goals

## 2.1 Brand Awareness

Meningkatkan awareness terhadap Yumna Makeup sebagai MUA yang melayani wilayah Kota Bandung.

## 2.2 Portfolio Showcase

Menampilkan hasil makeup secara visual agar calon customer dapat memahami style dan kualitas makeup Yumna Makeup.

## 2.3 Lead Generation

Mengubah pengunjung website menjadi calon customer melalui WhatsApp.

## 2.4 Local SEO

Meningkatkan kemungkinan website ditemukan pada pencarian lokal seperti:

- MUA Bandung
- Makeup Artist Bandung
- MUA Kota Bandung
- Jasa Makeup Bandung
- MUA Wedding Bandung
- MUA Wisuda Bandung
- MUA Engagement Bandung

## 2.5 Trust

Memberikan informasi yang cukup mengenai:

- Yumna Makeup
- Layanan
- Portfolio
- Area layanan
- FAQ
- Testimonial
- Cara booking

sehingga calon customer memiliki informasi sebelum menghubungi WhatsApp.

---

# 3. Target Audience

## Primary Audience

Wanita usia sekitar 18–35 tahun yang berada atau memiliki kebutuhan makeup di Kota Bandung.

## Customer Use Cases

Yumna Makeup dapat digunakan untuk kebutuhan:

- Wedding
- Engagement
- Lamaran
- Wisuda
- Bridesmaid
- Party
- Photoshoot
- Event
- Acara formal
- Momen spesial lainnya

---

# 4. Service Area

Untuk tahap awal, Yumna Makeup hanya melayani:

> **Kota Bandung, Jawa Barat**

Website harus menyampaikan batas area layanan dengan jelas.

Contoh:

> Yumna Makeup saat ini fokus melayani kebutuhan makeup di wilayah Kota Bandung.

Jangan mengklaim melayani wilayah di luar Kota Bandung apabila layanan tersebut belum tersedia.

---

# 5. User Journey

```text
Google / Social Media / Direct Visit
              │
              ▼
       Yumna Makeup
          Website
              │
              ▼
            Hero
              │
              ▼
          Portfolio
              │
              ▼
           Services
              │
              ▼
         About / Trust
              │
              ▼
         Testimonials
              │
              ▼
             FAQ
              │
              ▼
        WhatsApp CTA
              │
              ▼
          WhatsApp
              │
              ▼
       Consultation
              │
              ▼
           Booking
```

Website tidak menangani proses booking secara internal.

---

# 6. Information Architecture

Struktur website:

```text
/
├── /about
├── /services
├── /portfolio
├── /faq
├── /contact
│
├── /robots.txt
├── /sitemap.xml
├── /llms.txt
└── /llms-full.txt
```

Untuk MVP, homepage tetap menjadi halaman utama yang menggabungkan sebagian besar informasi.

---

# 7. Homepage Structure

Homepage terdiri dari:

```text
Home
│
├── Header
├── Hero
├── About
├── Services
├── Portfolio
├── Why Yumna Makeup
├── Testimonials
├── FAQ
├── Service Area
├── Contact CTA
└── Footer
```

---

# 8. Header

Header harus menyediakan navigasi utama.

## Desktop

```text
YUMNA MAKEUP

Home
About
Services
Portfolio
FAQ

[ Booking via WhatsApp ]
```

## Mobile

```text
YUMNA MAKEUP                         ☰
```

### Requirements

Header harus:

- Responsive
- Accessible
- Keyboard navigable
- Menggunakan semantic HTML
- Menggunakan `<header>`
- Menggunakan `<nav>`
- Menggunakan `<ul>` dan `<li>` untuk navigation list
- Menggunakan `<a>` untuk navigation
- Menggunakan `<button>` untuk interactive controls

---

# 9. Hero Section

Hero merupakan section utama yang harus menjelaskan bisnis dalam beberapa detik pertama.

## Objective

User harus langsung memahami:

1. Yumna Makeup adalah MUA
2. Yumna Makeup berada di Bandung
3. Layanan dapat digunakan untuk berbagai acara
4. Booking dilakukan melalui WhatsApp

## Suggested Content

```text
MAKEUP ARTIST BANDUNG

Tampil Cantik dengan Makeup
yang Elegan dan Personal

Yumna Makeup menghadirkan layanan makeup
untuk wedding, engagement, wisuda,
dan berbagai momen spesial di Kota Bandung.

[ Booking via WhatsApp ]
[ Lihat Portfolio ]
```

## SEO Requirement

Homepage hanya memiliki satu `<h1>`.

Contoh:

```html
<h1>Makeup Artist Bandung untuk Momen Spesial Anda</h1>
```

Nama brand dapat tetap ditampilkan sebagai logo atau text branding tanpa menjadikan seluruh halaman memiliki beberapa `<h1>`.

---

# 10. About Section

Section menjelaskan siapa Yumna Makeup.

## Suggested Content

```text
Tentang Yumna Makeup

Yumna Makeup adalah makeup artist yang berbasis
di Kota Bandung dan melayani berbagai kebutuhan
makeup untuk momen spesial Anda.
```

## Value Proposition

### Personal

Makeup disesuaikan dengan karakter, fitur wajah, dan kebutuhan setiap customer.

### Professional

Mengutamakan ketelitian, kebersihan, kenyamanan, dan proses makeup yang profesional.

### Bandung Based

Fokus melayani kebutuhan makeup di wilayah Kota Bandung.

---

# 11. Services Section

Services menampilkan jenis layanan utama.

## Wedding Makeup

Makeup untuk kebutuhan pengantin pada hari pernikahan.

## Engagement Makeup

Makeup untuk acara lamaran dan engagement.

## Graduation Makeup

Makeup untuk wisuda dan graduation.

## Party & Event Makeup

Makeup untuk party, photoshoot, event, dan kebutuhan lainnya.

Setiap service dapat memiliki:

- Image
- Title
- Description
- CTA

CTA:

> Konsultasikan via WhatsApp

---

# 12. Portfolio Section

Portfolio merupakan salah satu bagian terpenting dari website.

Karena bisnis MUA sangat bergantung pada visual, portfolio harus memiliki visual prominence yang tinggi.

## Portfolio Categories

```text
All
Wedding
Engagement
Graduation
Party
```

## Gallery

Recommended layout:

```text
┌──────────┬──────────┬──────────┐
│          │          │          │
│   IMG    │   IMG    │   IMG    │
│          │          │          │
├──────────┤          ├──────────┤
│          │          │          │
│   IMG    │          │   IMG    │
│          │          │          │
└──────────┴──────────┴──────────┘
```

Portfolio harus responsive dan mobile-first.

## Image Requirements

Setiap image harus memiliki descriptive `alt`.

Contoh:

```html
<img
  src="/images/portfolio/bridal-01.webp"
  alt="Bridal makeup oleh Yumna Makeup di Bandung"
  width="..."
  height="..."
  loading="lazy"
/>
```

Hindari:

```html
alt="image1"
```

atau:

```html
alt="IMG_1234"
```

---

# 13. Why Yumna Makeup

Section untuk memperkuat value proposition.

Contoh:

```text
Kenapa Yumna Makeup?

01
Personalized Makeup

Makeup disesuaikan dengan kebutuhan
dan karakter setiap customer.

02
Professional

Mengutamakan ketelitian, kebersihan,
dan kenyamanan.

03
Beragam Kebutuhan

Wedding, engagement, wisuda,
party, photoshoot, dan event.

04
Bandung Based

Fokus melayani customer
di wilayah Kota Bandung.
```

Hindari klaim yang tidak dapat diverifikasi seperti:

- MUA terbaik di Bandung
- Nomor satu di Bandung
- MUA paling populer
- MUA termurah

kecuali terdapat bukti yang mendukung klaim tersebut.

---

# 14. Testimonials

Testimonials digunakan untuk meningkatkan trust.

Contoh:

```text
What Our Clients Say

"Review customer."

— Nama Customer
Wedding Client
```

Testimonials production harus berasal dari customer sebenarnya.

Jangan membuat review fiktif.

---

# 15. FAQ

FAQ membantu customer sekaligus memberikan konten yang dapat dipahami search engine dan AI crawler.

## FAQ 1

### Apakah Yumna Makeup melayani di luar Bandung?

Untuk saat ini Yumna Makeup fokus melayani customer di wilayah Kota Bandung.

## FAQ 2

### Bagaimana cara melakukan booking?

Booking dilakukan melalui WhatsApp. Customer dapat melakukan konsultasi mengenai tanggal, layanan, kebutuhan makeup, dan informasi lainnya.

## FAQ 3

### Apakah bisa request makeup look?

Customer dapat mendiskusikan makeup look yang diinginkan melalui WhatsApp.

## FAQ 4

### Apakah tersedia makeup untuk wisuda?

Yumna Makeup menyediakan layanan makeup untuk kebutuhan wisuda.

## FAQ 5

### Bagaimana cara mengetahui harga makeup?

Silakan menghubungi WhatsApp Yumna Makeup untuk mendapatkan informasi harga dan detail layanan terbaru.

---

# 16. Service Area Section

Section khusus untuk Local SEO.

```text
Area Layanan

Yumna Makeup saat ini melayani
customer di wilayah Kota Bandung.

Bandung, Jawa Barat
```

Jika seluruh kecamatan Kota Bandung memang dilayani, daftar kecamatan dapat ditambahkan.

Namun jangan menampilkan area yang sebenarnya tidak dilayani.

---

# 17. Contact CTA

CTA utama website:

```text
Siap Tampil Cantik di Momen Spesial Anda?

Konsultasikan kebutuhan makeup Anda
bersama Yumna Makeup.

[ Booking via WhatsApp ]
```

CTA harus muncul di beberapa lokasi strategis:

- Header
- Hero
- Services
- Portfolio
- Footer / final CTA

---

# 18. WhatsApp Booking

Website tidak memiliki booking system.

Flow:

```text
User
 │
 ▼
Click "Booking via WhatsApp"
 │
 ▼
WhatsApp
 │
 ▼
Consultation
 │
 ├── Date
 ├── Service
 ├── Location
 ├── Makeup Style
 └── Other Requirements
 │
 ▼
Booking
```

## WhatsApp URL

Format:

```text
https://wa.me/{PHONE_NUMBER}?text={ENCODED_MESSAGE}
```

Contoh pesan:

```text
Halo Yumna Makeup,

Saya ingin konsultasi mengenai layanan makeup.

Nama:
Tanggal acara:
Jenis acara:
Lokasi:
Layanan yang diinginkan:

Terima kasih.
```

Nomor WhatsApp harus disimpan pada centralized configuration.

---

# 19. Technical Architecture

## Core Stack

```text
TanStack Start
React
TypeScript
TanStack Router
Tailwind CSS
shadcn/ui
```

## Rendering

Gunakan:

```text
SSR
+
Static Prerendering
```

jika deployment environment mendukung.

Architecture:

```text
Browser
   │
   ▼
TanStack Start
   │
   ├── SSR
   │
   ├── Metadata
   │
   ├── JSON-LD
   │
   └── HTML
        │
        ▼
      Browser
        │
        ▼
     Hydration
```

Website marketing tidak membutuhkan client-side rendering sebagai mekanisme utama.

---

# 20. SSR Requirements

SSR digunakan agar:

- Search engine mendapatkan HTML content
- AI crawler mendapatkan content langsung
- Metadata tersedia sejak initial response
- First Contentful Paint lebih baik
- Social crawler dapat membaca metadata
- Content dapat di-index dengan lebih reliable

Hindari menjadikan seluruh homepage sebagai:

```tsx
"use client";
```

Client-side component hanya digunakan jika memang membutuhkan interactivity.

Contohnya:

- Mobile menu
- Portfolio filter
- Lightbox
- Accordion
- Animation tertentu

Content utama harus tetap dapat dirender server-side.

---

# 21. Static Prerendering

Karena sebagian besar content Yumna Makeup bersifat statis, gunakan prerendering apabila deployment memungkinkan.

Target:

```text
/
 /about
 /services
 /portfolio
 /faq
 /contact
```

dapat disajikan sebagai HTML yang sudah tersedia sebelum JavaScript melakukan hydration.

---

# 22. SEO Strategy

SEO dibagi menjadi:

```text
Technical SEO
Local SEO
On-Page SEO
Image SEO
Structured Data
Entity SEO
GEO / AI Discoverability
```

---

# 23. Primary Keywords

Primary:

```text
MUA Bandung
Makeup Artist Bandung
MUA Kota Bandung
Makeup Artist Kota Bandung
Jasa Makeup Bandung
```

Secondary:

```text
MUA Wedding Bandung
MUA Wisuda Bandung
MUA Engagement Bandung
MUA Party Bandung
Makeup Artist Wedding Bandung
```

Long-tail:

```text
MUA untuk wedding di Bandung
MUA wisuda Bandung
Makeup Artist engagement Bandung
Jasa makeup wedding Bandung
MUA Bandung untuk acara wisuda
```

Keyword harus digunakan secara natural.

Jangan melakukan keyword stuffing.

---

# 24. Metadata

## Homepage

### Title

```text
Yumna Makeup | Makeup Artist Bandung
```

### Description

```text
Yumna Makeup adalah makeup artist di Kota Bandung yang
melayani wedding, engagement, wisuda, party, dan berbagai
momen spesial. Konsultasi dan booking melalui WhatsApp.
```

### Canonical

```text
https://yumnamakeup.com/
```

## Open Graph

Required:

```text
og:title
og:description
og:image
og:url
og:type
og:locale
og:site_name
```

## Twitter / X

Required:

```text
twitter:card
twitter:title
twitter:description
twitter:image
```

---

# 25. Page Metadata

## About

```text
Title:
Tentang Yumna Makeup | MUA Bandung

Description:
Kenali Yumna Makeup, makeup artist yang berbasis
di Kota Bandung dan melayani berbagai kebutuhan makeup.
```

## Services

```text
Title:
Layanan Makeup | Yumna Makeup Bandung

Description:
Lihat layanan makeup Yumna Makeup untuk wedding,
engagement, wisuda, party, dan berbagai acara di Bandung.
```

## Portfolio

```text
Title:
Portfolio Makeup | Yumna Makeup Bandung

Description:
Lihat portfolio hasil makeup Yumna Makeup untuk
wedding, engagement, wisuda, dan berbagai acara.
```

## FAQ

```text
Title:
FAQ | Yumna Makeup Bandung

Description:
Pertanyaan yang sering ditanyakan mengenai layanan
makeup Yumna Makeup di Kota Bandung.
```

## Contact

```text
Title:
Contact | Yumna Makeup Bandung

Description:
Hubungi Yumna Makeup melalui WhatsApp untuk konsultasi
dan booking layanan makeup di Kota Bandung.
```

---

# 26. Structured Data

Gunakan JSON-LD.

Recommended schema:

```text
Organization
LocalBusiness / BeautySalon
WebSite
WebPage
Service
BreadcrumbList
FAQPage
```

Contoh:

```json
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Yumna Makeup",
  "url": "https://yumnamakeup.com/",
  "areaServed": {
    "@type": "City",
    "name": "Bandung"
  }
}
```

Data harus sesuai dengan informasi sebenarnya.

Jangan memasukkan:

- Fake rating
- Fake review
- Fake price
- Fake address
- Fake opening hours
- Fake awards

---

# 27. Entity Information

Website harus memiliki informasi entity yang konsisten:

```text
Brand:
Yumna Makeup

Business Type:
Makeup Artist

Location:
Bandung, Jawa Barat

Service Area:
Kota Bandung

Primary Services:
Wedding Makeup
Engagement Makeup
Graduation Makeup
Party & Event Makeup

Booking:
WhatsApp
```

Informasi yang sama harus digunakan secara konsisten pada:

- Website
- JSON-LD
- Google Business Profile jika tersedia
- Social Media
- `llms.txt`
- `llms-full.txt`

---

# 28. robots.txt

File:

```text
/public/robots.txt
```

Content:

```txt
User-agent: *
Allow: /

Sitemap: https://yumnamakeup.com/sitemap.xml
```

Tujuan:

- Mengizinkan crawler
- Memberikan lokasi sitemap
- Tidak memblokir AI/search crawler secara default

---

# 29. Sitemap

File:

```text
/sitemap.xml
```

Target URL:

```text
https://yumnamakeup.com/
https://yumnamakeup.com/about
https://yumnamakeup.com/services
https://yumnamakeup.com/portfolio
https://yumnamakeup.com/faq
https://yumnamakeup.com/contact
```

Jangan memasukkan:

- URL 404
- URL private
- URL duplicate
- URL yang tidak canonical

---

# 30. llms.txt

File:

```text
/llms.txt
```

Content:

```txt
# Yumna Makeup

> Yumna Makeup adalah makeup artist yang berbasis di Kota Bandung, Jawa Barat.

## Business

- Name: Yumna Makeup
- Category: Makeup Artist
- Location: Bandung, Jawa Barat
- Service Area: Kota Bandung

## Services

- Wedding Makeup
- Engagement Makeup
- Graduation Makeup
- Party & Event Makeup

## Booking

Booking dan konsultasi dilakukan melalui WhatsApp.

## Website

https://yumnamakeup.com/

## Important

Yumna Makeup saat ini fokus melayani customer
di wilayah Kota Bandung.
```

---

# 31. llms-full.txt

File:

```text
/llms-full.txt
```

Content harus menyediakan informasi bisnis yang lebih lengkap.

```txt
# Yumna Makeup — Business Information

## About

Yumna Makeup adalah makeup artist yang berbasis
di Kota Bandung, Jawa Barat.

Yumna Makeup menyediakan layanan makeup untuk
berbagai kebutuhan dan momen spesial.

## Service Area

Yumna Makeup saat ini fokus melayani customer
di Kota Bandung.

## Services

### Wedding Makeup

Layanan makeup untuk kebutuhan wedding.

### Engagement Makeup

Layanan makeup untuk acara engagement dan lamaran.

### Graduation Makeup

Layanan makeup untuk acara wisuda.

### Party & Event Makeup

Layanan makeup untuk party, photoshoot,
event, dan kebutuhan lainnya.

## Booking

Yumna Makeup tidak menggunakan sistem booking
langsung melalui website.

Customer diarahkan ke WhatsApp untuk:

- Konsultasi
- Mengecek ketersediaan
- Memilih layanan
- Mendapatkan informasi harga
- Melakukan booking

## Official Website

https://yumnamakeup.com/

## Service Location

Bandung, Jawa Barat, Indonesia.
```

---

# 32. AI Crawler / GEO Strategy

Tujuan GEO adalah membuat informasi Yumna Makeup mudah dipahami oleh search engine dan AI systems.

Gunakan:

```text
Semantic HTML
        +
SSR
        +
Structured Data
        +
robots.txt
        +
sitemap.xml
        +
llms.txt
        +
llms-full.txt
        +
Clear Entity Information
        +
Consistent Business Information
```

AI crawler tidak perlu diblokir apabila tujuan website adalah discoverability.

Jangan menggunakan:

```text
Disallow: /
```

atau aturan yang secara tidak sengaja memblokir seluruh crawler.

---

# 33. Semantic HTML

Struktur utama:

```html
<body>
  <header>
    <nav>...</nav>
  </header>

  <main>
    <section>
      <header>
        <h1>...</h1>
      </header>
    </section>

    <section>
      <header>
        <h2>...</h2>
      </header>
    </section>

    <section>
      <header>
        <h2>...</h2>
      </header>
    </section>
  </main>

  <footer>...</footer>
</body>
```

Gunakan element berdasarkan semantic meaning.

## Navigation

Gunakan:

```html
<a href="/portfolio"> Portfolio </a>
```

bukan:

```html
<div onClick="{...}">Portfolio</div>
```

## Interactive Element

Gunakan:

```html
<button></button>
```

untuk action.

Gunakan:

```html
<a></a>
```

untuk navigation.

---

# 34. Accessibility

Target:

```text
WCAG 2.2 AA
```

Requirements:

- Keyboard navigation
- Visible focus state
- Proper heading hierarchy
- Semantic HTML
- Accessible forms jika ada
- Descriptive link text
- Descriptive image alt
- Sufficient color contrast
- Accessible mobile navigation
- Accessible dialog/lightbox
- Reduced motion support

---

# 35. Image Strategy

MUA website sangat bergantung pada image quality.

Gunakan:

```text
WebP
AVIF
```

jika memungkinkan.

Directory:

```text
public/
└── images/
    ├── hero/
    ├── portfolio/
    │   ├── wedding/
    │   ├── engagement/
    │   ├── graduation/
    │   └── party/
    ├── services/
    └── branding/
```

Hindari meng-upload foto original berukuran beberapa MB langsung sebagai web asset.

---

# 36. Image SEO

Setiap image harus memiliki:

```text
Descriptive filename
Descriptive alt
Explicit width
Explicit height
Proper compression
Lazy loading
```

Contoh filename:

```text
bridal-makeup-bandung-yumna-makeup.webp
```

bukan:

```text
IMG_20261002_12345.webp
```

Contoh alt:

```text
Bridal makeup Yumna Makeup untuk client di Bandung
```

---

# 37. Performance

Target Core Web Vitals:

```text
LCP < 2.5s
INP < 200ms
CLS < 0.1
```

Prioritas:

1. Hero image optimization
2. Image dimensions
3. Font optimization
4. Minimal JavaScript
5. SSR
6. Static prerendering
7. Lazy loading
8. Avoid unnecessary client components
9. Avoid unnecessary third-party scripts

---

# 38. Client Component Strategy

Default:

```text
Server-rendered
```

Client components hanya digunakan ketika diperlukan.

Contoh:

```text
Mobile Navigation
Portfolio Filter
Image Lightbox
Accordion
Interactive Animation
```

Jangan membuat:

```tsx
"use client";
```

pada seluruh homepage hanya karena satu section membutuhkan interactivity.

---

# 39. Recommended Project Structure

```text
src/
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── mobile-nav.tsx
│   │
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── services.tsx
│   │   ├── portfolio.tsx
│   │   ├── testimonials.tsx
│   │   ├── faq.tsx
│   │   ├── service-area.tsx
│   │   └── contact-cta.tsx
│   │
│   ├── seo/
│   │   ├── json-ld.tsx
│   │   └── seo-head.tsx
│   │
│   └── ui/
│       └── ...
│
├── config/
│   ├── site.ts
│   ├── navigation.ts
│   └── services.ts
│
├── data/
│   ├── portfolio.ts
│   ├── services.ts
│   └── testimonials.ts
│
├── lib/
│   ├── whatsapp.ts
│   ├── seo.ts
│   └── utils.ts
│
├── routes/
│   ├── __root.tsx
│   ├── index.tsx
│   ├── about.tsx
│   ├── services.tsx
│   ├── portfolio.tsx
│   ├── faq.tsx
│   ├── contact.tsx
│   ├── robots[.]txt.ts
│   ├── sitemap[.]xml.ts
│   ├── llms[.]txt.ts
│   └── llms-full[.]txt.ts
│
└── styles/
    └── globals.css
```

---

# 40. Content Architecture

Content tidak boleh tersebar di berbagai component.

Gunakan centralized data.

Contoh:

```ts
export const services = [
  {
    slug: "wedding",
    title: "Wedding Makeup",
    description: "Makeup untuk kebutuhan pengantin pada hari spesial.",
    image: "/images/services/wedding.webp",
  },
  {
    slug: "engagement",
    title: "Engagement Makeup",
    description: "Makeup untuk acara engagement dan lamaran.",
    image: "/images/services/engagement.webp",
  },
];
```

Component hanya bertugas melakukan rendering.

```tsx
{
  services.map((service) => (
    <article key={service.slug}>
      <img src={service.image} alt={service.title} />

      <h3>{service.title}</h3>

      <p>{service.description}</p>
    </article>
  ));
}
```

---

# 41. Site Configuration

Central configuration:

```ts
export const siteConfig = {
  name: "Yumna Makeup",
  description: "Makeup artist di Kota Bandung untuk berbagai momen spesial.",
  url: "https://yumnamakeup.com",
  locale: "id_ID",
  location: "Bandung, Jawa Barat",
  serviceArea: "Kota Bandung",
  whatsapp: "628xxxxxxxxxx",
};
```

Jangan hardcode nomor WhatsApp pada banyak component.

---

# 42. WhatsApp Utility

Gunakan utility:

```ts
export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    message,
  )}`;
}
```

Dengan demikian seluruh CTA menggunakan satu implementation.

---

# 43. Analytics

Recommended:

```text
Google Analytics 4
Google Search Console
```

Track event:

```text
whatsapp_click
portfolio_view
service_view
```

Contoh:

```ts
track("whatsapp_click", {
  location: "hero",
});
```

Location dapat berupa:

```text
header
hero
service
portfolio
footer
```

Tujuannya mengetahui CTA mana yang paling sering menghasilkan interaction.

---

# 44. SEO Monitoring

Setelah deployment:

```text
Google Search Console
        │
        ├── Indexing
        ├── Search Queries
        ├── Impressions
        ├── Clicks
        ├── CTR
        └── Sitemap
```

Monitoring dilakukan secara berkala.

---

# 45. 404 Page

Website harus memiliki custom 404.

```text
Halaman Tidak Ditemukan

Sepertinya halaman yang Anda cari
tidak tersedia.

[ Kembali ke Beranda ]
```

Response HTTP harus benar-benar:

```text
404
```

bukan:

```text
200
```

dengan tampilan halaman error.

---

# 46. Security

Meskipun website tidak memiliki backend kompleks, gunakan security headers.

Recommended:

```text
Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
Strict-Transport-Security
```

CSP harus disesuaikan dengan analytics, fonts, image CDN, dan third-party scripts yang digunakan.

---

# 47. Backend Requirement

Untuk MVP:

```text
Backend API: Tidak diperlukan
Database: Tidak diperlukan
Redis: Tidak diperlukan
RabbitMQ: Tidak diperlukan
Authentication: Tidak diperlukan
Payment Gateway: Tidak diperlukan
Booking Database: Tidak diperlukan
```

Architecture:

```text
TanStack Start
      │
      ├── SSR
      ├── Static Content
      ├── SEO
      └── WhatsApp
```

Website merupakan content-driven marketing website.

---

# 48. Deployment Architecture

```text
                    Internet
                       │
                       ▼
                 CDN / Hosting
                       │
                       ▼
              TanStack Start
                       │
              ┌────────┴────────┐
              │                 │
             SSR          Static Assets
              │                 │
              └────────┬────────┘
                       ▼
                    Browser
                       │
                       ▼
                   WhatsApp
```

Infrastructure tidak perlu kompleks.

---

# 49. MVP Scope

## Must Have

```text
[x] Responsive Design
[x] Homepage
[x] Hero
[x] About
[x] Services
[x] Portfolio
[x] Testimonials
[x] FAQ
[x] Service Area
[x] WhatsApp CTA
[x] SSR
[x] Static Prerendering
[x] SEO Metadata
[x] Open Graph
[x] Canonical
[x] JSON-LD
[x] robots.txt
[x] sitemap.xml
[x] llms.txt
[x] llms-full.txt
[x] Semantic HTML
[x] Accessibility
[x] Image SEO
[x] Custom 404
[x] Google Search Console
```

---

# 50. Nice to Have

```text
[ ] Instagram integration
[ ] Blog
[ ] Google Business Profile integration
[ ] Individual service pages
[ ] Individual portfolio pages
[ ] Advanced portfolio filtering
[ ] Analytics dashboard
[ ] Contact form
[ ] CMS
```

---

# 51. Out of Scope

Untuk MVP tidak diperlukan:

```text
[ ] Authentication
[ ] Customer account
[ ] Admin dashboard
[ ] Internal booking system
[ ] Online payment
[ ] Calendar booking
[ ] Customer database
[ ] PostgreSQL
[ ] Redis
[ ] RabbitMQ
[ ] Backend API
```

---

# 52. Acceptance Criteria

## Business

- [ ] User dapat memahami Yumna Makeup adalah MUA di Bandung.
- [ ] User dapat melihat portfolio.
- [ ] User dapat melihat layanan.
- [ ] User mengetahui area layanan.
- [ ] User dapat mengetahui cara booking.
- [ ] User dapat menghubungi WhatsApp dengan maksimal beberapa klik.

## SEO

- [ ] Unique `<title>` setiap halaman.
- [ ] Meta description tersedia.
- [ ] Canonical tersedia.
- [ ] Open Graph tersedia.
- [ ] JSON-LD tersedia.
- [ ] Sitemap tersedia.
- [ ] robots.txt tersedia.
- [ ] llms.txt tersedia.
- [ ] llms-full.txt tersedia.
- [ ] Heading hierarchy benar.
- [ ] Hanya satu H1 per halaman utama.
- [ ] Image alt tersedia.
- [ ] URL SEO-friendly.

## Technical

- [ ] SSR aktif.
- [ ] Tidak terdapat hydration error.
- [ ] TypeScript strict.
- [ ] Semantic HTML.
- [ ] Responsive.
- [ ] Accessible.
- [ ] Tidak terdapat console error.
- [ ] Images optimized.
- [ ] Client component hanya digunakan jika diperlukan.

## Performance

- [ ] LCP < 2.5s.
- [ ] INP < 200ms.
- [ ] CLS < 0.1.
- [ ] Hero image optimized.
- [ ] Portfolio images optimized.
- [ ] Tidak terdapat JavaScript yang tidak diperlukan.

---

# 53. Recommended Final Architecture

```text
                         YUMNA MAKEUP
                              │
                              ▼
                     TanStack Start
                              │
            ┌─────────────────┼─────────────────┐
            │                 │                 │
            ▼                 ▼                 ▼
           SSR          Static Prerender       SEO
            │                 │                 │
            │                 │          ┌──────┼──────┐
            │                 │          │      │      │
            │                 │        JSON-LD robots sitemap
            │                 │          │
            │                 │        llms.txt
            │                 │
            └─────────────────┼─────────────────┘
                              │
                              ▼
                     Semantic HTML
                              │
                              ▼
                         Web Browser
                              │
                ┌─────────────┴─────────────┐
                │                           │
                ▼                           ▼
           Portfolio                    WhatsApp
                │                           │
                ▼                           ▼
          Brand Awareness             Consultation
                                            │
                                            ▼
                                         Booking
```

---

# 54. Final Product Principle

Yumna Makeup tidak perlu dibuat seperti aplikasi kompleks.

Prinsip MVP:

```text
Beautiful Portfolio
        +
Clear Brand
        +
Local SEO
        +
Fast Website
        +
Trust
        +
Easy WhatsApp Contact
```

Prioritas development:

```text
1. Portfolio
2. Visual Design
3. Local SEO
4. WhatsApp Conversion
5. Performance
6. Accessibility
7. AI / GEO Discoverability
8. Analytics
```

Tujuan akhir website:

> Ketika seseorang di Kota Bandung mencari MUA, menemukan Yumna Makeup, melihat hasil makeup, memahami layanan yang tersedia, merasa yakin, lalu dapat langsung menghubungi Yumna Makeup melalui WhatsApp.
