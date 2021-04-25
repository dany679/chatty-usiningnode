import { getCustomRepository, Repository } from 'typeorm'
import { Messages } from '../entities/Messages'
import { MessagesRepository } from '../repositories/MessagesRepository'
interface IMessages{
  text:string;
  user_id:string;
  admin_id?:string; // the ? mind optional (if not string well be null)
}

class MessagesService {
      private messagesRepository : Repository<Messages>
      constructor () {
        this.messagesRepository = getCustomRepository(MessagesRepository)
      }

      async create ({ text, user_id, admin_id }:IMessages) {
        const message = this.messagesRepository.create(
          {
            text,
            user_id,
            admin_id
          })
        await this.messagesRepository.save(message)
        return message
      }

      async ListUserTalk (user_id:string) {
        const list = await this.messagesRepository.find({
          where: { user_id },
          relations: ['user']
        })
        await this.messagesRepository.save(list)
        return list
      }
}
export { MessagesService }
