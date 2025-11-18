const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");

async function optimizeImages() {
  console.log("Starting image optimization...\n");

  // Optimize logo-symbol.png (1.1MB -> ~15KB)
  const logoPath = path.join(publicDir, "logo-symbol.png");
  if (fs.existsSync(logoPath)) {
    const originalSize = fs.statSync(logoPath).size;
    await sharp(logoPath)
      .resize(84, 84) // 2x for retina displays (displayed at 42x42)
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(path.join(publicDir, "logo-symbol-optimized.png"));

    fs.renameSync(
      path.join(publicDir, "logo-symbol-optimized.png"),
      logoPath
    );
    const newSize = fs.statSync(logoPath).size;
    console.log(
      `✓ logo-symbol.png: ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB`
    );
  }

  // Optimize og.png (1.1MB -> ~50KB)
  const ogPath = path.join(publicDir, "og.png");
  if (fs.existsSync(ogPath)) {
    const originalSize = fs.statSync(ogPath).size;
    await sharp(ogPath)
      .resize(1200, 630, { fit: "cover" })
      .png({ quality: 85, compressionLevel: 9 })
      .toFile(path.join(publicDir, "og-optimized.png"));

    fs.renameSync(path.join(publicDir, "og-optimized.png"), ogPath);
    const newSize = fs.statSync(ogPath).size;
    console.log(
      `✓ og.png: ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB`
    );
  }

  // Optimize icon.png (334KB -> ~10KB)
  const iconPath = path.join(publicDir, "icon.png");
  if (fs.existsSync(iconPath)) {
    const originalSize = fs.statSync(iconPath).size;
    await sharp(iconPath)
      .resize(64, 64)
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(path.join(publicDir, "icon-optimized.png"));

    fs.renameSync(path.join(publicDir, "icon-optimized.png"), iconPath);
    const newSize = fs.statSync(iconPath).size;
    console.log(
      `✓ icon.png: ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB`
    );
  }

  // Optimize apple-icon.png
  const appleIconPath = path.join(publicDir, "apple-icon.png");
  if (fs.existsSync(appleIconPath)) {
    const originalSize = fs.statSync(appleIconPath).size;
    await sharp(appleIconPath)
      .resize(180, 180)
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(path.join(publicDir, "apple-icon-optimized.png"));

    fs.renameSync(
      path.join(publicDir, "apple-icon-optimized.png"),
      appleIconPath
    );
    const newSize = fs.statSync(appleIconPath).size;
    console.log(
      `✓ apple-icon.png: ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB`
    );
  }

  console.log("\n✅ Image optimization complete!");
}

optimizeImages().catch(console.error);
