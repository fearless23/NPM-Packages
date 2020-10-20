const { Generator } = require('../dist/index');

const generator = new Generator();

const json = {
  name:"Hello",
  age: 31
}

const mySchema = generator.getSchema(json)
console.log(mySchema)