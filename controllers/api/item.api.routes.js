const router = require('express').Router();
const {Item} = require('../../models');

// GET individual item
router.get("/id/:id", async (req, res) => {
    try {
      const payload = await Item.findByPk(req.params.id);
      res.status(200).json({ status: "success", payload });
    } catch (err) {
      res.status(500).json({ status: "error", payload: err.message });
    }
  })

// GET all items
router.get("/", async (req, res) => {
    try {
        const payload = await Item.findAll();
        res.status(200).json({ status: "success", payload });
    } catch(err){
        res.status(500).json({ status: "error", payload: err.message });
    }
})


// GET all helmets
router.get("/helmet", async (req, res) => {
    try {
        const payload = await Item.findAll({where : { item_type: 'helmet'} });
        res.status(200).json({ status: "success", payload });
    } catch(err){
        res.status(500).json({ status: "error", payload: err.message });
    }
})

// GET all torso
router.get("/torso", async (req, res) => {
    try {
        const payload = await Item.findAll({ where : { item_type: 'armor'}});
        res.status(200).json({ status: "success", payload });
    } catch(err){
        res.status(500).json({ status: "error", payload: err.message });
    }
})

// GET all weapons
router.get("/weapon", async (req, res) => {
    try {
        const payload = await Item.findAll({ where : { item_type: 'weapon'}});
        res.status(200).json({ status: "success", payload });
    } catch(err){
        res.status(500).json({ status: "error", payload: err.message });
    }
})

// GET all boots
router.get("/boot", async (req, res) => {
    try {
        const payload = await Item.findAll({ where : { item_type: 'boot'}});
        res.status(200).json({ status: "success", payload });
    } catch(err){
        res.status(500).json({ status: "error", payload: err.message });
    }
})

// GET all gems
router.get("/gem", async (req, res) => {
    try {
        const payload = await Item.findAll({ where : { item_type: 'gem'}});
        res.status(200).json({ status: "success", payload });
    } catch(err){
        res.status(500).json({ status: "error", payload: err.message });
    }
})

// GET all shields
router.get("/shield", async (req, res) => {
    try {
        const payload = await Item.findAll({ where : { item_type: 'shield'}});
        res.status(200).json({ status: "success", payload });
    } catch(err){
        res.status(500).json({ status: "error", payload: err.message });
    }
})

module.exports = router;

