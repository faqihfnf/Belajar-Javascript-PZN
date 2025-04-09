{
  const array = ["Faqih", "Nur", "Fahmi"];

  array.forEach(function (value, index) {
    console.log(`${index} : ${value}`);
  });

  array.forEach((value, index) => {
    console.log(`${index} : ${value}`);
  });

  array.forEach((value) => console.log(value));
}

{
  const queue = [];

  queue.push("Maryam");
  queue.push("Rika");
  queue.push("Yulianti");

  console.log(queue); // [ 'Maryam', 'Rika', 'Yulianti' ]
  console.log(queue.shift()); // Maryam;
  console.log(queue.shift()); // Rika;
  console.log(queue.shift()); // Yulianti;
  console.log(queue.shift()); // undefined;
}

{
  const stack = [];

  stack.push("John");
  stack.push("Doe");
  stack.push("Smith");

  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
}

{
  //# Array Search
  const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  console.log(source.find((value) => value > 3)); // 4
  console.log(source.findIndex((value) => value > 3)); // 3
  console.log(source.includes(7)); // false
  console.log(source.includes(3)); // true
  console.log(source.indexOf(3)); // 2
  console.log(source.lastIndexOf(3)); // 7
}

{
  //# Array Filter

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ganjil = numbers.filter((value) => value % 2 === 1);
  const genap = numbers.filter((value) => value % 2 === 0);

  console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  console.log(ganjil); // [ 1, 3, 5, 7, 9 ]
  console.log(genap); // [ 2, 4, 6, 8, 10 ]
}

{
  // # Array  Transform

  const names = ["John", "Doe", "Smith"];
  const namesUpper = names.map((value) => value.toUpperCase());
  const namesLower = names.map((value) => value.toLowerCase());
  const namesReduces = names.reduce((before, value) => {
    return before + " " + value;
  });

  console.log(names); // [ 'John', 'Doe', 'Smith' ]
  console.log(namesUpper); // [ 'JOHN', 'DOE', 'SMITH' ]
  console.log(namesLower); // [ 'john', 'doe', 'smith' ]
  console.log(namesReduces); // John Doe Smith
}
