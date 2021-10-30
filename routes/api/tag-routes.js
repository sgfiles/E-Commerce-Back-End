const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => { // find all tags
  try {
    const tagData = await Tag.findAll({
      include: {
        model: Product // be sure to include its associated Product data
      },
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, { // find a single tag by its `id`
      include: {
        model: Product  // be sure to include its associated Product data
      },
    });
    if (!tagData) {
      res.status(404).json({
        message: 'No tag with this id'
      });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);// create a new tag
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, { // update a tag's name by its `id` value
      where: {
        id: req.params.id,
      },
    });
    if (!tagData[0]) {
      res.status(404).json({
        message: 'No tag with that id'
      });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
  
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({  // delete on tag by its `id` value
      where: {
        tag_id: req.body.tag_id,
      },
    });
    if (!tagData) {
      res.status(404),json({
        message: 'No tag exists with that id'
      });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
