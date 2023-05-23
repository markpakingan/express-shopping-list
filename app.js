const express = require("express");
const items = require("./fakeDb")
const {addProduct} = require("./function")
const itemRoutes = require("./itemRoutes")
// const ExpressError = require("./expressError");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

// links the itemRoutes
app.use("/items", itemRoutes)

// NOTE: Always put at the end
app.listen(5000, () => {
    console.log("App on port 5000")
}) 
