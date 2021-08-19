const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const idCat = await Category.findAll(req.params.id, {
      include: [{ model: Product}]
    });
    res.status(200).json(idCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const primaryIdCat = await Category.findByPk(req.params.id, {
      include: [{ model: Product}]
    });
    res.status(200).json(primaryIdCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const createCat = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(createCat);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCat = await Category.update({
      where: {
        category_id: req.params.category_id
      }
    });
    res.status(200).json(updateCat);
    } catch (err) {
      res.status(500).json(err);
    };
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCat = await Category.destroy({
      where: {
        category_id: req.params.category_id
      }
    });
    res.status(200).json(deleteCat);
    } catch (err) {
      res.status(500).json(err);
    };
});

module.exports = router;
