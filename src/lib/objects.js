const createPerson = (name, age) => {
  const Person = {
    name: name,
    age: age
  };
  return Person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]) {
    return true;
  }
  return false;
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = people => {
  const ages = people.map(element => {
    return element.age;
  });
  return ages;
};

const findByName = (name, people) => {
  const knark = people.find(element => element.name === name);
  return knark;
};

const findHondas = cars => {
  return cars.filter(element => element.manufacturer === 'Honda');
};

const averageAge = people => {
  const knark = people.map(element => element.age);
  const sum = knark.reduce((total, number) => {
    return total + number;
  });
  return sum / people.length;
};

const createTalkingPerson = (name, age) => {
  const cringe = {
    name: name,
    age: age,
    introduce: function(knark) {
      return `Hi ${knark}, my name is ${name} and I am ${age}!`;
    }
  };
  return cringe;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
