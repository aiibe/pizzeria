export const generateUID = (max = 4) => {
  return Math.random().toString(36).substr(2, max);
};
