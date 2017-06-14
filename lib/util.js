var chalk = require('chalk');

function _bump(currentSemVersion, typeofIncrement){

  // Major [0]
  // Minor [1]
  // Patch [2]

  var aryVersions = currentSemVersion.split('.');

  for (let versionIndex in aryVersions) {
    aryVersions[versionIndex] = parseInt(aryVersions[versionIndex]);
  }

  if (typesofIncrement === 'patch') {
    aryVersions[2] += 1; //Patch
  } else if (typesofIncrement === 'minor') {
    aryVersions[2] = 0; // Patch
    aryVersions[1] = 0; // Minor
  } else if (typesofIncrement === 'major') {
    aryVersions[2] = 0; // Patch
    aryVersions[1] = 0; // Minor
    aryVersions[0] += 1; // Minor
  }

  return aryVersions.join('.');
}

exports.debug = (title, obj, status) => {
  const separator = '\n==================================\n';
  const output = separator + title + separator;

  const error = chalk.bold.red;

  if (process.env.DEBUG) {
    console.log(error(output), obj, status);
  }
};
