const router = require('express').Router(),
      path = require('path');

router.get('/file/:id', ( req, res ) => {
    const id = req.params.id;
    res.sendFile( path.join(__dirname, `../uploads/${id}`) );
})

module.exports = router; 