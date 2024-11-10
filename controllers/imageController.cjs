 // Đảm bảo rằng model đã được nhập đúng

async function getImages(req, res) {
    try {
        const { getImages } = require('../models/imageModel.cjs');
        const images = await getImages();
        res.json(images);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching images');
    }
}

module.exports = { getImages };
