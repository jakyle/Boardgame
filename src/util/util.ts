export const updateObject = <T, U>(oldObject: T, updatedValues: U): T => {
  const copy = Object.assign({}, oldObject);
  return  Object.assign(copy, updatedValues);
};

export const posValidation = (x: number): boolean => {
  // debugger;
  if (x >= 1 && x <= 50 ) {
    return true;
  }
  return false;
};
