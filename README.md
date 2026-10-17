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
    "image": "https://onedrive.live.com/embed?resid=YOUR_FILE_ID&authkey=YOUR_SHARE_KEY"
  }
]
```

For OneDrive, allow anyone with the link to view the image and use a direct/embed image URL that displays the image itself. A normal sharing link may open a OneDrive page instead of the image. Include `name` because OneDrive image links do not always contain the original filename. Deploy the site after updating the catalog; externally hosted images remain on their host.

## Information pages

The formatted information pages are published as HTML files in `public/sayfalar/`. They display the text documents in that folder with shared page styling and navigation; the original `.md` and extensionless text files remain the content sources.