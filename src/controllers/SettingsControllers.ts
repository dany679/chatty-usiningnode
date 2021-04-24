import { Request, Response, } from "express";
import { SettingsService } from "../services/SettingsService";

// work basic like app.post with req e res params
class SettingsControllers {
    async create(req:Request,res:Response){
      const {chat,username} =req.body;
      const settingsService =  new SettingsService()
     try {
      const settings = await settingsService.create({username,chat})
      return res.json(settings);
     } catch (error) {
       // the 400 error is code error basic our error  
       return res.status(400).json({ message: error.message })
     }
    }
  }
    export {SettingsControllers}