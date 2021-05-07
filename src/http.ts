
import express from 'express'
import { createServer } from 'http'
import { router } from './Routes'
import './database'
import { Server, Socket } from 'socket.io'
import path from 'path'

const app = express()
app.use(express.static(path.join(__dirname, '../', 'public')))
app.set('views', path.join(__dirname, '..', 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html') // the type of engine is set to html
const http = createServer(app)// criando meu server http
const io = new Server(http)// criando meu server websocket

app.get('/chat/client', (req, res) => {
  res.render('html/client.html')// when inside public no need to type .html but u can
})
app.get('/chat/admin', (req, res) => {
  res.render('html/admin.html')// when inside public no need to type .html but u can
})
app.get('*', (req, res) => {
  res.send('localhost:8081/chat/client<br>' + 'localhost:8081/chat/admin')
})

// connection when the user connect to ws for the first time
// server side
io.on('connection', (socket:Socket) => {
  // console.log('conectado ao socket.io' + socket.id)
})
app.use(express.json())
app.use(router)

export { http, io }
