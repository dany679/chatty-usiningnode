import{Router} from "express"
import { SettingsControllers } from "./controllers/SettingsControllers";
import { UsersController } from "./controllers/UsersControllers";
const router= Router();
/**
 * routes params is what have after / normal be one number
 * exemplo http/something/1
 * query params is what have of information
 *  exemplo http/something/search=listNumbers
 * body params is whats come to the file in may case i use insomnia
 */
const settingsControllers= new SettingsControllers();
const userControllers = new UsersController();

router.post("/settings", settingsControllers.create)
router.post("/users", userControllers.create)

export{router}