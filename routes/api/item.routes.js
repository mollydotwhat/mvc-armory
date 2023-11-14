const router = require('express').Router();
const { Item } = require('../../models/Item');


router.get('/', async (req, res) => {
  const userData = await Item.findAll().catch((err) => {
    res.json(err);
  });
  res.json(userData);
});

module.exports = router;