
const express = require('express');

const Tests = require('../data/db');

const router = express.Router();

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


module.exports = router;