const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',  async (req, res) => {
  try {
    const categoryData = await Category.findAll({ // find all categories
      include: [{
        model: Product// be sure to include its associated Products
      }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await id.findAll({//find one category by its `id` value
      include: [{
        model: Product /// be sure to include its associated Products
      }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => { // create a new category
  try {
    const categoryData = await Category.create({
      category_id: req.body.category_id,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// update a category by its `id` value
router.put('/:id', async  (req, res) => { 
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(404).json({
        message: "Not a valid category"
      });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});
 // delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        category_id: req.body.category_id,
      },
    });
    if (!categoryData) {
      res.status(404).json({
        message: "Category not found by id"
      });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
