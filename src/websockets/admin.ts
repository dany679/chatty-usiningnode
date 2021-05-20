import { io } from '../http'
import { ConnectionsService } from '../services/ConnectionsService'
import { MessagesService } from '../services/MessagesService'

io.on('connect', async (socket) => {
  const connectionsService = new ConnectionsService()
  const messagesService = new MessagesService()
  const connectionsServiceNoAdmin = await connectionsService.findTalksNoAdmin()
  io.emit('TalksWithNoAdm', connectionsServiceNoAdmin)
  socket.on('admin-list_messages_by_user', async (params, callback) => {
    const { user_id } = params
    const allMessages = await messagesService.ListUserTalk(user_id)
    callback(allMessages)
  })
  socket.on('admin_send_messages', async params => {
    const { user_id, text } = params
    await messagesService.create({ user_id, text, admin_id: socket.id })
    const { socket_id } = await connectionsService.findUserIdCon(user_id)
    io.to(socket_id).emit('admin_send_to_client', {
      text,
      socket_id: socket.id
    })
  })
  socket.on('admin_in_call_to_user', async params => {
    const { user_id } = params
    const admin_id = socket.id
    await connectionsService.updateAdminId(user_id, admin_id)
    const connectionsServiceNoAdmin = await connectionsService.findTalksNoAdmin()
    io.emit('TalksWithNoAdm', connectionsServiceNoAdmin)
  })
})
