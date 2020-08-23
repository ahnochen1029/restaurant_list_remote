const express = require('express')
const app = express()
const port = 3000

const exphds = require('express-handlebars')
const resuaurantList = require('./restaurant.json')

app.engine('handlebars', exphds({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index', { restaurants: resuaurantList.results })
})

app.get('/restaurants/:id', (req, res) => {
  console.log('req.params', req.params.id)
  const restaurant = resuaurantList.results.find(restaurant => restaurant.id.toString() === req.params.id)
  res.render('show', { restaurant: restaurant })
})

//setting static files
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`The website is http://localhost:${port}`)
})