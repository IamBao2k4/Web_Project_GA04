const supabase = require('../config/supabaseClient.cjs');

async function getDetails(productId) {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('product_id', productId);

    if (error) {
        console.error('Error fetching details:', error);
        return [];
    }

    return data[0];
}

async function addDetail(detail) {
    const { data, error } = await supabase
        .from('product_details')
        .insert([detail]);

    if (error) {
        console.error('Error adding detail:', error);
        return null;
    }

    return data;
}

module.exports = { addDetail, getDetails }; 