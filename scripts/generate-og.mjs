// scripts/generate-og.mjs
// Run: node scripts/generate-og.mjs
import sharp from 'sharp';

const icon = await sharp('public/assets/appicon.png').resize(300, 300).toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: { r: 0, g: 168, b: 120, alpha: 1 }  // #00A878 brand green
  }
})
  .composite([{ input: icon, gravity: 'centre' }])
  .png()
  .toFile('public/assets/og-image.png');

console.log('og-image.png created');
