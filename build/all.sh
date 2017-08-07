#!/bin/bash -e

mkdir -p writing

npm run build:css
npm run build:next
rm -rf docs/_next docs/static docs/writing docs/cv.html docs/index.html || true
mv out/* docs
rm -rf out
mkdir -p docs/img
cp -r docs/static/img/* docs/img
npm run build:img

echo
echo "💯  Build Complete."
