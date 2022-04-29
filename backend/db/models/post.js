'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    title: DataTypes.STRING,
    photo: DataTypes.TEXT,
    categoryId: DataTypes.INTEGER
  }, {});

  Post.write = async ({ userId, content, title, photo, categoryId}) => {
    const post = await Post.create({
      userId,
      categoryId,
      content,
      photo,
      title
    });

    return await post;
  };

  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User, { foreignKey: 'userId' })

    Post.belongsTo(models.Category, { foreignKey: 'categoryId' })
  };
  return Post;
};
