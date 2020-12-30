const router = require("express").Router(),
  messagesSchema = require("../models/Messages");

router.get("/messages/:id", async (req, res) => {
  const id = req.params.id;
  if (id) {
    const messages = await messagesSchema.find({ convId: id });
    res.status(200).send(messages);
  }
});

module.exports = router;
