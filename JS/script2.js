let fraction1 = {
  numerator: 1,
  denominator: 5
};

let fraction2 = {
  numerator: 3,
  denominator: 10
};

let trueForm = (a, b) => {
  let z = 1;
  if (a < 0 || b < 0) {
    let c = Math.min(a, b);
    for (; c <= -1; c++) {
      if (a % c == 0 && b % c == 0) {
        z = c;
        break;
      }
    }
    return `${(a / z) * -1}/${(b / z) * -1}`;
  } else {
    let c = Math.min(a, b);
    for (; c >= 1; c--) {
      if (a % c == 0 && b % c == 0) {
        z = c;
        break;
      }
    }
    return `${a / z}/${b / z}`;
  }
};

let sum = (obj1, obj2) => {
  let numerator, denominator;
  numerator =
    fraction1.numerator * fraction2.denominator +
    fraction1.denominator * fraction2.numerator;
  denominator = fraction1.denominator * fraction2.denominator;
  return trueForm(numerator, denominator);
};

// alert(sum(fraction1, fraction2));

let dis = (obj1, obj2) => {
  let numerator, denominator;
  numerator =
    fraction1.numerator * fraction2.denominator -
    fraction1.denominator * fraction2.numerator;
  denominator = fraction1.denominator * fraction2.denominator;
  return trueForm(numerator, denominator);
};

// alert(dis(fraction1, fraction2));

let multiply = (obj1, obj2) => {
  let numerator, denominator;
  numerator = fraction1.numerator * fraction2.numerator;
  denominator = fraction1.denominator * fraction2.denominator;
  return trueForm(numerator, denominator);
};
// alert(multiply(fraction1, fraction2));

let division = (obj1, obj2) => {
  let numerator, denominator;
  numerator = fraction1.numerator * fraction2.denominator;
  denominator = fraction1.denominator * fraction2.numerator;
  return trueForm(numerator, denominator);
};
alert(division(fraction1, fraction2));
