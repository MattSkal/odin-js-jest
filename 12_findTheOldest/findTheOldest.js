ages = "";
const d = new Date();
thisYear = d.getFullYear();

function findTheOldest(people) {
  oldest = people.reduce((previousPerson, currentPerson) => {
    return (previousPerson.yearOfDeath || thisYear) -
      previousPerson.yearOfBirth >
      (currentPerson.yearOfDeath || thisYear) - currentPerson.yearOfBirth
      ? previousPerson
      : currentPerson;
  });
  return oldest;
}

module.exports = findTheOldest;
