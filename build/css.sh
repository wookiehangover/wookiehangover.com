#!/bin/bash -e

# Prefix and compress css into docs/
postcss \
  --use postcss-import  \
  --use postcss-extend  \
  --use autoprefixer    \
  --use postcss-csso    \
  --use postcss-url     \
  src/style.css -d static
