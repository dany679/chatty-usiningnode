import { Router } from 'express'
import { MessagesControllers } from './controllers/MessagesControllers'
import { SettingsControllers } from './controllers/SettingsControllers'
import { UsersController } from './controllers/UsersControllers'
const router = Router()
/**
 * routes params is what have after / normal be one number
 * exemplo http/something/1
 * query params is what have of information
 *  exemplo http/something/search=listNumbers
 * body params is whats come to the file in may case i use insomnia
 */
const settingsControllers = new SettingsControllers()
const userControllers = new UsersController()
const messagesControllers = new MessagesControllers()

router.post('/settings', settingsControllers.create)
router.get('/settings/:username', settingsControllers.findByUser)
router.put('/settings/:username', settingsControllers.update)

router.post('/users', userControllers.create)

router.post('/messages', messagesControllers.create)
router.get('/messages/:id', messagesControllers.ListAllTalks)

export { router }
// # routs types
/**
 * Post=send
 * Get= take for some place
 * Put=alter
 * patch= alter specific
 */
