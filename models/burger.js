const orm = require("../config/orm.js");
const burger = {
  getAll: (cb) => {
    orm.getAll("burgers", (data) => {
      cb(data);
    });
  },
  create: (cols, vals, cb) => {
    orm.create("burgers", cols, vals, (data) => {
      cb(data);
    });
  },
  update: (obj, condition, cb) => {
    orm.update("burgers", obj, condition, (data) => {
      cb(data);
    });
  }
}

burger.create(["burger_name", "devoured"], ["cheese burger", "0"], (data)=>console.log(data));

module.exports = burger;