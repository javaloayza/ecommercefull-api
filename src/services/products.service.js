const { Product, Category, Brand, Review, User, Order, OrderItem } = require('../db')
/* Importing the operators from sequelize. */
const { Op } = require('sequelize')
const cloudinary = require('../config/cloudinary-config')

async function getProducts (options = {}) {
  const { search, brand, minPrice, maxPrice, category, sort, page = 1 } = options
  const itemsPerPage = 9
  const offset = itemsPerPage * (page - 1)
  /* Creating an object with the properties that will be used to search the database. */
  const dbSearchOptions = {
    include: {
      model: Category,
      attributes: ['name']
    },
    limit: itemsPerPage,
    offset,
    where: {},
    order: [['id', 'ASC']]
  }
  /* Checking if the search variable is truthy, if it is, it will add a new property to the
dbSearchOptions.where object. */
  search && (dbSearchOptions.where.name = { [Op.iLike]: `%${search}%` })
  brand && (dbSearchOptions.where.brandId = brand)
  minPrice && (dbSearchOptions.where.price = { [Op.gte]: minPrice })
  maxPrice && (dbSearchOptions.where.price = { [Op.lte]: maxPrice })
  minPrice && maxPrice && (dbSearchOptions.where.price = { [Op.between]: [minPrice, maxPrice] })
  category && (dbSearchOptions.where.categoryId = category)
  sort && (dbSearchOptions.order = [sort.split(',')])

  /* Searching the database for the products that match the search criteria. */
  const results = await Product.findAndCountAll(dbSearchOptions)
  /* Creating a pagination object that will be used to determine if the user can go to the next page or
  the previous page. */
  const pagination = {
    hasNext: results.count > itemsPerPage * page,
    hasPrevious: page > 1,
    currentPage: page
  }
  results.pagination = pagination
  return results
}

async function getProductDetail (productID, user) {
  const dbSearchOptions = {
    include: [
      {
        model: Category,
        attributes: ['name', 'id']
      },
      {
        model: Brand,
        attributes: ['name', 'id']
      }
    ],
    where: {
      id: productID
    }
  }

  const product = (await Product.findOne(dbSearchOptions)).toJSON()
  const reviews = await Review.findAll({ where: { productId: productID } })
  product.reviews = reviews

  return product
}

async function canReview (productId, email) {
  try {
    // console.log(productId)
    if (email) {
      let userId = await User.findOne({ where: { email } })
      userId = userId.id
      const userOrders = await Order.findAll({ where: { userId } })
      if (userOrders) {
        const orderId = userOrders.map(orden => orden.id)
        const orderItem = await OrderItem.findAll({ where: { orderId } })
        // console.log(orderItem)
        let boolean = false
        productId = Number(productId)
        orderItem.forEach((el) => {
          if (el.dataValues.productId === productId) {
            boolean = true
            return true
          }
        })
        // console.log(boolean)
        return boolean
      }
    }
  } catch (error) {
    return error
  }
}

async function uploadImage (filePath) {
  return await cloudinary.uploader.upload(filePath, {
    /* Creating a folder in the cloudinary account. */
    folder: 'e-commerce1'
  })
}

async function deleteImage (id) {
  return await cloudinary.uploader.destroy(id)
}

async function saveProduct (product) {
  let [savedProduct, category] = await Promise.all([Product.create(product), Category.findOne({ where: { id: product.categoryId } })])
  savedProduct = savedProduct.toJSON()
  savedProduct.category = { name: category.name }

  return savedProduct
}

async function updateProduct (newValues, id) {
  return await Product.update(newValues, { where: { id } })
}

async function removeProduct () {
  // placeholder function
}

module.exports = {
  getProducts,
  getProductDetail,
  canReview,
  uploadImage,
  deleteImage,
  saveProduct,
  updateProduct,
  removeProduct
}
