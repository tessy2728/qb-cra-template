export const getYearList = (startYear, endYear = new Date().getFullYear()) => {
  let yearList = [];
  for (let index = startYear; index <= endYear; index++) {
    yearList.push({
      value: index,
      label: index?.toString()
    });
  }
  return yearList;
};