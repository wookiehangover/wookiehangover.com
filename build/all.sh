#!/bin/bash -e

npm run build:css

# Build markdown posts into HTML
npm run build:posts

# Copy all other assets to docs/
mkdir -p docs/img
npm run copy-assets

declare -a build_files=("cv.html" "index.html")

# Minify and inline all of the HTML files into docs/
for file in ${build_files[@]}; do
  npm run build:html -- $file
done;

for file in $(ls writing/*.html); do
  npm run build:html -- $file docs/writing
done;

echo "Build Complete."
