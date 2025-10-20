# Required Icons and Images for Social Media Previews

To get proper WhatsApp, Instagram, and social media previews, you need to add the following images to the `/public` folder:

## Required Images:

### 1. Open Graph Image (WhatsApp/Instagram/Facebook Preview)
- **Filename**: `og-image.jpg`
- **Size**: 1200x630 pixels
- **Format**: JPG or PNG
- **Content**: Should show your brand logo, a beautiful property image, and text like "PRESTIGE - UAE Real Estate"

### 2. Favicon
- **Filename**: `favicon.ico`
- **Size**: 32x32 pixels (or multi-size ICO)
- **Format**: ICO
- **Content**: Your brand logo/icon

### 3. App Icons
- **icon.png**: 32x32 pixels - Small icon
- **icon-192.png**: 192x192 pixels - Android icon
- **icon-512.png**: 512x512 pixels - Android splash icon
- **apple-icon.png**: 180x180 pixels - iOS icon

## How to Create These Images:

### Option 1: Use a Design Tool
1. Open Canva, Figma, or Photoshop
2. Create a 1200x630 canvas for OG image
3. Add your logo, a nice property photo, and text
4. Export as JPG

### Option 2: Use an Online Generator
- https://www.opengraph.xyz/ - OG Image Generator
- https://realfavicongenerator.net/ - Favicon Generator
- https://favicon.io/ - Simple Favicon Generator

## Quick Fix (Temporary):
For now, the site will work but show a generic preview. Replace these files ASAP for better social media engagement.

## Current Status:
- ❌ og-image.jpg - NOT CREATED (WhatsApp/Instagram will show generic preview)
- ✅ manifest.json - Created
- ❌ All icon files - NOT CREATED (will show default browser icon)

## After Adding Images:
1. Place all images in `/public` folder
2. Commit and push to GitHub
3. Cloudflare will deploy automatically
4. Test by sharing the link on WhatsApp/Instagram
