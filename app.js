const express = require("express");
const app = express();
const port = 5000;
const sendmail = require("./nodemail/nodemail")

app.use(express.json());

app.get("/", (req, res) => {
    res.send("i em danger")
});

app.get("/sendmail", sendmail);



app.listen(port, () => {
    console.log("port is running")
});