import * as fs from 'fs';
// import * as path from 'path';

const getFiles = (directory: string): string[] => 
  fs.readdirSync(directory)
    .filter(file => !fs.statSync(`${directory}/${file}`).isDirectory());

export default getFiles;