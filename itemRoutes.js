const express = require("express");
const router = new express.Router();
const {addProduct} = require("./function")
const expressError = require("./ExpressError")

router.get("/", (req,res) =>{
    if(! "/"){
        throw new expressError("invalid link", 403)
    }
    res.json(items);
})


router.post("/", (req, res) => {

    const {name, price} = req.body
    const newProduct = addProduct(name, price)

    res.status(201).json(newProduct);

    // res.send("Hey it's working!")
})

router.delete("/ :name", (req, res)=>{

  const { name } = req.params;
  const index = items.findIndex((item) => item.name === name);

  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  const deletedItem = items.splice(index, 1);
  res.json({ message: "Item deleted", deletedItem });
});


router.patch("/ :name",  (req,res) => {

    const { name } = req.params;
    const newData = req.body;

    const oldData = items.find((item) => item.name === name);
    if (!oldData) {
      return res.status(404).json({ error: "Data not found" });
    }

    oldData.name = newData.name;
    oldData.price = newData.price;

    res.json({ message: "Data updated", updatedData: dataToUpdate });
})


module.exports = router;


