//todo: 
// -add css
// -front end js to make visualization match db status
// -switch from jquery to fetch?
// -get post responses working?
const express = require("express");
const hbs = require("express-handlebars");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("public")); 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.engine("handlebars",hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


setRoutes = require("./controllers/burgers_controller")

setRoutes(app);

app.listen(PORT, ()=>{
  console.log("server on");
})