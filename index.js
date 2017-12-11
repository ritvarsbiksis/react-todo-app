const path = require('path')
const express = require('express')
const app = express()
const PORT = 3033

app.use(express.static(path.join(__dirname, 'public')))
app.listen(PORT, () => {
  console.log('Express server started on port ' + PORT)
})
