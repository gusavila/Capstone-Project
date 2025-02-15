import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let text = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    text.push(req.body["message"]);
    res.render("index.ejs", {textPosted: text}); 
});

app.post("/delete", (req, res) => {
    text = [];
    res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
