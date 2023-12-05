/* eslint-disable */
const cleanSet = (set, startString) => {

  if (!startString || !startString.trim()) {
    return '';
  }
  const results = [];
  for (const item of set) {
    if (item && item.startsWith(startString)) {
      results.push(item.slice(startString.length));
    }
  }
  return results.join('-');
};

export default cleanSet;
