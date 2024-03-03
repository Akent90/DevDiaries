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

// Route to render the login page
router.get('/login', (req, res) => {
    // Check if user is already logged in
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    // If not logged in, render the login page
    res.render('login', {
        layout: 'main'
    });
});

// Route to render the signup page
router.get('/signup', (req, res) => {
    // Check if user is already logged in
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    // If not logged in, render the signup page
    res.render('signup', {
        layout: 'main'
    });
});

module.exports = router;
