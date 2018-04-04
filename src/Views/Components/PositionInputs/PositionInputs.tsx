import * as React from 'react';
import { TilePosition } from '../../../Models/Models';

interface PositionInputsProps {
  pos: TilePosition;
  handleChange: (propertyName: string) => (event: React.FormEvent<HTMLInputElement>) => void;
}

const PositionInputs: React.SFC<PositionInputsProps> = (props) => {
  return (
    <div>
      <label>rows: </label> <br />
      <input type="number" onChange={props.handleChange('col')} value={props.pos.col} /><br />
      <label>columns: </label><br />
      <input type="number" onChange={props.handleChange('row')} value={props.pos.row} /><br />
    </div>
  );
};

export default PositionInputs;