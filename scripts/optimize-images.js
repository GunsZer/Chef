const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const CACHE_DIR = path.join(process.cwd(), '.image-cache');
const QUALITY = 85;

async function getFileHash(filePath) {
  const content = await fs.readFile(filePath);
  return crypto.createHash('md5').update(content).digest('hex');
}

async function getCachedHash(filePath) {
  const cachePath = path.join(CACHE_DIR, path.basename(filePath) + '.hash');
  try {
    return await fs.readFile(cachePath, 'utf-8');
  } catch {
    return null;
  }
}

async function saveCachedHash(filePath, hash) {
  const cachePath = path.join(CACHE_DIR, path.basename(filePath) + '.hash');
  await fs.mkdir(CACHE_DIR, { recursive: true });
  await fs.writeFile(cachePath, hash);
}

async function optimizeImage(inputPath, outputPath) {
  try {
    const currentHash = await getFileHash(inputPath);
    const cachedHash = await getCachedHash(inputPath);

    if (currentHash === cachedHash) {
      console.log(`✓ Skipped (unchanged): ${outputPath}`);
      return;
    }

    await sharp(inputPath)
      .jpeg({ quality: QUALITY, progressive: true })
      .toFile(outputPath);

    await saveCachedHash(inputPath, currentHash);
    console.log(`✓ Optimized: ${outputPath}`);
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error);
  }
}

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
      const outputPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.jpg');
      await optimizeImage(fullPath, outputPath);
    }
  }
}

async function main() {
  try {
    console.log('🔄 Starting image optimization...');
    await processDirectory(IMAGES_DIR);
    console.log('✅ Image optimization complete!');
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

main(); 