const User = require("./models").User;
const bcrypt = require("bcryptjs");
const Post = require("./models").Post;
const Comment = require("./models").Comment;
const Favorite= require('./models').Favorite;

module.exports = {
// #2
  createUser(newUser, callback){

// #3
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(newUser.password, salt);

// #4
    return User.create({
      email: newUser.email,
      password: hashedPassword
    })
    .then((user) => {
      callback(null, user);
    })
    .catch((err) => {
      callback(err);
    })
  },
  getUser(id, callback){
    // #1
       let result = {};
       User.findById(id)
       .then((user) => {
    // #2
         if(!user) {
           callback(404);
         } else {
           result["user"] = user;
           Post.scope({method: ["lastFiveFor", id]}).findAll()
           .then((posts) => {
             result["posts"] = posts;
             Comment.scope({method: ["lastFiveFor", id]}).findAll()
             .then((comments) => {
               result["comments"] = comments;
               callback(null, result);
             })
             Favorite.scope({method: ["userFavorites", id]}).findAll()
             .then((comments) => {
               result["favorites"] = favorites;
               callback(null, result);
             })
             .catch((err) => {
               callback(err);
             })
           })
         }
       })
     }
}