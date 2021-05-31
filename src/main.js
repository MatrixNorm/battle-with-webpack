const a = require("./a");
const b = require("./b");

function lazy() {
  console.log(a, b, a.x + b.x);
}

window.lazy = lazy;
