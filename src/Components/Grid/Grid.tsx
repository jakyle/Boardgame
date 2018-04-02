import * as React from 'react';
import { AllProps } from './Grid.ts';
import  styled from 'styled-components';

const Grid: React.SFC<AllProps> = ( {size, children }: AllProps) => {
  const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(${size.col}, 100px);
  grid-template-rows: repeat(${size.row}, 100px);
  justify-content: center;
  align-content: center;	
  height: 100vh;

  @media (max-width: 499px), (max-height: 499px)  {
    grid-template-columns: repeat(${size.col}, 75px);
    grid-template-rows: repeat(${size.row}, 75px);
  }
  
  @media (max-width: 374px), (max-height: 374px)  {
    grid-template-columns: repeat(${size.col}, 50px);
    grid-template-rows: repeat(${size.row}, 50px);
  }
  
  @media (max-width: 249px), (max-height: 249px)  {
    grid-template-columns: repeat(${size.col}, 25px);
    grid-template-rows: repeat(${size.row}, 25px);
  }
`;
  return <Content >{children}</Content>;
};

export default Grid;