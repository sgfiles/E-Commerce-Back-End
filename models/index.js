// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const router = require('../routes');

// Products belongsTo Category
router.use('/categories', categoryRoutes);
// Categories have many Products
router.use('/products', productRoutes);
// Products belongToMany Tags (through ProductTag)
router.use('/tags', tagRoutes);
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
