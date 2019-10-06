const fs = require('fs-extra');
const childProcess = require('child_process');

console.log("Bulding js");

try {
    fs.removeSync('./dist');
    fs.copySync('./src/public/js/lib','./dist/public/js');
    fs.copySync('./src/public/fonts','./dist/public/fonts');
    fs.copySync('./src/public/images','./dist/public/');
    fs.copySync('./src/views','./dist/views');
    childProcess.exec('tsc --build tsconfig.prod.json');

}
catch (err) {
    console.log(err);
}