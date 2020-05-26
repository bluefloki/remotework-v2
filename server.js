const express = require("express");
const app = express();
app.use(express.json());

const path = require("path");

//Routes
app.use("/api/v1/jobs", require("./routes/api/Jobs"));
app.use("/api/v1/gigs", require("./routes/api/Gigs"));
app.use("/api/v1/admin", require("./routes/api/Admin"));

//Static files
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = 5050 || process.env.PORT;
app.listen(port, () => console.log("App is running on port 5050"));
