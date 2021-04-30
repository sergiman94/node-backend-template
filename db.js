const db = require("mongoose");

db.Promise = global.Promise;
async function connect(url) {
  await db
    .connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "test",
      }
    )
    .then(() => {
      console.log("DB connected");
    })
    .catch((e) => {
      console.log(e);
    });
}

module.exports = connect
