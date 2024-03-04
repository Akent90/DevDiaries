const router = require('express').Router({ mergeParams: true });
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const postId = req.params.postId;

        if (!req.session.userId || !postId || !req.body.commentText) {
            return res.status(400).json({ message: 'Missing comment data or not logged in' });
        }

        const newComment = await Comment.create({
            commentText: req.body.commentText,
            postId: postId, 
            userId: req.session.userId
        });

        res.redirect(`/posts/${postId}`);
    } catch (err) {
        console.error(err);
        res.redirect('/error');
    }
});

// // Get all comments 
// router.get('/', async (req, res) => {
//     try {
//         const commentData = await Comment.findAll();
//         res.status(200).json(commentData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // Delete a comment 
// router.delete('/:id', withAuth, async (req, res) => {
//     try {
//         const commentData = await Comment.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         });
//         if (!commentData) {
//             res.status(404).json({ message: 'No comment found with this id!' });
//             return;
//         }
//         res.status(200).json(commentData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;