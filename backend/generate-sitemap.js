const fs = require("fs");

const domain = "https://www.vincenttenret.ch";

// Liste de tes pages
const pages = ["", "about", "prices", "blog", "contact"];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${domain}/${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync("../frontend/public/sitemap.xml", sitemapContent);
console.log("✅ Sitemap généré avec succès !");
