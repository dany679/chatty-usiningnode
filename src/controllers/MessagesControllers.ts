
import { Request, Response } from 'express'
import { MessagesService } from '../services/MessagesService'

class MessagesControllers {
  async create (req:Request, res:Response) {
    const { text, user_id, admin_id } = req.body
    const messagesService = new MessagesService()
    const message = await messagesService.create({ text, user_id, admin_id })
    return res.json({ message })
  }

  async ListAllTalks (req:Request, res:Response) {
    const { id } = req.params// take by the http/localhost:port/id =>this id by get
    const messagesService = new MessagesService()
    const AllTalks = await messagesService.ListUserTalk(id)
    return res.json({ AllTalks })
  }
}
export { MessagesControllers }
