const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const chefs = require('./data/chefs.json');
app.use(cors())
app.get('/', (req, res) => {
  res.send('Chefs world');
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const chef_id = req.params.id;
    const chef = chefs.find(n => n.id === chef_id)
    res.send(chef)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})