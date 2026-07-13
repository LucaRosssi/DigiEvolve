// Genera public/sitemap.xml con una <url> por cada Digimon en Firestore, más la home.
// Se corre ANTES del build (ver "build" en package.json), no en el navegador,
// por eso usa process.env (Node) en vez de import.meta.env (solo existe dentro de Vite).
import 'dotenv/config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { writeFileSync } from 'node:fs';

const firebaseConfig = {
  apiKey: process.env.VITE_API_KEY,
  authDomain: process.env.VITE_AUTH_DOMAIN,
  projectId: process.env.VITE_PROJECT_ID,
  storageBucket: process.env.VITE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_APP_ID,
};

const SITE_URL = 'https://digi-evolve.vercel.app';

async function main() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const snapshot = await getDocs(collection(db, 'digimon'));
  const nombres = snapshot.docs
    .map((doc) => doc.data().nombre)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));

  const today = new Date().toISOString().split('T')[0];

  const urls = [
    `  <url>\n    <loc>${SITE_URL}/</loc>\n    <lastmod>${today}</lastmod>\n  </url>`,
    ...nombres.map(
      (nombre) =>
        `  <url>\n    <loc>${SITE_URL}/${encodeURIComponent(nombre)}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;

  writeFileSync('public/sitemap.xml', xml);
}

main().catch((err) => {
  process.exit(1);
});
