import express from 'express'
import { router } from '../Routes'
import './database'

const app = express()
// # routs types
/**
 * Post=send
 * Get= take for some place
 * Put=alter
 * patch= alter specific
 */
app.use(express.json())
app.use(router)
const port = 8081
app.listen(port, () => { console.log('server in port ' + port) })
