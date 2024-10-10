import mysql from 'mysql2';

// Tạo kết nối với cơ sở dữ liệu
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'users',
    password: ''
});

// Sử dụng promise để xử lý kết nối
const connection = pool.promise();

// Hàm kiểm tra kết nối
async function checkConnection() {
    try {
        // Thực hiện một truy vấn để kiểm tra kết nối
        await connection.query('SELECT 1');
        console.log('Kết nối cơ sở dữ liệu thành công!');
    } catch (error) {
        console.error('Lỗi kết nối cơ sở dữ liệu:', error.message);
    }
}

// Kiểm tra kết nối ngay lập tức khi import
checkConnection();

export default connection;
