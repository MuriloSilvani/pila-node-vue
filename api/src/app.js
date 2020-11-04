const express = require('express')
const cors = require('cors')

const routes = require('./routes')
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)
const connectedUsers = {}

io.on('connection', socket => {
  const { user } = socket.handshake.query
  connectedUsers[user] = socket.id
})
io.on('move', socket => {
  console.log(socket)
})
// app.use((req, res, next) => {
//   req.io = io
//   req.connectedUsers = connectedUsers
//   return next()
// })

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3000)
