// { "regex": "", "replacement": "" }

var glob = require("glob");
var fs = require("fs");
var replace = require("replace");

function search_and_replace(searchStr, replStr) {

  glob(srcFiles, function (err, files) {
    if (err) throw err;
    files.forEach(function (item, index, array) {
      console.log("Processing file ", item );

      //var regexStr = '<\\?Pub Inc\\?>';
      options = {
        regex: searchStr,
        replacement: replStr,
        paths: [item],
        recursive: true,
        silent: true,
      };
      if (replStr == "") {
        console.log("Removing ", searchStr );
      } else {
        console.log("Replacing ", searchStr, " with ",  replStr );
      }
      replace(options);
    });
  });
 }

if (process.argv[2]==null) {
  console.log("No search & regex JSON file provided. Exiting.");
  process.exit(1);
}
var jsonFile = process.argv[2];
// console.log("JSON file is " + jsonFile);

if (process.argv[3]==null) {
  console.log("No source directory provided. Exiting.");
  process.exit(1);
}
var srcFiles = process.argv[3];
console.log("Source dir is " + srcFiles);

// Read file
var replacements = require(jsonFile);

for (var i = 0; i < replacements.length; i++) {
  pair = replacements[i];
  //console.log("Replacing regex " , pair['regex'], " with ", pair['replacement'])
  search_and_replace(pair['regex'], pair['replacement']);
}
