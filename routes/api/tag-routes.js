const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const dataTag = await Tag.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(dataTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const idTag = await Tag.findByPk({
      include: [{model: Product}]
    });
    res.status(200).json(idTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update({
      where: {
        id: req.params.category_id
      }
    });
    res.status(200).json(updateTag);
    } catch (err) {
      res.status(500).json(err);
    };
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.category_id
      }
    });
    res.status(200).json(deleteTag);
    } catch (err) {
      res.status(500).json(err);
    };
});


module.exports = router;
