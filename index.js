const express = require('express')
const app = express()

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('it works!')
})

app.get('/test', (req, res) => {
  res.send('still working')
})

app.listen(port, () => console.log(`listening on ${port}`))
