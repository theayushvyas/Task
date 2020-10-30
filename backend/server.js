const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const url = "mongodb://localhost:27017/kyratechnologies";
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const DetailsRouter = require('./routes/Detail');

app.use('/app/users', DetailsRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
