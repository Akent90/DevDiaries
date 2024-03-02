const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

// Importing model files
const UserModel = require('./User');
const PostModel = require('./Post');
const CommentModel = require('./Comment');

// Initialize models 
const User = UserModel(sequelize, Sequelize.DataTypes);
const Post = PostModel(sequelize, Sequelize.DataTypes);
const Comment = CommentModel(sequelize, Sequelize.DataTypes);

// Define associations 
User.hasMany(Post, { foreignKey: 'userId', as: 'posts '});
Post.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Post.hasMany(Comment, { foreignKey: 'postId', as: 'comments' });
Comment.belongsTo(Post, { foreignKey: 'postId', as: 'post' });

// Export models and sequelize connection 
module.exports = {
    sequelize, 
    Sequelize,
    User, 
    Post, 
    Comment
};