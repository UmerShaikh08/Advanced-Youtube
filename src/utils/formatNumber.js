export const formatNumber = (num) => {
  if (num >= 1e6) {
    // Convert to millions
    return (num / 1e6).toFixed(1) + "M";
  } else if (num >= 1e3) {
    // Convert to thousands
    return (num / 1e3).toFixed(1) + "K";
  } else {
    return num.toString();
  }
};
