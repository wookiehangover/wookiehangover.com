#!/bin/bash -e

# Prefix and compress css into docs/
postcss \
  --use autoprefixer \
  --use postcss-csso \
  style.css -d docs

# Build markdown posts into HTML
npm run build:posts

# Copy all other assets to docs/
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
