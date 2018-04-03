import * as React from 'react';
import getFiles from '../../Server/renderer';
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
    files = getFiles('C:\\Users\\jimmy\\Pictures');
    this.setState({files});
  }

  public render() {
    const { files } = this.state;
    return (
      <div>
        <button onClick={this.clickHandler} >Get Files</button>
        {files.length >= 1 
        ? <ul>{files.map((file, index) => <li key={index}>{file}</li>)}</ul>
        : null};
      </div>
    );
  }
}

export default Sidemenu;
