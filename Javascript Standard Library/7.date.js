{
  const date = new Date();
  console.info(date);

  const date2 = new Date(2022, 1, 1);
  console.info(date2);

  const date3 = new Date(1751760011054);
  console.info(date3);
}

{
  //# Epoch & Unix Timestamp

  //@ akan mengembalikan jumlah milidetik sejak 1 Januari 1970 dalam bentuk number
  const date = new Date();
  console.info(date.getTime());

  const date2 = new Date(2022, 1, 1);
  console.info(date2.getTime());

  const date3 = new Date(1751760011054);
  console.info(date3.getTime());

  console.info(Date.now());
}

{
  //#date parsing

  const time = Date.parse("2022-02-01T09:28:16.123+07:00");
  console.info(time);

  const date = new Date(time);
  console.info(date);
}

{
  // # Getters & Setters
  const date = new Date();
  console.info(date);

  console.info(date.getFullYear());
  console.info(date.getMonth());
  console.info(date.getDate());
  console.info(date.getHours());
  console.info(date.getMinutes());
  console.info(date.getSeconds());
  console.info(date.getMilliseconds());
  console.info(date.getTimezoneOffset());
}
