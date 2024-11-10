const supabase = require('../config/supabaseClient.cjs');

async function getProducts() {
    const { data, error } = await supabase
        .from('products')
        .select('*');

    if (error) {
        console.error('Error fetching products:', error);
        return [];
    }

    return data;
}

async function addProduct(product) {
    const { data, error } = await supabase
        .from('products')
        .insert([product]);

    if (error) {
        console.error('Error adding product:', error);
        return null;
    }

    return data;
}

module.exports = { addProduct, getProducts };