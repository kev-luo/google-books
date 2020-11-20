require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api", require("./routes/api"));
app.use("/", require("./routes/root"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to db");
    app.listen(PORT, () => {
      console.log(`API server listening on port ${PORT}`);
    });
  });
