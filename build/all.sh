#!/bin/bash -e

npm run build:css

# Build markdown posts into HTML
npm run build:posts

# Copy all other assets to docs/
mkdir -p docs/img
npm run copy-assets

# Minify and inline all of the HTML files into docs/
for file in $(ls *.html); do
  npm run build:html -- $file
done;

for file in $(ls writing/*.html); do
  npm run build:html -- $file docs/writing
done;

npm run build:sw

echo
echo "💯  Build Complete."
