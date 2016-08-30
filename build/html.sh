#!/bin/bash -e

PATH=`npm bin`:$PATH

for file in $(ls *.html); do
  echo "Inlining and Minifying $file..."
  sed 's/style.css/.\/dist\/style.css/g' $file | inliner > dist/$file
  echo "🆗 dist/$file written"
done;

cp *.gif *.jpg favicon.ico dist
