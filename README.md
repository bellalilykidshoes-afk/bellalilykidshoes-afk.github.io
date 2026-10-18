# bellaLily.github.io

## Shoe catalog

The featured hero image on the homepage is `public/new-model.jpg`. Replace this file with the new model picture when updating the featured model; keep the same filename so the homepage image path does not need to change.

The homepage has separate `Yazlık`, `Kışlık`, and `Okulluk` catalogs. Add models to the matching season in `public/katalog/catalog.json`. Each model can have any number of color options; the carousel displays numbered selectors for the options on the selected model.

1. Add each shoe photo (`.jpg`, `.jpeg`, `.png`, `.webp`, or `.avif`) to `public/katalog/fotograflar/`, or use an HTTPS image URL.
2. Add a model object to the relevant season list:

   ```json
   {
     "name": "Bella-01",
     "options": [
       { "color": "Pembe", "image": "Bella-01-pembe.jpg" },
       { "color": "Beyaz", "image": "Bella-01-beyaz.jpg" },
       { "color": "Siyah", "image": "https://example.com/bella-01-siyah.jpg" }
     ]
   }
   ```

The `options` array controls how many numbered color selectors are shown. Each option needs an `image`; `color` is optional and is shown in the model details. For a model with only one image, the existing `{ "name": "Bella-02", "color": "Pembe", "image": "Bella-02.jpg" }` format is also supported. Filename-only entries such as `"Bella-03.jpg"` remain supported. The older top-level JSON array format is still accepted and is treated as the `Yazlık` catalog.

For Google Drive, allow anyone with the link to view the image. Standard file links such as `https://drive.google.com/file/d/FILE_ID/view` are converted to a 1200-pixel thumbnail URL so the photo loads as an image rather than as a Drive preview page. For other hosts, use a direct/embed image URL that displays the image itself; a normal sharing link may open a preview page instead. Include `name` because hosted image URLs do not always contain the original filename. Deploy the site after updating the catalog; externally hosted images remain on their host.

## Information pages

The information pages are published as HTML files in `public/sayfalar/`; their Markdown content is stored alongside them and rendered with shared styling and navigation. The site is intended for wholesale inquiries from stores, resellers, and distributors, not individual retail purchases. Current terms state a 96-pair minimum order and a typical 15–20-business-day preparation period after payment confirmation; final order, payment, and shipping details belong in the written quote/order confirmation.

Review the wholesale terms and no-general-returns policy against the business's actual practices and applicable law before publishing. Privacy, KVKK, and cookie notices should likewise match the data and technologies actually used.