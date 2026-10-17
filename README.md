# bellaLily.github.io

## Shoe catalog

To add models to the homepage slideshow:

1. Add each shoe photo (`.jpg`, `.jpeg`, `.png`, `.webp`, or `.avif`) to `public/katalog/fotograflar/`.
2. Add each exact filename to the JSON array in `public/katalog/catalog.json`, for example:

   ```json
   ["Bella-01.jpg", "Bella-02.webp"]
   ```

The slideshow displays each filename without its extension as the model name. Deploy the site after adding photos and updating the list.

## Information pages

The formatted information pages are published as HTML files in `public/sayfalar/`. They display the text documents in that folder with shared page styling and navigation; the original `.md` and extensionless text files remain the content sources.