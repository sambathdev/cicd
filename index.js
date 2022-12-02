const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World! Exelent, Perfect. The dream. Let go. We can do it. Just be patient.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
