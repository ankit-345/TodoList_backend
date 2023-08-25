const Products = require('../models/Product')

// Fetch all the task
const getAllItems = async(req, res) =>{
    const products = await Products.find({});
    if(products.length === 0){
        res.status(204).json({products});
    }else{
        res.status(200).json({products});
    }
}


// Create a Single task
const createItem = async(req, res) =>{
    const product = await Products.create(req.body);
    res.status(200).json({msg: 'Product created successfully', product});
}


// Update a single Task
const updateItem = async(req, res) =>{
    const id = req.params.id;
    const product = await Products.findOneAndUpdate({_id: id}, req.body, {
        new: true,
        runValidators: true
    })
    if(!product){
        throw new Error(`No task with id ${id}`);
    }
    res.status(200).json({msg: 'Updated Successfully', product});
}

// Delete a single Task
const deleteItem = async(req, res)=>{
    const id = req.params.id;
    const product = await Products.findOneAndDelete({_id: id});

    if(!product){
        throw new Error(`No task with id ${id}`);
    }
    res.status(200).json({msg: 'Deleted Successfully', product});
}

// Delete All Task
const deleteAllItem = async(req, res)=>{
    const product = await Products.deleteMany({});
    res.status(200).json({msg: 'Deleted All Items Successfully', product});
}

module.exports = {
    getAllItems,
    updateItem,
    createItem,
    deleteItem,
    deleteAllItem
}