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
  function (req, res, next) {
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
        size: file.size,
      },
      userName: body.text,
    });

    userSchema
      .save()
      .then((sucess) => res.status(201).send(sucess))
      .catch((err) =>
        res.status(409).json({
          errors: [
            {
              msg: "user already exists",
            },
          ],
        })
      );
  }
);

// Login
router.post("/user/login", async (req, res) => {
  const { userName } = req.body;
  const user = await UserSchema.findOne({ userName: userName });
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(401).json("Wrong creditinals");
  }
});

// Search
router.get("/user/search", async (req, res) => {
  const { query } = req.query,
    { token } = req.headers;

  if (!token) {
    res.status(404).send("not authorized");
  }
  console.log(query);
  const users = await UserSchema.find({ userName: query }, (err, users) => {
    users.filter((user) => user._id !== token);
  });
  res.status(200).send(users);
});

/**
 * @POST
 * ADD friends
 */

router.post("/user/friends/:userId", async (req, res) => {
  const { userId } = req.params,
    { token } = req.headers;
  const user = await UserSchema.findOne({ _id: token });
  await user.friends_ids.push({ friend_id: userId });
  await user.save();
  res.status(200).send({ type: "success" });
});

router.get("/user/friends", async (req, res) => {
  const { token } = req.headers;
  const user = await UserSchema.findOne({ _id: token });
  const friends_ids = user.friends_ids;
  const userPromise = friends_ids.map(async ({ friend_id }) => {
    const friend = await UserSchema.findOne({ _id: friend_id });
    return friend;
  });
  res.status(200).send(await Promise.all(userPromise));
});

module.exports = router;
