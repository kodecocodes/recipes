import server from './src/server/index.js'
import { LogError, LogSuccess } from './src/utils/logger.js'


const port = 8000

// Execute SERVER

server.listen(port, () => {
  LogSuccess(`[SERVER ON]: Running in http://localhost:${port}/api`)
})

// Control SERVER ERROR
server.on('error', (error) => {
  LogError(`[SERVER ERROR]: ${error}`)
})
