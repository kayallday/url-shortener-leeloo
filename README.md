# Leeloo-url-shortener

## Pre-requisites
It is _HIGHLY_ recommended you have the following installed prior to beginning the Installation steps:

* [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH) - because who doesn't like efficiency (bonus: it's pretty)
* [Homebrew](https://brew.sh/) - if your using MAC you already know
* [NVM Node Version Manager](https://github.com/creationix/nvm/blob/master/README.md) - self explanatory
* [Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/) - preferred text editor for this particular project

## Features
__Utility Tool__
A tool for Debugging

__St-st-st-style Guide Girl!__
style_guide

## Installation
__Steps__

__1. Clone the Repository__

   1. _Command Line_

Open your favorite cli, and type:

    $ git clone https://github.com/kmbeard/Leeloo-url-shortener.git

   2. _Browser_

Navigate to the Repository in your browser and select Clone or Download Repository


__2. Install Dependencies__

    npm install -d

__eslint packages__

    npm install --save-dev eslint
    npm install --save-dev eslint-plugin-react
    npm install --save-dev eslint-config-airbnb
    npm install --save-dev eslint-plugin-import
    npm install --save-dev eslint-plugin-jsx-a11y

Also intall the linter-eslint package inside the settings in Atom


__Utility Tool__

    npm install debug_tool

## Endpoints

__POST /api/v1/urls__
Create a shortened url

__GET /api/v1/urls__
Display all urls

__GET /api/v1/urls/:id__
Display URL based upon id

__POST /api/v1/urls/:id__
Update URL based upon id

__DELETE  /api/v1/urls/:id__
Delete url based upon id


## Tests
Testing Framework used: mocha

__Install Mocha and Chai__

In the command line run the command:

    npm install --save-dev Mocha
    npm install --save-dev Chai

__Run Tests__

In the command line run the command:

    mocha
