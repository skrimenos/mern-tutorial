const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel')

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals);
})

const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.constructor === Object && !Object.keys(req.body).length == 0) {
        res.status(400)
        throw new Error('Add parameters to request')
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    return res.status(200).json(goal);

})

const putGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    return res.status(200).json(updatedGoal);
})

const deleteGoal = asyncHandler(async (req, res) => {

    // remove by id
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error('Goal not found')
    }

    const goalRes = await Goal.findByIdAndDelete(goal.id);

    console.log(goalRes);

    return res.status(200).json({ id: req.params.id });
})

module.exports = {
    getGoals, setGoal, putGoal, deleteGoal
}