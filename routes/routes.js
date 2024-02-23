const express = require('express')
const router = express.Router();

const { dummy } = require('../controllers/dymmy')
const { createPost } = require('../controllers/post/create')
const { likePost } = require('../controllers/like/create')
const { commentPost } = require('../controllers/comment/create')
const { fetchPost } = require('../controllers/post/fetch')
const { commentFetch } = require('../controllers/comment/fetch')
const { fetchLike } = require('../controllers/like/fetch')
const {likeRemove} = require('../controllers/like/remove')


router.post('/createPost', createPost)
router.post('/commentPost', commentPost)
router.post('/likePost', likePost)
router.get('/fetchPost', fetchPost)
router.get('/commentFetch', commentFetch)
router.get('/fetchLike', fetchLike)
router.get('/dummy', dummy)
router.delete('/likeRemove',likeRemove)



module.exports = router