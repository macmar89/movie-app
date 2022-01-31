const timeConvert = (n: string) => {
  var num = parseInt(n);
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return `${rhours > 0 ? `${rhours}h` : ""} ${rminutes}m`;
};

export { timeConvert };
