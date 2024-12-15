const fs = require('fs')
const path = require('path')

const express = require('express')

const app = express()

app.use(express.urlencoded({extended: false}))

app.get('/currenttime',function (req, res) {   //route
  res.send('<h1>' + new Date().toISOString() +'</h1>')
})

app.get('/', function (req,res) {
  res.send('<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"></form>')
})

app.post('/store-user', function(req, res){
  const userName = req.body.username
  const filePath = path.join(__dirname, 'data', 'users.json')
  const fileData = fs.readFileSync(filePath)
  const existingUsers = JSON.parse(fileData)
  existingUsers.push(userName)

  fs.writeFileSync(filePath,JSON.stringify(existingUsers))
  console.log(userName)
  res.send('<h1>UserName is stored!</h1>')
})

app.get('/user', function(req,res) {
  const filePath = path.join(__dirname, 'data', 'users.json')
  const fileData = fs.readFileSync(filePath)
  const existingUsers = JSON.parse(fileData)

  let resData = '<h1>Here are the usernames</h1><ul>'

  for(const user of existingUsers){
    resData = resData + '<li> ' + user + ' </li>'
  }

  resData = resData + '</ul>'

  res.send(resData)
})


app.listen(3000)

// function handleRequest(request, response) {
//   if (request.url === '/currenttime') {
//     response.statusCode = 200
//     response.end('<h1>' + new Date().toISOString() +'</h1>')
//   }
//   else if (request.url === '/'){
//     response.statusCode = 200
//   response.end('<h1> Hello World! </h1>')
// }
//   }
  

// const server = http.createServer(handleRequest)

// server.listen(3000)