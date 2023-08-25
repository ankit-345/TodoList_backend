const express = require('express');
const router = express.Router();
const {
    getAllItems,
    updateItem,
    createItem,
    deleteItem,
    deleteAllItem,
} = require('../Controllers/Products');

router.get('/', getAllItems);
router.patch('/:id', updateItem);
router.post('/', createItem);
router.delete('/:id', deleteItem);
router.delete('/', deleteAllItem);

module.exports = router;