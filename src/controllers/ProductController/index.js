const Product = require('../../models/product')

const ProductController = {
    
    async createProductCategory(req, res) {

        const {category_id} = req.params
        
        const bodyData = req.body
        

        try {
            const data = {category_id:category_id,...bodyData}

            const createProductCategory = await Product.create(data) 
            

            return res.status(200).json(createProductCategory)

        } catch (error) {
            return res.status(400).json(error)
        }

    },
    
    async getProduct(req, res) {

        try {

            const getProdutcs = await Product.find()
            return res.status(200).json(getProdutcs)
        } catch (error) {
            return res.status(400).json(error)
        }

    },async updateProduct(req, res) {

        const {product_id} = req.params
        const bodyData = req.body

        try {

            const updateProduct = await Product.findByIdAndUpdate(product_id, bodyData, {new:true})
            return res.status(200).json(updateProduct)
            
        } catch (error) {
            return res.status(400).json(error)
        }

    },async deleteProductId(req, res) {

        const {product_id} = req.params
        

        try {
            
            const deleteProductId = await Product.findByIdAndDelete(product_id)
            return res.status(200).json(deleteProductId)

        } catch (error) {
            return res.status(400).json(error)
        }

    },async getProductCategory(req, res) {

        const {category_id} = req.params
        
        try {
        
        const getProductCategory = await Product.find({category_id})
            
        return res.status(200).json(getProductCategory)
        } catch (error) {
            return res.status(400).json(error)
        }

    }

}

module.exports = ProductController