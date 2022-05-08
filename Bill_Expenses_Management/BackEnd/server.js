const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const expenseRouter = require("./routes/expenses.js");


require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
});

mongoose.connection.once('open', () => {
    console.log("Mongodb connection is successfull!");
})

app.use("/expense", expenseRouter);


app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})