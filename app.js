let express = require("express");
let app = express();
const router = require('./router')
app.use(express.static("public"));
console.log(router)
app.set("views", "views"); // 1st view is should same for as in express and 2nd one should be same as folder name
app.set("view engine", "ejs");

app.use('/',router)


app.listen(2000);
