#!/bin/bash -e

# Prefix and compress css into docs/
postcss --use autoprefixer --use postcss-csso style.css -d docs

# Minify and inline all of the HTML files into docs/
for file in $(ls *.html); do
  echo "Inlining and Minifying $file..."
  sed 's/style.css/.\/docs\/style.css/g' $file | inliner > docs/$file
  echo "🆗 docs/$file written"
done;

# Copy all other assets to docs/
cp *.gif *.jpg favicon.ico docs
