let auto = {
  manufacturer: "BMV",
  model: "3",
  "year of issue": "2017",
  "average speed": "100"
};

let info = obj => {
  let str = "";
  for (let key in obj) {
    str += obj[key] + " ";
  }
  return str;
};

// alert(info(auto));

let time = (obj, s) => {
  let time, stop;
  time = s / obj["average speed"];
  stop = Math.floor(time / 4);
  return time + stop;
};

alert(time(auto, 1000));
