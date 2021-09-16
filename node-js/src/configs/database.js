const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const db = mongoose.connection;
  db.on("error", (error) => console.log(error));
  db.once("open", () => console.log("[INFO] Connected to MongoDB"));
}

module.exports = connectToDatabase;
