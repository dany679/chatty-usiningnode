import{Router} from "express"
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./src/repository/SettingsRepository"

const router= Router();
/**
 * routes params is what have after / normal be one number
 * exemplo http/something/1
 * query params is what have of information
 *  exemplo http/something/search=listNumbers
 */


router.post("/settings", async (req, res) => {
  const {username,chat}= req.body;
  const settingsRepository = getCustomRepository(SettingsRepository);
  const settings= settingsRepository.create({
    chat,
    username,
  }
  );
  await settingsRepository.save(settings)
  return res.json({settings})
})

export{router}