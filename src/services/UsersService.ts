import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository'

class UsersService {
  async create (email:string) {
    const usersRepository = getCustomRepository(UsersRepository)
    const UserAlreadyExist = await usersRepository.findOne({ email })
    if (UserAlreadyExist) {
      // throw new  Error("User ja exist")
      return UserAlreadyExist
    }
    const Users = usersRepository.create({ email })
    await usersRepository.save(Users)
    return Users
  }
}
export { UsersService }
