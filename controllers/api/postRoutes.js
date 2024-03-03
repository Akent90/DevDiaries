const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all posts 
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll();
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a new post 
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            userId: req.session.userId,
        });
        res.redirect('/dashboard');
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update a post by its id value 
router.put('/:id', withAuth, async (req, res) => {
    try {
        const postUpdate = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!postUpdate) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        res.redirect('/dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a post 
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        res.redirect('/dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;