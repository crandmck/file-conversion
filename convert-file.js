var glob = require("glob");
var fs = require("fs");
var replace = require("replace");

function sr_single_file(fileName, searchStr, replStr) {
  console.log("Processing file ", fileName );

  //var regexStr = '<\\?Pub Inc\\?>';
  options = {
    regex: searchStr,
    replacement: replStr,
    paths: [fileName],
    recursive: true,
    silent: true
  };

  replace(options);
}

/*
First CL arg (argv[2]) is name of JSON file
Second CL arg (argv[3]) is taget input file to convert
*/
if (process.argv[2]==null) {
  console.log("No search & regex JSON file provided. Exiting.");
  process.exit(1);
}
var jsonFile = "./" + process.argv[2];
console.log("JSON file is " + jsonFile);

if (process.argv[3]==null) {
  console.log("No target file provided. Exiting.");
  process.exit(1);
}
var targetFile =  process.argv[3];
console.log("Target file is " + targetFile);

// Read file
var replacements = require(jsonFile);

for (var i = 0; i < replacements.length; i++) {
  pair = replacements[i];
  console.log("Replacing regex " , pair['regex'], " with ", pair['replacement'])
  sr_single_file(targetFile, pair['regex'], pair['replacement']);
}

/* ---------- UNUSED -----------
function search_and_replace(searchStr, replStr) {

  glob(srcFiles, function (err, files) {
    console.log(" files is ", files);
    console.log("Length of array is ", files.length);
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
        //console.log("Removing ", searchStr );
      } else {
        //console.log("Replacing ", searchStr, " with ",  replStr );
      }
      replace(options);
    });
  });
}
*/
