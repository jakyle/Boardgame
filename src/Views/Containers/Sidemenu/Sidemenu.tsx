import * as React from 'react';
import { remote } from 'electron';
import './Sidemenu.css';
import { getFiles } from '../../../util';
// import { TileImage } from '../../Models/Models';

interface SidemenuProps {}

interface SidemenuState {
  files: string[];
}

class Sidemenu extends React.Component<SidemenuProps, SidemenuState> {

  state = {
    files: new Array<string>()
  };

  public buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    let files = {...this.state.files};
    files = getFiles(remote.dialog.showOpenDialog({properties: ['openDirectory']})[0]);
    this.setState({files});
  }

  public render() {
    const { files } = this.state;
    return (
      <div className="Side-Menu">
        <button onClick={this.buttonHandler} >Get Files</button>
        {files.length >= 1 
        ? <div className="Side-Menu-List">{files.map((file, index) => (
            <div key={index}><img src={file} width="100" height="100"/></div>))}
          </div>
        : null}
      </div>
    );
  }
}

export default Sidemenu;
