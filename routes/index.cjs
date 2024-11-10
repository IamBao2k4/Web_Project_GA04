const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Function to create routes for all pages in the views/pages folder
function createPageRoutes() {
    const pagesDir = path.join(__dirname, '../views/pages');
    fs.readdir(pagesDir, (err, files) => {
        if (err) {
            console.error('Could not list the directory.', err);
            process.exit(1);
        }

        files.forEach((file) => {
            const pageName = path.parse(file).name;
            router.get(`/${pageName}`, (req, res) => {
                res.render(`pages/${pageName}`, { title: 'Furniro' });
            });
        });
    });
}

// Create routes for all pages
createPageRoutes();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

module.exports = router;
