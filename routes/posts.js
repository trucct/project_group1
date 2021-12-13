const express = require('express')
const router = express.Router()

//Load Model
const Post = require('../models/Post')

//Hiển thị form để tạo bài viết mới
router.get('/add',(req, res)=> {
    res.render('posts/add')
})

//Tạo post mới
router.post('/', async(req, res)=> {
    const {title, text} = req.body

    let error = []

    if (!title) error.push({msg})
})

module.exports = router