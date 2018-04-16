import {  statSync, readdirSync, unlinkSync, readdir, readFile } from 'fs';
import { tmpdir } from 'os';
import { read } from 'jimp';
import { promisify } from 'util';

const readdirAsync = promisify(readdir);
const readFileAsync = promisify(readFile);

export class MenuImaging {

  private _pattern = new RegExp(/^.*\.(png|jpg|jpeg)$/ig);
  private _imgHeight = 100;
  private _imgWidth = 100;
  private _tmpDir = `${tmpdir()}\\BoardGame\\Menu-Images`;

  public fillDirectory =  async (directory: string) => {
    this._clearDir();
    await this._editFiles(directory);
    return await this._getImages(directory);
  }

  private _clearDir =  () => {
      const files = readdirSync(this._tmpDir);
      for (let file of files ) {
        unlinkSync(`${this._tmpDir}\\${file}`);
      }
  }
   
  private _editFiles = async (directory: string) => {
      const files =  readdirSync(directory);
      for (let file of files )  {
        const buffer = await readFileAsync(`${directory}\\${file}`);
        const img = await read(buffer);
        img.resize(this._imgWidth, this._imgHeight)
          .write(`${this._tmpDir}\\${file}`);
      }
  }

  private _getImages = async (directory: string) => {
    const files = await readdirAsync(`${this._tmpDir}`);
    const mappedFiles = files.map(file => `${this._tmpDir}\\${file}`);
    const filteredFiles = mappedFiles.filter(file => !statSync(file).isDirectory());
    const correctImages = filteredFiles.filter(file => this._pattern.test(file));
    return correctImages;
      
  }
    
}
