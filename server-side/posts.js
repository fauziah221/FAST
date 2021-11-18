const express = require('express')
const router = express.Router();
const UserSchema = require('./models/UsersSchema')
const ExerciseSchema = require('./models/ExerciseSchema')


router.get('/', (req, res) => {
    res.send('We are home')
})

router.post('/', (req, res) => {
    const post = new UserSchema({
        Username: req.body.Username,
        Email: req.body.Email,
        Password: req.body.Password,
    });

    post.save()
    .then(date => {
        res.json(data);
    })
    .catch(err =>{
        res.json({message: err})
    })
})

module.exports = router