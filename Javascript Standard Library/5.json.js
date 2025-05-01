const person = {
  firstName: "John",
  middleName: "Doe",
  lastName: "Smith",
  address: {
    city: "Bandung",
    province: "Jawa Barat",
    country: "Indonesia",
  },
  hobbies: ["Coding", "Reading", "Watching Movie"],
  isMarried: false,
  schoolList: [
    {
      name: "SDN 1 Kalijati",
      yearIn: 2003,
      yearOut: 2009,
      major: null,
    },
  ],
};

const personJSON = JSON.stringify(person);
console.log(personJSON);

const personObject = JSON.parse(personJSON);
console.log(personObject);
