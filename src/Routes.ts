import{Router} from "express"
import { getCustomRepository } from "typeorm";
import { SettingsControllers } from "./controllers/SettingsControllers";
import { SettingsRepository } from "./repository/SettingsRepository";
const router= Router();
/**
 * routes params is what have after / normal be one number
 * exemplo http/something/1
 * query params is what have of information
 *  exemplo http/something/search=listNumbers
 */
const settingsControllers= new SettingsControllers();

router.post("/settings", settingsControllers.create)

export{router}