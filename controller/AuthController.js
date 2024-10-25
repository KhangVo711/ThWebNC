import models from '../models/models.js';
import bcrypt from 'bcrypt';
import JWTAction from '../middleware/jwt.js';
import jwt from 'jsonwebtoken';

const saltRounds = 10;

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Fetch the user based on the username
    const existingUser = await models.getInfUser(username);
    console.log(existingUser);
    
    if (!existingUser) {
      return res.status(400).json({ message: 'Username không tồn tại' });
    }
    
    // Compare the entered password with the hashed password in the database
    const isPasswordMatch = await bcrypt.compare(password, existingUser.password);
    
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Mật khẩu không đúng' });
    }
    
    const payload = {
      username: existingUser.username,
      role: existingUser.role,
      fullname: existingUser.fullname,
      email: existingUser.email
    };

    const token = JWTAction.createJWT(payload);
    console.log(token);
    res.cookie("jwt", token, { path: "/", httpOnly: false, secure: false, sameSite: 'Strict' });
    
    // If password matches, return success message
    return res.status(200).json({ message: 'Đăng nhập thành công', token, user: existingUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi xảy ra bên server' });
  }
};
const registerUser = async (req, res) => {
  try {
    const { username, password, role, fullname, address, sex, email } = req.body;
    const existingUser = await models.getInfUser( username );
    if (existingUser > 0) {
      return res.status(400).json({ message: 'Username đã tồn tại' });
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const NewUser = await models.addUser( username, role, hashedPassword, fullname, address, sex, email);
    console.log(NewUser)
    // If password matches, return success message
    return res.status(200).json({ message: 'Đăng ký thành công', user: NewUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi xảy ra bên server' });
  }
};

export default { loginUser, registerUser };
