const router = require("express").Router(),
  multer = require("multer"),
  upload = multer({ dest: "uploads/" }),
  UserSchema = require("../models/User"),
  { check, validationResult } = require("express-validator");

// Register user
router.post(
  "/user/register",
  upload.single("avatar"),
  [check("text").isLength({ min: 3 }), check("avatar").isEmpty()],
  function(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { file, body } = req;

    const userSchema = new UserSchema({
      avatar: {
        fileName: file.fieldname,
        mimetype: file.mimetype,
        name: file.filename,
        size: file.size
      },
      userName: body.text
    });

    userSchema
      .save()
      .then(sucess => res.status(201).send(sucess))
      .catch(err =>
        res.status(409).json({
          errors: [
            {
              msg: "user already exists"
            }
          ]
        })
      );
  }
);

// Login 
router.post('/user/login', async ( req, res ) => {
     const { userName } = req.body;
     const user = await UserSchema.findOne( { userName: userName });
     if( user ) {
        res.status(200).json(user);
     } else {
        res.status(401).json('Wrong creditinals');
     }          
})

module.exports = router;
