import { MessagesControllers } from '../controllers/MessagesControllers'
import { io } from '../http'
import { ConnectionsService } from '../services/ConnectionsService'
import { MessagesService } from '../services/MessagesService'
import { UsersService } from '../services/UsersService'
io.on('connect', (socket) => {
  const messagesService = new MessagesService()
  const connectionsService = new ConnectionsService()
  socket.on('first-connection-client', async (params) => {
    const usersService = new UsersService()
    console.log(params)
    const { text, email } = params
    const socket_id = socket.id
    const userExist = await usersService.findByEmail(email)
    let user_id = null
    if (!userExist) {
      const userNew = await usersService.create(email)
      await connectionsService.create({
        socket_id,
        user_id: userNew.id
      })
      user_id = userNew.id
    } else {
      user_id = userExist.id
      // save connection
      const connection = await connectionsService.findUserIdCon(userExist.id)
      if (!connection) {
        await connectionsService.create({
          socket_id,
          user_id: userExist.id
        })
      } else {
        connection.socket_id = socket_id
        await connectionsService.create(connection)
      }
    }

    await messagesService.create({
      text,
      user_id
    })
    const allMessages = await messagesService.ListUserTalk(user_id)
    socket.emit('clientListMessages', allMessages)
    const allUsers = await connectionsService.findTalksNoAdmin()
    io.emit('admin_list_all_users', allUsers)
  })
  socket.on('client_send_to_admin', async params => {
    const { text, socket_admin_id } = params
    const { user_id } = await connectionsService.findBySocketID(socket.id)
    const messages = await messagesService.create({ text, user_id })
    io.to(socket_admin_id).emit('admin_receive_message', {
      messages,
      socket_id: socket.id
    })
  })
})
