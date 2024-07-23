import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.send({
    message: 'Helo API auth'
  })
})

app.listen(PORT, (req, res) => {
  console.log('Server listenig on port:' + PORT)
})
