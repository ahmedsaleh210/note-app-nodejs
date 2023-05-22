import sequentialIds from "sequential-ids";
 
var generator = new sequentialIds.Generator({
  digits: 3,
  restore: "0000"
});

generator.start();

export default generator;