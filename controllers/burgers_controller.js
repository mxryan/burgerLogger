module.exports = (app) => {
  app.get("/", (req,res)=>{
    burger.getAll((data)=>{
      const hbsObj = {burgers: data};
      console.log(data);
      res.render("index", hbsObj);
    });
  });
}