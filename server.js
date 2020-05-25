const express = require("express");
const app = express();
app.use(express.json());

//Routes
app.use("/api/v1/jobs", require("./routes/api/Jobs"));
app.use("/api/v1/gigs", require("./routes/api/Gigs"));
app.use("/api/v1/admin", require("./routes/api/Admin"));

const port = 5050 || process.env.PORT;
app.listen(port, () => console.log("App is running on port 5050"));
