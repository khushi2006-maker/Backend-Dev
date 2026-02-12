const express = require("express");
const app = express();

app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("form");   
});


app.post("/students/register", (req, res) => {
    console.log(req.body);   

    res.send("Student Registered Successfully ✅");
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});