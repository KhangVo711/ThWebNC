import pool from '../connectDB'

const getAllUser = async () => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`')
    return rows
}
const addUser = async (username, password, fullname, address, sex, email) => {
    await pool.execute('INSERT INTO users (username, password, fullname, address, sex, email) VALUES (?, ?, ?, ?, ?, ?)', [username, password, fullname, address, sex, email]);
   
};
const updateUser = async (username, password, fullname, address, sex, email) => {
    await pool.execute('UPDATE users SET password = ?, fullname = ?, address = ?, sex = ?, email = ? WHERE username = ?', [password, fullname, address, sex, email, username]);
};

const deleteUser = async (userName) => {
    await pool.execute('DELETE FROM users WHERE username = ?', [userName]);
};


export default { getAllUser, addUser, deleteUser, updateUser}