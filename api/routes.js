const express = require('express')
const knex = require('knex')(require('./knexfile'))
const bcrypt = require('bcryptjs');

const router = express.Router()

router.get('/questions', async (req, res) => {
  try {
    const questions = await knex.select().table('questions')
    res.json(questions)
  } catch (err) {
    res.status(500)
  }
})

router.post('/questions', async (req, res) => {
  const { text } = req.body
  try {
    const question = await knex('questions').insert({ text }, '*')
    res.json(question)
  } catch (err) {
    res.status(text ? 500 : 400)
  }
})

router.post('/signup', async (req, res) => {
  const {user} = req.body;
  try {
    const password = await bcrypt.hash(user.password, 10);
    user.password = password;
    const newUser = await knex('users').insert(user, '*');
    res.json(newUser);
    res.cookie('userId', newUser.user_id)
  } catch (err) {
    res.status(user ? 500 : 400)
  }
});

router.post('/login', async (req, res) => {
  const {user} = req.body;
  console.log(user);
  try {
    const currentUser = await knex.where({
      name: user.name
    }).select().table('users');
    console.log(currentUser);
    const valid = async () => {
      await bcrypt.compare(user.password, currentUser.password)
    }
    if (valid) {
      res.json(currentUser);
      res.cookie('userId', currentUser.user_id)
    }
  } catch (err) {
    res.status(500);
  }
});

router.post('/question', async (req, res) => {
  const { question, answer } = req.body.question;
  const user_id = req.cookies.userId;
  try {
    const questionResult = await knex.where({
      question_id: question
    }).insert({
      is_yes: answer,
      user_id
    }, '*')
    res.json(questionResult)
  } catch (err) {
    res.status(user_id ? 500 : 400);
  }
})

module.exports = router
