#!/bin/bash -e

# Prefix and compress css into docs/
postcss \
  --use autoprefixer \
  --use postcss-csso \
  style.css -d docs

# Copy all other assets to docs/
cp *.gif favicon.ico docs

# Minify images into docs/
imagemin *.jpg *.png -o docs

# Minify and inline all of the HTML files into docs/
for file in $(ls *.html); do
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
done;

# Cleanup
rm docs/*.html.css docs/inline-* || true

echo "Build Complete."
