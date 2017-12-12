const path = require('path')
const express = require('express')
const app = express()
const PORT = 3033

app.use(express.static(path.join(__dirname, 'public')))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
  console.log('Express server started on port ' + PORT)
})
