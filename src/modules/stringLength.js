const stringLength = (str) => {
  if (str.length > 0 && str.length <= 10) {
    return str.length;
  }
  return 'error';
};

export default stringLength;