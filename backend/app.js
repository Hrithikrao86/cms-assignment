const express = require("express");
const cors = require("cors");
const pageRoutes = require("./routes/pageRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/pages", pageRoutes);

app.get("/", (req, res) => {
    res.send("CMS Backend is Running...");
});

module.exports = app;