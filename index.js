// REST api

const express = require("express");
const app = express();
app.use(express.json());   // middleare to parse JSON in request body



app.listen(
    3001, () => console.log("App is running..."))


app.get("/endpoint", (req, res) => {
    res.status(200).send("this is a test");
});

//users endpoint shows users
app.get("/users", (req, res) => {
    res.status(200).send([
        { name : "John", id : 1 },
        { name: "Jane", id: 2 }
    ]);
});


// defining a POST endpoint to add data to the /user/2 route
app.post("/user/2", (req, res) => {
    const name = req.body.name;
    if(!name) {
        res.status(400).send({message: "Please add name of the user"})
    }
    else if (name !== "John" && name !== "Jane") {
        res.status(400).send({message: "You entered the wrong name"})
    } else {
    res.send({name: name, id: 2});
    }
});