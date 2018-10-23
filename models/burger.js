const orm = require("../config/orm.js");
const burger = {
  getAll: (cb) => {
    console.log("burger getall called");
    orm.getAll("burgers", (data) => {
      cb(data);
    });
  },
  create: (cols, vals, cb) => {
    console.log("burger create called");
    orm.create("burgers", cols, vals, (data) => {
      cb(data);
    });
  },
  update: (obj, condition, cb) => {
    console.log("burger update called");
    orm.update("burgers", obj, condition, (data) => {
      cb(data);
    });
  }
}

module.exports = burger;