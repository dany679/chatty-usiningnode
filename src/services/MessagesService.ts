import { getCustomRepository } from "typeorm"
import { MessagesRepository } from "../repositories/MessagesRepository"
interface IMessages{
  text:string;
  user_id:string;
  admin_id?:string; //the ? mind optional (if not string well be null)
}

class MessagesService{
  async create({ text,user_id,admin_id}:IMessages){

    const messagesRepository=  getCustomRepository(MessagesRepository);
    const message= messagesRepository.create(
      {
        text,
        user_id,
        admin_id,
      })
    await messagesRepository.save(message)
    return message;
  }
  async ListUserTalk(user_id:string){
    const messagesRepository=  getCustomRepository(MessagesRepository);
    const list= await messagesRepository.find({
      where: {user_id},
      relations:["user"],
      })
    await messagesRepository.save(list)
    return list;
  }

}
export {MessagesService}