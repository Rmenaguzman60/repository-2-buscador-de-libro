var mongoose = require("mongoose");
class Database {
  constructor() {}

  async connect() {
    try {
      await mongoose.connect(
        "mongodb+srv://admin:buscadordelibros2019@cluster0-iw46q.mongodb.net/Social-Search-Engine-Of-Book?retryWrites=true",
        { useNewUrlParser: true }
      );
      console.log("Connected databases.");
    } catch (e) {
      console.error(e);
    }
  }
}

exports.database = new Database();
