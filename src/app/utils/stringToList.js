const stringToList = (str) => {
  if (str === null || str === undefined) return '';

  const clearedStr = str.toLowerCase().replace(/\s+/g, ' ').trim();
  if (clearedStr === '') return [];
  return clearedStr.split(' ');
};

export default stringToList;
