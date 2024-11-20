import userModel from '../models/models.js'
import bcrypt from 'bcrypt';
import userModelsql from '../models/userModel.js';  

const getHome = async (req, res) => {
    let userList = await userModel.getAllUser()
    return res.render("home", { url: req.url,  data: {title: 'List User', rows: userList} })
}

const saltRounds = 10;

const getMain = async (req, res) => {
    // Lấy danh sách user
    let userList = await userModel.getAllUser();

    let {username, role, password, fullname, address, sex, email, action} = req.body;

    try {
        if (action === 'add' || action === 'edit') {
            // Xử lý thêm hoặc cập nhật người dùng
            if (username && role && password && fullname && address && sex && email) {
                // Hash the password before storing it
                const hashedPassword = await bcrypt.hash(password, saltRounds);

                if (action === 'add') {
                    await userModel.addUser(username, role, hashedPassword, fullname, address, sex, email);
                } else if (action === 'edit') {
                    await userModel.updateUser(username, role, hashedPassword, fullname, address, sex, email);
                }
                return res.redirect('/');
            }
        }

        // Xử lý xóa người dùng
        const userName = req.params.username;
        if (userName) {
            await userModel.deleteUser(userName);
            return res.redirect('/');
        }

        return res.render("main", { url: req.url, data: {title: 'List User', rows: userList} });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).send('Server Error');
    }
}

export default {getMain, getHome}