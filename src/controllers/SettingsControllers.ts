import { Request, Response, } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repository/SettingsRepository";

class SettingsControllers {
    async create(req:Request,res:Response){
      const {username,chat}= req.body;
      const settingsRepository = getCustomRepository(SettingsRepository);
      const settings= settingsRepository.create({
        chat,
        username,
      }
      );
      await settingsRepository.save(settings);
      return res.json({settings});
    }
    }
export{SettingsControllers}