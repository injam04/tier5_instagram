export const generateRandomColor = () => {
  const code = Math.floor(Math.random() * 16777215).toString(16);
  return `#${code}`;
};
