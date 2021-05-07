import { http } from './http'
import './websockets/client'
import './websockets/admin'

const port = 8081
console.log('remember start the xampp in case decide use him')
http.listen(port, () => { console.log('server in port ' + port) })
