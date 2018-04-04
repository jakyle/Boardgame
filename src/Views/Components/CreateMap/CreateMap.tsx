import * as React from 'react';
import GameBoard from '../../Containers/GameBoard/GameBoard';
import Sidemenu from '../../Containers/Sidemenu/Sidemenu';
import './CreateMap.css';

interface CreateMapProps { 
}

const CreateMap: React.SFC<CreateMapProps> = (props) => {
  return (
    <div className="Create-Map">
      <div className="Create-Map-Board">
        <GameBoard />
      </div>
      <div className="Create-Map-Menu">
        <Sidemenu />
      </div>
    </div>
  );
};

export default CreateMap;