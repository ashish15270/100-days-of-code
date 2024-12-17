const express = require('express')
const router = express.Router()
const db = require('../data/database')

router.get('/', function(req, res){
  res.redirect('/posts')
})

router.get('/posts', async function(req, res){
  const query = `select post.*, author.name as author_name
   from post join author 
   on post.author_id = author.id`
  const [posts] = await db.query(query)
  res.render('posts-list',{posts:posts})
})

router.get('/new-post', async function(req, res){
  const [authors] = await db.query('select * from author')
  res.render('create-post', {authors : authors})
})

router.post('/posts', async function(req, res){

  const data = [
    req.body.title,
    req.body.summary,
    req.body.content,
    req.body.author,
  ]
  await db.query('insert into post (title, summary, body, author_id) values (?);',[data])
  res.redirect('/posts')
})

router.get('/posts/:id', async function (req, res) {
  const query = `select post.*, author.name as author_name,
  author.email as author_email from blog.post
   join blog.author on
  post.author_id = author.id
  where post.id = ?`
  const [posts] = await db.query(query,[req.params.id])

  if (!posts || posts.length === 0){
    res.status(404).render('404')
    return
  }

  const postData = {
    ...posts[0],
    date: posts[0].date.toISOString(),
    humanReadableDate: posts[0].date.toLocaleDateString('en-US', {
      weekday: 'long',
      yearly: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  res.render('post-detail',{posts: postData})
 
 // const [post]
})

router.get('/posts/delete/:id',async function(req, res){
  const query = `select post.*,  author.name as author_name,
  author.email as author_email from blog.post join author
  on author.id = post.author_id where post.id not in (?)`
  const [posts] = await db.query(query,[req.params.id])
  res.render('posts-list',{posts:posts})
})

router.get('/posts/:id/edit',async function(req, res) {
  const query = `select * from blog.post where id = ?`
  const [posts] = await db.query(query, [req.params.id])

  if (!posts || posts.length === 0){
    res.status(404).render('404')
    return
  }
  res.render('update-post',{post: posts[0]})
})

router.post('/posts/:id/edit', async function(req, res){
  const query = "update blog.post set title = ?, summary = ?, body = ? where post.  id = ?"
  await db.query(query,[req.body.title, req.body.summary, req.body.content, req.params.id])

  res.redirect('/posts')
})
module.exports = router