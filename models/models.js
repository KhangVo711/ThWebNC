import pool from '../connectDB'

const getAllUser = async () => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`')
    return rows
};
const getInfUser = async (username) => {
    const [rows, fields] = await pool.execute("SELECT * FROM users WHERE username = ?", [username]);
    return rows[0];
};

const addUser = async (username, role, password, fullname, address, sex, email) => {
    await pool.execute('INSERT INTO users (username, role, password, fullname, address, sex, email) VALUES (?, ?, ?, ?, ?, ?, ?)', [username, role, password, fullname, address, sex, email]);
};
const updateUser = async (username, role, password, fullname, address, sex, email) => {
    await pool.execute('UPDATE users SET role =?, password = ?, fullname = ?, address = ?, sex = ?, email = ? WHERE username = ?', [role, password, fullname, address, sex, email, username]);
};

const deleteUser = async (userName) => {
    await pool.execute('DELETE FROM users WHERE username = ?', [userName]);
};


export default { getAllUser, addUser, deleteUser, updateUser, getInfUser}