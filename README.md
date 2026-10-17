# bellaLily.github.io

## Shoe catalog

To add models to the homepage slideshow:

1. Add each shoe photo (`.jpg`, `.jpeg`, `.png`, `.webp`, or `.avif`) to `public/katalog/fotograflar/`.
2. Add each exact filename to the JSON array in `public/katalog/catalog.json`, for example:

   ```json
   ["Bella-01.jpg", "Bella-02.webp"]
   ```

The slideshow displays each filename without its extension as the model name. You can also use externally hosted images by adding an object with a model name and an HTTPS image URL:

```json
[
  "Bella-01.jpg",
  {
    "name": "Bella-02",
    "color": "Pink",
    "image": "https://onedrive.live.com/embed?resid=YOUR_FILE_ID&authkey=YOUR_SHARE_KEY"
  }
]
```

Add an optional `color` value to show the shoe color alongside its model name; string filename entries can still be used when no color is needed. For Google Drive, allow anyone with the link to view the image. Standard file links such as `https://drive.google.com/file/d/FILE_ID/view` are converted to a 1200-pixel thumbnail URL by the catalog so the photo loads as an image rather than as a Drive preview page. For OneDrive, use a direct/embed image URL that displays the image itself; a normal sharing link may open a OneDrive page instead. Include `name` because hosted image URLs do not always contain the original filename. Deploy the site after updating the catalog; externally hosted images remain on their host.

## Information pages

The information pages are published as HTML files in `public/sayfalar/`; their Markdown content is stored alongside them and rendered with shared styling and navigation. The site is intended for wholesale inquiries from stores, resellers, and distributors, not individual retail purchases. Current terms state a 96-pair minimum order and a typical 15–20-business-day preparation period after payment confirmation; final order, payment, and shipping details belong in the written quote/order confirmation.

Review the wholesale terms and no-general-returns policy against the business's actual practices and applicable law before publishing. Privacy, KVKK, and cookie notices should likewise match the data and technologies actually used.