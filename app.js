const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require('@google-cloud/debug-agent').start();

const port = 8080;

require("./router")(app);
app.use(cors());

app.listen(port, ()=>{
    console.log("Listening on port:" + port);
})
