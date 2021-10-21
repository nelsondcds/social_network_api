const router = require('express').Router();
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/user-controller');

router
  .route('/')
  .get(getAllPizza)
  .post(createPizza);

router
  .route('/:userId')
  .get(getPizzaById)
  .put(updatePizza)
  .delete(deletePizza);

router
  .route('/:userId/friends/:friendId')
  .post(updatePizza)
  .delete(deletePizza);

module.exports = router;