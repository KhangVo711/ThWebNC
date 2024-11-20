import productsModel from '../models/ProductModel';

const getAllProductType = async (req, res) => {
    let Type = await productsModel.getAllProductType();

    return res.status(200).json({ type: Type });
}

const getAllProduct = async (req, res) => {
    let Product = await productsModel.getAllProduct();

    return res.status(200).json({ products: Product });
}

const detailProduct = async (req, res) => {
    let Detail = await productsModel.detailProduct();

    return res.status(200).json({ detail: Detail });
}

export default {getAllProductType, getAllProduct, detailProduct}
