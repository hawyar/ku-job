if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();

const expressLayout = require("express-ejs-layouts");
const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");

app.use(expressLayout);
app.use(express.static("public"));
app.use("/", indexRouter);

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://hawyar:redpilot03140314@mflix-mfkkh.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Mongoose is connected"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
