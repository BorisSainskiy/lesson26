let time = {
  hours: 1,
  minutes: 10,
  seconds: 30
};

let timeScreen = obj => {
  return `${obj.hours}:${obj.minutes}:${obj.seconds}`;
};

let minutes = (obj, minute) => {
  obj.minutes += minute;
  obj.hours += Math.floor(obj.minutes / 60);
  obj.minutes = obj.minutes - Math.floor(obj.minutes / 60) * 60;
  return timeScreen(obj);
};

let seconds = (obj, second) => {
  obj.seconds += second;
  obj.minutes += Math.floor(obj.seconds / 60);
  obj.seconds = obj.seconds - Math.floor(obj.seconds / 60) * 60;
  obj.hours += Math.floor(obj.minutes / 60);
  obj.minutes = obj.minutes - Math.floor(obj.minutes / 60) * 60;
  return timeScreen(obj);
};
alert(seconds(time, 3600));

let hours = (obj, hours) => {
  obj.hours += hours;
  return timeScreen(obj);
};
