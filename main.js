const originalObj = {
  name: "John",
  age: 30,
  city: "New York",
};
const people = {
  person1: { name: "John", age: 25 },
  person2: { name: "Mike", age: 32 },
  person3: { name: "Sara", age: 28 },
};

const getObjKeys = (obj) => Object.keys(obj);
console.log(getObjKeys(originalObj));

const keysToUpperCase = (obj) => {
  const lowerKeyObj = Object.entries(obj);
  const uppeCaseKeyObj = [];
  for (let [key, value] of lowerKeyObj) {
    key = key.toUpperCase();
    uppeCaseKeyObj.push([key, value]);
  }
  return Object.fromEntries(uppeCaseKeyObj);
};
console.log(keysToUpperCase(originalObj));

const getObjValues = (obj) => Object.values(obj);
console.log(getObjValues(originalObj));

const valuesDouble = (obj) => {
  const original = Object.entries(obj);
  const double = [];
  for (let [key, value] of original) {
    value = value * 2;
    double.push([key, value]);
  }
  return Object.fromEntries(double);
};
console.log(valuesDouble(originalObj));

const objReverse = (obj) => {
  const original = Object.entries(obj);
  const reverse = [];
  for (let [key, value] of original) {
    reverse.push([value, key]);
  }
  return Object.fromEntries(reverse);
};
console.log(objReverse(originalObj));

const numbers = { first: 1, second: 30, third: 500 };
const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);
console.log(sumValues(numbers));

const avrageValues = (obj) => {
  const total = Object.values(obj).reduce((a, b) => a + b, 0);
  const base = Object.values(obj).length;
  return total / base;
};
console.log(avrageValues(numbers));

const objAlphabetaize = (obj) => Object.fromEntries(Object.entries(obj).sort());
console.log(objAlphabetaize(originalObj));

const checkIfPersonExist = (obj, str) => {
  const values = Object.values(obj);
  let flag = false;
  values.forEach((value) => {
    if (value.name === str) {
      flag = true;
    }
  });
  return flag;
};
console.log(checkIfPersonExist(people, "Mike"));

const wordFrequency = (array) => {
  const strCount = {};
  for (const str of array) {
    if (strCount[str]) {
      strCount[str]++;
    } else strCount[str] = 1;
  }
  return strCount;
};

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(wordFrequency(fruits));
