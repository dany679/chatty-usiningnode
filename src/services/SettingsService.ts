import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
//if you never use interface understand like 
//like one const type of once you set the type you need to follow
interface ISettings{
  chat:boolean;
  username:string;
}

class SettingsService {
  async create({username,chat}:ISettings){
        const settingsRepository = getCustomRepository(SettingsRepository);
        //search in database the parameter limit to on -> findOne
        //sql => select * from settings where username = username limit 1
    const userAlreadyExist=  await settingsRepository.findOne({username});
     if (userAlreadyExist) {
        //throw works send the erro to the block try/catch
        throw new Error('user already exist')
    }
      const settings= settingsRepository.create({
        username,
        chat
      }
      );
      await settingsRepository.save(settings);
      return settings;
  }
}

export{SettingsService}