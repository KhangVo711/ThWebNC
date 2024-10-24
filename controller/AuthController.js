import models from '../models/models.js';
import bcrypt from 'bcrypt';

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Fetch the user based on the username
    const existingUser = await models.getInfUser( username );
    console.log(existingUser)
    if (existingUser === 0) {
      return res.status(400).json({ message: 'Username không tồn tại' });
    }
  
    // Compare the entered password with the hashed password in the database
    const isPasswordMatch = await bcrypt.compare(password, existingUser.password);
  
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Mật khẩu không đúng' });
    }
  
    // If password matches, return success message
    return res.status(200).json({ message: 'Đăng nhập thành công', data: existingUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi xảy ra bên server' });
  }
};

export default { loginUser };
