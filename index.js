const cowsay = require("cowsay");
require("dotenv").config();

console.log(
  cowsay.say({
    text: `Hello, my name is ${process.env.NAME} and I'm from the ${process.env.CAMPUS} campus!`,
    e: "oO",
    T: "U ",
  })
);
