import * as fs from 'fs';
// const { remote } = require('electron');
// import * as path from 'path';

const pattern = new RegExp(/^.*\.(png|jpg|jpeg|gif)$/ig);

const getFiles = (directory: string): string[] => 
  fs.readdirSync(directory)
    .map(file => `${directory}\\${file}`)
    .filter(file => !fs.statSync(file).isDirectory() && pattern.test(file));
export default getFiles;

// data:image/PNG;base64