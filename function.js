


function addProduct(name, price){

    const newProduct = {"name": name , "price": price}

    items.push(newProduct)

    return newProduct
}


module.exports = {addProduct}