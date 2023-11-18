const connection = require('../config/database')

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getHomePage = async(req, res) => {
    const [result, fields] = await connection.query('select * from Students')
    res.render('home.ejs', {listStudents: result})
}

const postCreateStudent = async (req, res) => {
    const name = req.body.myname
    const myclass = req.body.myclass
    const phone = req.body.myphone
    const email = req.body.myname
    const address = req.body.myaddress

    const [result, fields] = await connection.query('insert into Students (name, class, phone, email, address) values (?, ?, ?, ?, ?)', [name, myclass, phone, email, address])

    res.redirect('/')
}

const getEditPage = async(req, res) => {
    const studentId = req.params.id
    const [result, fields] = await connection.query('select * from Students where id = ?', [studentId])
    const user = result && result.length > 0 ? result[0] : {}
    res.render('edit.ejs', {student: user})
}

const postEditStudent = async(req, res) => {
    const id = req.body.myid
    const name = req.body.myname
    const myclass = req.body.myclass
    const phone = req.body.myphone
    const email = req.body.myname
    const address = req.body.myaddress

    const [result, fields] = await connection.query('update Students set name = ?, class = ?, phone = ?, email = ?, address = ? where id = ?', [name, myclass, phone, email, address, id])

    res.redirect('/')
}

const getDeletePage = async(req, res) => {
    const studentId = req.params.id
    const [result, fields] = await connection.query('select * from Students where id = ?', [studentId])
    const user = result && result.length > 0 ? result[0] : {}
    res.render('delete.ejs', {student: user})
}

const postDeleteStudent = async(req, res) => {
    const id = req.body.myid
    const [result, fields] = await connection.query('delete from Students where id = ?', [id])
    res.redirect('/')
}

module.exports = {getHomePage, getCreatePage, postCreateStudent, getEditPage, postEditStudent, 
    getDeletePage, postDeleteStudent}