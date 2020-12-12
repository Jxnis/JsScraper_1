const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')

app.get('/creators', async(req, res) => {
  res.send(creators);
})

app.post('/creators', async(req, res) => {
    console.log(req.body)
    const channelData = await scrapers.scrapeChannel(req.body.channelUrl)

    res.send('success')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})