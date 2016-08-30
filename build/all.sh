#!/bin/bash -e

# Prefix and compress css into docs/
postcss \
  --use autoprefixer \
  --use postcss-csso \
  style.css -d docs

# Copy all other assets to docs/
npm run copy-assets

# Minify and inline all of the HTML files into docs/
for file in $(ls *.html); do
  npm run build:html -- $file
done;

echo "Build Complete."
