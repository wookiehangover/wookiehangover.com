#!/bin/bash -e

mkdir -p writing

npm run build:css

# Build markdown posts into HTML
npm run build:posts

# Copy all other assets to docs/
mkdir -p docs/img
npm run copy-assets

# Minify and inline all of the HTML files into docs/
for file in *.html; do
  npm run build:html -- $file
done;

pushd writing
for file in *.html; do
  npm run build:html -- writing/$file docs/writing
done;
popd

npm run build:sw

echo
echo "💯  Build Complete."
