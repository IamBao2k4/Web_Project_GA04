const supabase = require('../config/supabaseClient.cjs');

async function getImages() {
    const { data, error } = await supabase
        .from('product_image')
        .select('*');

    if (error) {
        console.error('Error fetching images:', error);
        return [];
    }

    return data;
}

async function addImage(image) {
    const { data, error } = await supabase
        .from('product_images')
        .insert([image]);

    if (error) {
        console.error('Error adding image:', error);
        return null;
    }

    return data;
}

module.exports = { addImage, getImages };
