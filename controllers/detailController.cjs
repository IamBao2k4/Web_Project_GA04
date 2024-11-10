async function getDetail(req, res) {
    try {
        const { getDetails } = require('../models/detailModel.cjs');
        const productId = req.params.id;
        const detail = await getDetails(productId);
        if (detail) {
            res.json(detail);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching product detail');
    }
}

module.exports = {
    getDetail,
};
