const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
require("dotenv").config();

//1.59
const schema = require("./schema/schema");

const app = express();

//Connect moongose server
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected To Datatbase"));
db.connect;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("working on port 4000");
});
