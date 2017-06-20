const chalk = require('chalk');
const utilityDebugTool = require('kay_beard_utility_debug_tool');

function _bump(currentSemVersion, typeofIncrement){

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
