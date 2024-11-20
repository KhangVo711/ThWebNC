import connectDB from "../connectDB.js";
// // Nhom
const getAllProductType = async () => {
    const [rows, fields] = await connectDB.execute('SELECT `maloai`, `tenloai` FROM `loaisanpham`')
    return rows
}




// // SP
const getAllProduct = async () => {
    const [rows, fields] = await connectDB.execute('SELECT * FROM `sanpham`, `loaisanpham`, `nhasanxuat` WHERE `sanpham`.maloai = `loaisanpham`.maloai AND `sanpham`.mansx = `nhasanxuat`.mansx')
    return rows
}

const detailProduct= async (id) => {
    const [rows, fields] = await connectDB.execute('SELECT * FROM `sanpham` WHERE masp=?', [id])
    return rows[0]
}

// // SP



export default {getAllProductType, getAllProduct, detailProduct}
