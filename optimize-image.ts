import sharp from 'sharp'
import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const inputPath = 'C:\\Users\\HP\\Downloads\\ca00101f-774d-4676-afd0-4344cb3c9f15_1-removebg-preview.png'
const outputDir = join(process.cwd(), 'public', 'images')
const outputPath = join(outputDir, 'photo.webp')
const outputPathJpg = join(outputDir, 'photo.jpg')

async function optimizeImage() {
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true })
  }

  // Create WebP version (modern format, smaller size)
  await sharp(inputPath)
    .resize(800, null, {
      withoutEnlargement: true,
      fit: 'inside'
    })
    .webp({ quality: 85 })
    .toFile(outputPath)

  // Create JPG fallback
  await sharp(inputPath)
    .resize(800, null, {
      withoutEnlargement: true,
      fit: 'inside'
    })
    .jpeg({ quality: 85, progressive: true })
    .toFile(outputPathJpg)

  // Get file sizes
  const { size: webpSize } = await sharp(outputPath).metadata()
  const { size: jpgSize } = await sharp(outputPathJpg).metadata()

  console.log(`WebP: ${(webpSize / 1024).toFixed(1)}KB`)
  console.log(`JPG: ${(jpgSize / 1024).toFixed(1)}KB`)
}

optimizeImage().catch(console.error)