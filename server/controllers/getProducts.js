const products = require('../../products.json')


module.exports = {
  getProducts: (req, res) => {
    const { price } = req.query

    if (!price) {
      return res.status(200).send(products)
    } else {
      products.filter(element => {
        console.log(price)
        if (element.price === +price) {
          return res.status(200).send(element)
        }
      })
    } res.status(404).send('We do not have any products at that Price')
  },

  getProductById: (req, res) => {

    // console.log(req.params)
    const { id } = req.params
    const product = products.find(element => element.id === +id)

    if (product) {
      res.status(200).send(product)
    } else {
      res.status(404).send(`Product number entered, was not found`)
    }
  }
}