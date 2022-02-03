const nedb = require('nedb-promise'); 
const database = new nedb({
    filename: 'database.db',
    autoload: true 
});

/*
database.insert({
    firstname: 'Johan',
    lastname: 'Svensson',
    age: '25'
});

database.insert({
    firstname: 'Erik',
    lastname: 'Svensson',
    age: '23'
});

database.insert({
    firstname: 'Bengt',
    lastname: 'Johansson',
    age: '56'
});

database.insert({
    firstname: 'Kurt',
    lastname: 'Andersson',
    age: '43'
});

database.insert({
    firstname: 'Ulf',
    lastname: 'Bengtsson',
    age: '67'
});

*/

async function getLastName() {
    const person = await database.find({
      lastname: 'Svensson'
    })
  
    console.log("People with last name Svensson:");
    console.log(person);
  }

  getLastName("Svensson");