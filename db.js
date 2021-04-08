const mongoose = require("mongoose");

const connectDB = async () => {
  let MONGO_URI;

  if (process.env.NODE_ENV === "production") {
    MONGO_URI = process.env.MONGO_URI_PROD;
  } else {
    // eslint-disable-next-line prefer-destructuring
    MONGO_URI = process.env.MONGO_URI;
  }

  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log(
      `MongoDB Connected: ${conn.connection.host}:${conn.connection.port}/${conn.connection.name}`
    );
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
