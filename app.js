const express = require('express')
const app = express()
const port = 3000

const exphds = require('express-handlebars')
const resuaurantList = require('./restaurant.json')

app.engine('handlebars', exphds({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  // const restaurantOne = {
  //   image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5635/01.jpg',
  //   title: 'Sababa 沙巴巴中東美食食食食',
  //   category: '中東料理理理理',
  //   rating: '4.11111',
  // }
  res.render('index', { restaurants: resuaurantList.results })
})

// app.get('/restaurants/1', (req, res) => {

// })

//setting static files
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`The website is http://localhost:${port}`)
})