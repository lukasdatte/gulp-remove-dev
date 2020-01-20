const replace = require('gulp-replace');
//const replaceDev = /(?:^\s*)?\/\/<remove>.*?\/\/<\/remove>(?:\s*$)?/gms;
//const replaceDevEnd = /(?:^\s*)?\/\/<remove end>.*$/gms;
//const replaceDevBeginning = /^.*\/\/<remove beginning>(?:\s*$)/gms;
const remove = /(^.*\/\/<remove beginning>(?:\s*$))|((?:^\s*)?\/\/<remove((>.*?\/\/<\/remove>(?:\s*$)?)|( +end>.*$)))/gms;

exports = function () {
    return replace(remove, "");
};