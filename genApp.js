const path = require('path');
const fs=require('fs');

const tag = '2.0.8';
const author = 'machsix';

const localJS = [];
const distPath = path.join(__dirname, 'dist');
const jsPath = path.join(distPath, 'js');
const files = fs.readdirSync(jsPath);
for (var i = 0; i < files.length; i++){
    var filename = files[i];
    if (/.*\.js$/.test(filename)) {
      localJS.push(`"https://cdn.jsdelivr.net/gh/${author}/goindex-theme-acrou@${tag}/dist/js/${filename}",`);
    }
}

let content = `
var scripts = [
  ${localJS.join('\n  ')}
];
`;

const cdn = require('./dependencies-cdn');
const cdnJS = cdn.filter((i) => i.js.length > 0).map((i) => `"${i.js}",`);
content += `
var cdnjs = [
  ${cdnJS.join('\n  ')}
]
`;

content += `
cdnjs.forEach((item) => {
  document.write('<script src="' + item + '"></script>');
});

scripts.forEach((item) => {
  document.write('<script src="' + item + '"></script>');
});
`;

console.log(content);

fs.writeFile(path.join(distPath, 'app.js'),content,'utf8', ()=>{console.log('done')});

