import * as c from "./c";

console.log("main...", c);

setTimeout(() => {
  console.log("importing a...");
  import("./a").then((mod) => console.log(mod.x));
}, 2000);
