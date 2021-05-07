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
})
