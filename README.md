# doc-conversion

Simple utility to apply a set of regex search and replace rules to a set of files.
Mostly useful for converting from one file format to another, for example
converting DITA docs to markdown.

## Overview

The Node program `convert-file.js` uses the search and replace regex patterns defined in the JSON file `articles.json`. The bash script `convert.sh` calls the Node program.
Use the Bash script on the command-line to convert all files in a given directory from DITA
to markdown.  Syntax is:

```
./convert.sh [json-file] [source-dir] [target-dir]
```

- First arg _json-file_ is the JSON file containing regex search and replace patterns. Default is `./articles.json`.
- Second arg, _source-dir_, is the source directory containing DITA files. Default is `./src`.
- Third arg, _target-dir_, is the output dir where converted files will be stored.  Default is `./out`.

To use any non-default value, you must provide value for previous args.

The Bash script will copy all files from the source directory to the output directory,
run the Node search and replacement program (using the regexes in the specified JSON file)

