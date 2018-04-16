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
        <img src={menuImage.imagePath} />
      </div>
    ) : ( 
      <div className="ImageTile" onClick={(e) => clicked(menuImage)}>
        <img src={menuImage.imagePath} />
      </div>
    );

export default ImageTile;