//# Object Freeze dan Object Seal
{
  const person = {
    firstName: "Faqih",
    lastName: "Nur Fahmi",
  };

  Object.freeze(person);
  person.firstName = "Maryam";
  delete person.lastName;

  console.log(person);

  const nama = {
    firstName: "Faqih",
    lastName: "Nur Fahmi",
  };
  Object.seal(nama);
  nama.firstName = "Maryam";
  delete nama.lastName;
  console.log(nama);
}

//$ Object Assign

{
  const target = {
    firstName: "Faqih",
  };

  const source = {
    lastName: "Nur Fahmi",
  };

  Object.assign(target, source);
  console.log(target);
}

//! Object.values dan Object.getOwnPropertyNames
{
  const personal = {
    firstName: "Faqih",
    lastName: "Nur Fahmi",
  };

  console.log(Object.values(personal));
  console.log(Object.getOwnPropertyNames(personal));
}
