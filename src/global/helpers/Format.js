import _ from "loadsh";

export const timeConvert = n => {
  var num = parseInt(n);
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return `${rhours > 0 ? `${rhours}h` : ""} ${rminutes}m`;
};

//  skrati text(string) na zadany pocet znakov a doplni 3 bodky na koncy, default hodnota 80
export const shorten = (str, len = 30) => {
  return _.truncate(str, { length: len });
};

export const year = year => {};
