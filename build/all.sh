#!/bin/bash -ex

# npm run build:css
npm run build:next
rm -rf docs/_next docs/img docs/writing
mv out/* docs
rm -rf out
# mkdir -p docs/img
# cp -r docs/static/img/* docs/img
npm run build:img

echo
echo "💯  Build Complete."
