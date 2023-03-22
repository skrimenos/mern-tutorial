const express = require('express');
const router = express.Router();

const goalController = require('../controllers/goalController')

router.route('/').get(goalController.getGoals).post(goalController.setGoal);

router.route('/:id').delete(goalController.deleteGoal).put(goalController.putGoal);

module.exports = router;