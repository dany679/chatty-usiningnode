import { getCustomRepository, Repository } from 'typeorm'
import { Users } from '../entities/Users'
import { UsersRepository } from '../repositories/UsersRepository'

class UsersService {
  private usersRepository : Repository<Users>
  constructor () {
    this.usersRepository = getCustomRepository(UsersRepository)
  }

  async create (email:string) {
    const UserAlreadyExist = await this.usersRepository.findOne({ email })
    if (UserAlreadyExist) {
      // throw new  Error("User ja exist")
      return UserAlreadyExist
    }
    const Users = this.usersRepository.create({ email })
    await this.usersRepository.save(Users)
    return Users
  }

  async findByEmail (email:string) {
    const UserAlreadyExist = await this.usersRepository.findOne({ email })
    if (UserAlreadyExist) {
      return UserAlreadyExist
    }
  }
}
export { UsersService }
