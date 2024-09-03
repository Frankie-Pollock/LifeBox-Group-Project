const express = require('express');
const app = express();
require('dotenv').config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const uRoute = require("./routes/uRoute");
const aRoute = require('./routes/aRoute')

app.use('/api/user', uRoute)
app.use('/api/AdminInfo', aRoute)
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node server started at ${port}`));