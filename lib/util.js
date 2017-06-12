const chalk = require('chalk');

exports.bump(currentSemVersion, typeofIncrement){

  // Major [0]
  // Minor [1]
  // Patch [2]

const aryVersions = currentSemVersion.split('.');

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
  const success = chalk.bold.green;

  if (process.env.DEBUG) {

    if (status) {
      // success
      console.log(success(output), obj);
    } else {
      // error
      console.log(error(output), obj, status);
    }
  }
};
