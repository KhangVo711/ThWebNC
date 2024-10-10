import userModel from '../models/models.js'

const getHome = async (req, res) => {
    let userList = await userModel.getAllUser()
    let {username, password, fullname, address, sex, email} = req.body
  
    await userModel.addUser(username || null, password || null, fullname || null, address || null, sex || null, email || null)

    return res.render("home", { url: req.url,  data: {title: 'List User', rows: userList} })
}

const getMain = async (req, res) => {
    let userList = await userModel.getAllUser()
    let {username, password, fullname, address, sex, email} = req.body
  
    await userModel.addUser(username, password, fullname, address, sex, email)
    return res.render("main", { url: req.url, data: {title: 'List User', rows: userList} })
}
export default {getMain, getHome}