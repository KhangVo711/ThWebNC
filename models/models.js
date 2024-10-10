import pool from '../connectDB'

const getAllUser = async () => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`')
    return rows
}
const addUser = async (username, password, fullname, address, sex, email) => {
    await pool.execute('INSERT INTO `users` (`username`, `password`, `fullname`, `address`, `sex`, `email`) VALUES (?, ?, ?, ?, ?, ?)', [username, password, fullname, address, sex, email])

}

export default { getAllUser, addUser}