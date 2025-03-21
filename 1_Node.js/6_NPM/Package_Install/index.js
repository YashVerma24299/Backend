const figlet = require("figlet");
console.log(figlet);

figlet("Yash Verma!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
});