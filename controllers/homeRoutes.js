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

// Logout route for ending the session with a GET request
router.get('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(err => {
            if (err) {
                console.error('Logout error:', err);
                res.status(500).send('Error occurred while logging out.');
            } else {
                res.redirect('/login');
            }
        });
    } else {
        // If the user is not logged in, redirect them to the login page
        res.redirect('/login');
    }
});

module.exports = router;
