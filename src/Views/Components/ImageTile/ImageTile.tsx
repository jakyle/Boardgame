import * as React from 'react';
import './ImageTile.css';
import { MenuImage } from '../../../Models/Models';

interface ImageTileProps {
  menuImage: MenuImage;
  clicked: (menuImage: MenuImage) => void;
}

const ImageTile: React.SFC<ImageTileProps> = ({ menuImage, clicked }: ImageTileProps) =>
  menuImage.isSelected ?  (
      <div className="Selected-Image-Tile" onClick={(e) => clicked(menuImage)}>
        <img src={menuImage.imagePath} width="85" height="85"/>
      </div>
    ) : ( 
      <div className="ImageTile" onClick={(e) => clicked(menuImage)}>
        <img src={menuImage.imagePath} width="100" height="100"/>
      </div>
    );

export default ImageTile;