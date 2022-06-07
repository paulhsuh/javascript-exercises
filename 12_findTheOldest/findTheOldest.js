const getAge = function (person) {
  let end;
  if (!person.yearOfDeath){
    end = new Date().getFullYear();
  }
  else {
    end = person.yearOfDeath;
  }
  console.log(end - person.yearOfBirth);
  return end - person.yearOfBirth;
};

const findTheOldest = function(people) {
  return people.reduce((accum, person) => {
    console.log(accum);
    let current_age = getAge(person);
    if (!accum.name ){
      return person;
    }
    else {
      let old_age = getAge(accum);
      return current_age > old_age ? person : accum;
    }
  }  ,{})
};

// Do not edit below this line
module.exports = findTheOldest;
