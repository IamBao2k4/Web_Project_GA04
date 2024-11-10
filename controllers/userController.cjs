async function getUsers(req, res) {
    try {
        const { getUsers } = await import('../models/userModel.cjs');
        const users = await getUsers();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching users');
    }
}

async function insertUser(req, res) {
    try {
        const { insertUser } = await import('../models/userModel.cjs');
        const user = req.body;
        const newUser = await insertUser(user);
        res.json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error inserting data');
    }
}

module.exports = {
    getUsers,
    insertUser,
};
