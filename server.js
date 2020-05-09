if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
app.use(express.json());

const graphqlHTTP = require("express-graphql");
const schema = require("./gqlSchema");

const jobsRouter = require("./routes/api/Jobs");

//Database
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to mongoose"));

const cors = require("cors");
app.use(cors());
//Routes
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.use("/api/v1/jobs", jobsRouter);

const port = 5050 || process.env.PORT;
app.listen(port, () => console.log("App is running on port 5050"));
