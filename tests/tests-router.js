
const express = require('express');

const Tests = require('../data/db');

const router = express.Router();


// Read - Retrieving posts on http://localhost:9000/api/posts

router.get('/', async (req, res) => {
    try {
        const tests = await Tests.find();
        res.status(200).json(tests);
    } catch(error) {
        res.status(500).json({
            error: "The posts info could not be retrieved."
         })
    }
})

router.get('/:id', async (req, res) => {

    const  { id } = req.params;

    try {
    const test = await Tests.findById(id);
    if(test) {
        res.status(200).json(test);
    } else {
        res.status(404).json({ 
            message: "The post with the specified ID does not exist." 
         })
    }
    } catch(err) {
        res.status(500).json({
            error: "The posts info could not be retrieved."
         })
    }

})








module.exports = router;