const router = require('express').Router();
const { Post } = require('../models');

// Route to render the homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll();
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('home', {
            layout: 'main',
            posts
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;