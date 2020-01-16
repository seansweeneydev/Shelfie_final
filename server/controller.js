module.exports = {
  getInventory: async(req, res) => {
    const db = req.app.get('db')
    let data = await db.get_inventory()
    res.status(200).send(data)
  },

  addItem: async(req, res) => {
    const { name, price, img } = req.body
    console.log(req.body)
    const db = req.app.get('db')
    let data = await db.create_product([ name, price, img ])
    res.status(200).send(data)
  },

  updateItem: async(req, res) => {
    console.log(req.body)
    const { name, price, img } = req.body
    const { id } = req.params
    const db = req.app.get('db')
    let data = await db.update_item([ id, name, price, img ])
    res.status(200).send(data)
  },
  
  deleteItem: async(req, res) => {
    const { id } = req.params;
    const db = req.app.get('db')
    let data = await db.delete_item(id)
    res.status(200).send(data)
  }
}

