import * as React from 'react';
// import { remote } from 'electron';
import './Sidemenu.css';
import { connect, Dispatch } from 'react-redux';
import { AllProps, SidemenuState, StoreProps, ConnectedStates } from './Sidemenu.ts';
import { ApplicationState } from '../../../Main/Store';
import { TileMenuActions } from '../../../Main/Store/TileMenu/types'; 
import { addImages, selectImage } from '../../../Main/Store/TileMenu/action';
import ImageTile from '../../Components/ImageTile/ImageTile';
import { MenuImage } from '../../../../Models/Models';
// import { MenuImaging } from '../../../util';
// import { TileImage } from '../../Models/Models';

class Sidemenu extends React.Component<AllProps, SidemenuState> {

/*   public buttonHandler =  async (event: React.MouseEvent<HTMLButtonElement>) => {
    const directory = remote.dialog.showOpenDialog({properties: ['openDirectory']})[0];
    const menuImg = new MenuImaging();
    let imagePaths =  await menuImg.fillDirectory(directory);
    this.props.onAddImages(imagePaths);
  }
 */
  public clickHandler = (menuImage: MenuImage) => {
    this.props.onSelectedImage(menuImage);
    this.forceUpdate();
  }

  public render() {
    const { menuImages } = this.props;
    return (
      <div className="Side-Menu">
        <button>Get Files</button>
        {menuImages!.length >= 1 
        ? <div className="Side-Menu-List">{menuImages!.map((menuImage, index) => {
            return <ImageTile 
              key={index} 
              clicked={this.clickHandler} 
              menuImage={menuImage}
            />; 
            })}
          </div>
        : null}
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState): StoreProps => {
  const { menuImages, selectedImage } = state.tileMenu;
  return { menuImages, selectedImage };
};
const mapDispatchToProps = (dispatch: Dispatch<TileMenuActions>): ConnectedStates => {
  return {
    onAddImages: (imagePaths) => dispatch(addImages(imagePaths)),
    onSelectedImage: (menuImage) => dispatch(selectImage(menuImage))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidemenu);