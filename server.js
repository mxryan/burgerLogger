//todo: 
// -modulize routes
// -add css
// -front end js to make visualization match db status
// -separate front end javascript
// -get post responses working?
const express = require("express");
const hbs = require("express-handlebars");
const PORT = process.env.PORT || 3001;
const app = express();
const burger = require("./models/burger");
app.use(express.static("public")); 
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

app.post("/", (req, res)=>{
  burger.update({devoured: 1}, "ID="+req.body.id, (err, data)=>{
    if (err) return console.log(err);
    console.log(res);
    res.end();
    
  });
});

app.post("/new", (req, res)=>{
  console.log(req.body);
  burger.create(["burger_name"], [req.body.name],(err,data)=>{
    if (err) return console.log(err);
    console.log(data);
    res.redirect("/");
  });
  
})

app.listen(PORT, ()=>{
  console.log("server on");
})