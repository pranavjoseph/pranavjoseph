import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

// Auto-detect deployment environment
const BASE_URL = process.env.NETLIFY ? "https://pranav-dev.netlify.app/" : "https://pranavjoseph.github.io/pranav_dev/";

// List your routes here
const pages = [
  { url: "", changefreq: "monthly", priority: 1.0 },
  { url: "./contact", changefreq: "monthly", priority: 0.8 },
];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: BASE_URL });

  pages.forEach((page) => {
    stream.write(page);
  });

  stream.end();

  const sitemap = await streamToPromise(stream).then((sm) => sm.toString());

  // Save to public/sitemap.xml (Netlify serves from public/ or dist/ folder)
  writeFileSync("./public/sitemap.xml", sitemap);
  console.log(`✅ Sitemap generated at public/sitemap.xml`);
  console.log(`🌐 Using URL: ${BASE_URL}`);
}

generateSitemap().catch(console.error);
