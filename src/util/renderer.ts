import * as fs from 'fs';

const pattern = new RegExp(/^.*\.(png|jpg|jpeg|gif)$/ig);

export const getFiles = (directory: string): string[] => 
  fs.readdirSync(directory)
    .map(file => `${directory}\\${file}`)
    .filter(file => !fs.statSync(file).isDirectory() && pattern.test(file));
    