const express = require('express')
const app = express()
const router = express.Router()
const {getHomePage, getCreatePage, postCreateStudent, getEditPage, postEditStudent, 
    getDeletePage, postDeleteStudent} = require ('../controller/homeController')

router.get('/', getHomePage)

router.get('/create', getCreatePage)

router.post('/create-student', postCreateStudent)

router.get('/edit/:id', getEditPage)

router.post('/edit-student', postEditStudent)

router.get('/delete/:id', getDeletePage)

router.post('/delete-student', postDeleteStudent)
module.exports = router //export default



