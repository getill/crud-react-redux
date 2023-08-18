const mongoose = require("mongoose");

const connectDB = async () => {
  // Le try catch sert à renvoyer une erreur en cas d'échec
  try {
    mongoose.set("strictQuery", false);
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("Mongo connecté mon pote"));
    // L'erreur est log ici
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
