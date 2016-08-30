#!/bin/bash -e

file=$1

rm docs/$file || true

echo "Removing unused css from $file..."
# Swap the stylesheet for the minified version and run uncss to capture the page's unique styles
sed 's/style.css/.\/docs\/style.css/g' $file | uncss > docs/$file.css

echo "Inlining and Minifying $file..."
# Swap the stylesheet for the new uncss'ed version
sed 's/style.css/.\/'"$file"'.css/g' $file > docs/inline-$file

# Create a version with everything inlined
inliner docs/inline-$file > docs/$file
echo "🆗 — docs/$file written"

# Cleanup
rm docs/$file.css docs/inline-$file || true
