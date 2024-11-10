// models/productModel.js
const supabase = require('../config/supabaseClient.cjs');

async function getUsers() {
    const { data, error } = await supabase
        .from('users')
        .select('*');

    if (error) {
        console.error('Error fetching users:', error);
        return [];
    }

    return data;
}

async function addUser(user) {
    const { data, error } = await supabase
        .from('users')
        .insert([user]);

    if (error) {
        console.error('Error adding user:', error);
        return null;
    }

    return data;
}

module.exports = { addUser, getUsers };