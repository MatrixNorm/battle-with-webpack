const c = require("./c");

console.log("Init module A");

module.exports = {
  x: 2 + c.x,
};
