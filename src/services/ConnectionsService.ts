import { getCustomRepository, Repository } from 'typeorm'
import { Connections } from '../entities/Connections'
import { ConnectionsRepository } from '../repositories/ConnectionsRepository'

interface IConnections{
  admin_id?:string;
  user_id:string;
  socket_id:string;
  id?:string;
}

class ConnectionsService {
  private ConnectionsRepository: Repository<Connections>
  constructor () {
    this.ConnectionsRepository = getCustomRepository(ConnectionsRepository)
  }

  async create ({ admin_id, user_id, socket_id, id }:IConnections) {
    const connections = this.ConnectionsRepository.create({
      admin_id,
      user_id,
      socket_id,
      id
    })
    await this.ConnectionsRepository.save(connections)
    return connections
  }

  async findUserIdCon (user_id:string) {
    const connections = this.ConnectionsRepository.findOne({
      user_id
    })
    return connections
  }

  async findTalksNoAdmin () {
    const connections = this.ConnectionsRepository.find({
      where: { admin_id: null },
      relations: ['user']
    })
    return connections
  }
}
export { ConnectionsService }
