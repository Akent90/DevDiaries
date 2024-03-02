function withAuth(req, res, next) {
    if (!req.session.userId) {
        res.status(403).json({ message: 'You must be logged in to perform this action!' });
    } else {
        next();
    }
}

module.exports = withAuth;