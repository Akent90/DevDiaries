const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

// Route to render the dashboard page, only for logged-in users
router.get('/', withAuth, async (req, res) => {
    try {
        // Fetch posts from the database where the user id matches the session user id
        const postData = await Post.findAll({
            where: {
                userId: req.session.userId
            }
        });

        // Serialize the data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('dashboard', {
            layout: 'main',
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;