import { getCustomRepository, Repository } from 'typeorm'
import { Settings } from '../entities/Settings'
import { SettingsRepository } from '../repositories/SettingsRepository'
// if you never use interface understand like
// like one const type of once you set the type you need to follow
interface ISettings{
  chat:boolean;
  username:string;
}

class SettingsService {
  private settingsRepository: Repository<Settings>
  constructor () {
    this.settingsRepository = getCustomRepository(SettingsRepository)
  }

  async create ({ username, chat }:ISettings) {
    // search in database the parameter limit to on -> findOne
    // sql => select * from settings where username = username limit 1
    const userAlreadyExist = await this.settingsRepository.findOne({ username })
    if (userAlreadyExist) {
      // throw works send the erro to the block try/catch
      throw new Error('user already exist')
    }
    const settings = this.settingsRepository.create({
      username,
      chat
    }
    )
    await this.settingsRepository.save(settings)
    return settings
  }

  async findByUserName (username:string) {
    const settings = await this.settingsRepository.findOne({ username })
    return settings
  }

  async update (username:string, chat:boolean) {
    const settings = await this.settingsRepository.createQueryBuilder()
      .update(Settings)
      .set({ chat })
      .where('username: = username', {
        username: username
      })
      .execute()
    return settings
  }
}

export { SettingsService }
