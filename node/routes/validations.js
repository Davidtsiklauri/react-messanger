const router = require('express').Router(),
      User =   require('../models/User');

router.get('/validations',  async ( req, res ) => {    
       try {
           const users = await User.find( { userName: req.query['0'] }, {$exists: true}  );
           const isExists = { exists: users.length > 0 };
           res.status(200).json(isExists);
       } catch ( e ) {
           res.status(409).json('server error');
       }
});

module.exports = router;