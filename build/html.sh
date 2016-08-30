#!/bin/bash -e

PATH=`npm bin`:$PATH

for file in $(ls *.html); do
  echo "Inlining and Minifying $file..."
  sed 's/style.css/.\/docs\/style.css/g' $file | inliner > docs/$file
  echo "🆗 docs/$file written"
done;

cp *.gif *.jpg favicon.ico docs
