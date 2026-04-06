// scripts/generate-og.mjs
import sharp from 'sharp';

const icon = await sharp('public/assets/appicon.png').resize(300, 300).toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: { r: 17, g: 24, b: 39, alpha: 1 }
  }
})
  .composite([{ input: icon, gravity: 'centre' }])
  .png()
  .toFile('public/assets/og-image.png');

console.log('og-image.png created at public/assets/og-image.png');
