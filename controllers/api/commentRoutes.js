const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all comments 
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Post a new comment 
router.post('/', withAuth, async (req, res) => {
    try {
        if (req.session) {
            const newComment = await Comment.create({
                commentText: req.body.commentText,
                postId: req.body.postId,
                userId: req.session.userId,
            });
            res.status(200).json(newComment);
        }
    } catch (err) {
        res.status(400).json(err);
    }
});