  // Đảm bảo rằng model đã được nhập đúng

async function getProducts(req, res) {
    try {
        const { getProducts } = await import('../models/productModel.cjs');
        const products = await getProducts();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching products');
    }
}

module.exports = { getProducts };
