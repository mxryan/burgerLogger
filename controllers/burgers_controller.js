const burger = require("../models/burger");
module.exports = (app) => {
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
  });
  
}