
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


// Read - Retrieve post by id

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
});


// Create - Add a post to db

router.post('/', async (req, res) => {
    const newPost = req.body;
    try{
    if(!newPost.title || !newPost.contents) {
        res.status(400).json({ errorMessage: "Please provide title and contents for the post."  })
    } else {
        const post = await Tests.insert(req.body);
        res.status(201).json(post);
    }
} catch(err) {
    res.status(500).json({
        error: "There was an error while saving the post to the database" 
     })
}
})

// Delete - Delete a post

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    
    try {
        const removePost = await Tests.remove(id);
        if (removePost > 0) {
            res.status(200).json({message: "The post has been successfully deleted!"})
        } else {
            res.status(500).json({
               message: "The post with the specified ID does not exist." 
            })
        }

    } catch(err) {
        res.status(500).json({
          error: "The post could not be removed."  
         })
    }
})













module.exports = router;