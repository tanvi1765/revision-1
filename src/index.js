const express = require("express");
const http = require("http");
const routes = require("./routes");
const config = require("./config/config");
const { connectDB } = require("./db/db.connection");
const bodyParser = require("body-parser");

const app = express();

connectDB();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/v1", routes);

app.use(express.static(`./public`));
/** Database connection */

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server is started");
});