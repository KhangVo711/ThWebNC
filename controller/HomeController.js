import userModel from '../models/models.js'

const getHome = async (req, res) => {
    let userList = await userModel.getAllUser()
    return res.render("home", { url: req.url,  data: {title: 'List User', rows: userList} })
}

const getMain = async (req, res) => {
    // Lấy danh sách user
    let userList = await userModel.getAllUser();
    
    let {username, password, fullname, address, sex, email, action} = req.body;
    if (action === 'add') {
        // Xử lý thêm người dùng mới
        if(username && password && fullname && address && sex && email) {
            await userModel.addUser(username, password, fullname, address, sex, email);
            return res.redirect('/');
        }
    } else if (action === 'edit') {
        // Xử lý cập nhật người dùng
        if(username && password && fullname && address && sex && email) {
            await userModel.updateUser(username, password, fullname, address, sex, email);
            return res.redirect('/');
        }
    }
    const userName = req.params.username;
    if (userName) {
        await userModel.deleteUser(userName);
    }

    return res.render("main", { url: req.url, data: {title: 'List User', rows: userList} });
};

export default {getMain, getHome}