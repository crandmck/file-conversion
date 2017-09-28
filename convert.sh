#!/bin/sh

# Replace patterns in input files to output files
# First arg is JSON file containing regex search and replace patterns. Default is articles.json.
# Second arg is directory containing input files. Default is ./src.
# Third arg is output dir where converted files will be stored.  Defaults is "./out".
# To use any non-default value, you must provide value for previous args.

process_input_files() {

  echo "JSON file is $1"
  echo "Target dir is $2"

  for f in $2/*.md
  do
#    echo Calling Node program on $f using JSON file $1
    node convert-file.js $1 $f
  done
}

#################### Main process ####################

# First arg is name of JSON file; defaults to 'articles.json'
jsonfile="${1:-articles.json}"

# Second arg is dir containing input files.  Defaults to "src".
# To use non-default value, you must provide value for first arg.
src="${2:-./src}"

if [ -z "$src" ]
then
  echo "Source directory does not exist.\nExiting. \n"
  exit
else
  echo "Processing all input files in $src"
fi

# Third arg is output dir where converted files will be stored.  Defaults to "out".
# To use non-default value, you must provide value for first and second args.
out="${3:-out}"

if [ ! -d "$out" ]
then
  echo "Creating destination directory $out.\n"
  mkdir $out
else
  echo "Using existing destination directory $out.\n"
fi

cp $src/*.md $out
echo "Copying $src/*.md to $out"

process_input_files $jsonfile ./$out
