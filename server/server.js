const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
const {default : mongoose} = require('mongoose');
mongoose.set("strictQuery", false);
app.use(express.static('uploads'));
connectDB();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use("/auth", require("./Auth/routes/authRoute"));
app.use("/admin", require("./Admin/routes/adminRouts"));
app.use("/users", require("./Users/routes/userRouts"));
app.use("/scouter", require("./scooter/Routes/ScouterRouts"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;




