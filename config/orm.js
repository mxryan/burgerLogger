const db = require("./connection");

function makenQM(n) {
  // make str of n question marks, eg n=3: '?,?,?'
  for (var x = ""; x.length / 2 < n - 1; x += "?,");
  return x + "?";
}

function convert(obj) {
  //converts object to string, eg: {a:1,b:2} -> 'a=1,b=2'
  const out = [];
  for (let key in obj) {
    let val = obj[key];
    if(!Object.hasOwnProperty.call(obj, key)) continue;
    val = typeof val === "string" && val.includes(" ") ? "'" + val + "'" : val;
    out.push(key + "=" + val);
  }
  return out.toString();
}

const orm = {
  getAll: (table, cb) => {
    const qs = "SELECT * FROM " + table + ";";
    db.query(qs, (err, data) => {
      if (err) return console.log(err);
      cb(data);
    });
  },
  create: (table, cols, vals, cb) => {
    const qs = `INSERT INTO ${table} (${cols.toString()})
    VALUES (${makenQM(vals.length)})`;
    db.query(qs, vals, (err, data) => {
      if (err) return console.log(err);
      cb(data);
    });
  },
  update: (table, obj, condition, cb) => {
    const qs = `UPDATE ${table}
    SET ${convert(obj)} WHERE ${condition}`;
    db.query(qs, (err, data) => {
      if (err) return console.log(err);
      cb(data);
    });
  }
}


module.exports = orm;