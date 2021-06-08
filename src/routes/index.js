const {Router} = require('express')
const routes = Router()


//Routes Category
const CategoryController = require('../controllers/CategoryController')
routes.post('/categoria', CategoryController.createCategory)//create category
routes.get('/categoria', CategoryController.getCategory) //get category
routes.patch('/categoria/:idCategory', CategoryController.updateCategory)//update category
routes.delete('/categoria/:idCategory', CategoryController.deleteCategory) //delete category

//Products
const ProductController = require('../controllers/ProductController')
routes.post('/produto/:category_id', ProductController.createProductCategory )//Cadastrar produto a uma categoria
routes.get('/produto', ProductController.getProduct)//Listar todas os produtos
routes.patch('/produto/:product_id', ProductController.updateProduct)//atualizar produto 
routes.delete('/produto/:product_id', ProductController.deleteProductId)//Deletar produto 
routes.get('/produto/:category_id', ProductController.getProductCategory)//listar produtos de uma categoria


module.exports = routes