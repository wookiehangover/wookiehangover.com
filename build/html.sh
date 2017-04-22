#!/bin/bash -e

file=$1
output_path=${2:-docs}

filename=${file##*/}
uncss_css=${filename%.html}-uncss.css
uncss_html=${uncss_css%.css}.html
inline_html=${filename%.html}-inline.html

mkdir -p $output_path

# echo "Removing unused css, inlining and minfying $file..."

# Swap the stylesheet for the minified version and run uncss to capture the page's unique styles
# uncss -i 'details[open] summary:before' $file > "$output_path/$uncss_css"

# Swap the stylesheet for the new uncss'ed version
# sed "s,[^\"']*\.css,$uncss_css,1" $file > $output_path/$uncss_html

# Create a version with everything inlined
inliner $file > $output_path/$filename
echo
echo "$output_path/$filename written"

# rm $output_path/*-uncss.*
