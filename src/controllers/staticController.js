module.exports = {
    about(req, res, next){
        res.render("static/partials/about", {title: "About Us"});
    },
    index(req, res, next){
        res.render("static/index", {title: "Welcome to Bloccit"});
    }
  };
