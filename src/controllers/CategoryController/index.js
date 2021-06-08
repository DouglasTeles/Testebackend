const Category = require('../../models/category')
 const CategoryController = {

    async createCategory(req, res){

        const bodyData = req.body

        try {

            const newCategory = await Category.create(bodyData)
            return res.status(200).json(newCategory)


        } catch (error) {
            console.log(error)
            return res.status(400).json(error)
        }

    },

    async getCategory(req, res){

        
        try {

            const getCategory = await Category.find()
            return res.status(200).json(getCategory)

        } catch (error) {
            return res.status(400).json(error)
        }

    },

    async updateCategory(req, res){

        const {idCategory} = req.params
        const bodyData = req.body
        

        try {
            
            const updateCategory = await Category.findByIdAndUpdate(idCategory, bodyData, {new:true})
            return res.status(200).json(updateCategory)
            
        } catch (error) {
            
            return res.status(400).json(error)
        }

    },
    async deleteCategory(req, res){

        const {idCategory} = req.params
            

        try {
            
            const deleteCategory = await Category.findByIdAndDelete(idCategory)
            return res.status(200).json(deleteCategory)
            
        } catch (error) {
            
            return res.status(400).json(error)
        }

    }

}
module.exports = CategoryController
