let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
  
  let json = JSON.stringify(student);

  console.log(json)
  
  let user = {
    name: "Василий Иванович",
    age: 35
  };

  let json1 = JSON.stringify(user);

  json2 = JSON.parse(json1)

  console.log(json1)
  console.log(json2)