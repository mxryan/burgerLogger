//todo: everything...
// get working index page
// main server file,  make routes(controller), handlebars set up, model
const express = require("express");
const hbs = require("express-handlebars");
const PORT = process.env.PORT || 3001;
const app = express();
const burger = require("./models/burger");
// app.use(express.static("public")); 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.engine("handlebars",hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get("/", (req,res)=>{
  burger.getAll((data)=>{
    const hbsObj = {burgers: data};
    console.log(data);
    res.render("index", hbsObj);
  });
});
app.post("/", (req,res)=>{
  console.log(req.body);
  res.end();
})

app.listen(PORT, ()=>{
  console.log("server on");
})