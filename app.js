const express = require("express");
const morgan = require("morgan");
const path = require("path")

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.use(morgan(`dev`));

app.get("/", (req,res)=>{
    res.render("main");
});
app.use("/assets",express.static(path.join(__dirname, "/assets")));
app.listen(PORT, ()=>{
    console.log("4000 SERVER START");
});