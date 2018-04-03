import * as React from 'react';
import getFiles from '../../Server/renderer';
import { remote } from 'electron';
// import { TileImage } from '../../Models/Models';

interface SidemenuProps {}

interface SidemenuState {
  files: string[];
}

class Sidemenu extends React.Component<SidemenuProps, SidemenuState> {

  state = {
    files: new Array<string>()
  };

  public clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    let files = {...this.state.files};
    files = getFiles(remote.dialog.showOpenDialog({properties: ['openDirectory']})[0]);

    this.setState({files});
  }

  public handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    debugger;
    console.log(event.currentTarget.files);
  }

  public render() {
    const { files } = this.state;
    return (
      <div>
        <button onClick={this.clickHandler} >Get Files</button>
        <input type="file" onChange={this.handleChange} />
        {files.length >= 1 
        ? <ul>{files.map((file, index) => <li key={index}><img src={file} width="50" height="50"/></li>)}</ul>
        : null};
      </div>
    );
  }
}

export default Sidemenu;
