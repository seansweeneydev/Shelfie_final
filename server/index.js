require('dotenv').config()
const express = require('express')
      massive = require('massive')
      ctrl = require('./controller.js')
const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('db connected')
})

//ENDPOINTS
app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.addItem)
app.put('/api/product/:id', ctrl.updateItem)
app.delete('/api/product/:id', ctrl.deleteItem)


app.listen(SERVER_PORT, () => 
  console.log(`Server running on: ${ SERVER_PORT }`))