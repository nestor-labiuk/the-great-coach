const app = require('./src/app')
require('dotenv').config()

app.listen(process.env.PORT, () => console.log('server listening on port', process.env.PORT))
