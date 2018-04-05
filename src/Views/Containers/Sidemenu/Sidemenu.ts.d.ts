export interface SidemenuProps { }
export interface StoreProps {
  imagePaths: string[]
}
export interface SidemenuState { }
export interface ConnectedStates {
  onAddImages: (imagePaths: string[]) => void;
}

export type AllProps = 
  & SidemenuProps
  & StoreProps
  & ConnectedStates;