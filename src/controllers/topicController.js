const topicQueries = require("../db/queries.topics.js");

module.exports = {
    index(req, res, next){
        topicQueries.getAllTopics((err, topics) => {
                    if(err){
                      res.redirect(500, "static/index");
                    } else {
                      res.render("topics/index", {topics});
                    }
                  })
                },
    new(req, res, next){
        res.render("topics/new");
                },
  // new(req, res, next){/* action implementation */},
   create(req, res, next){
     let newTopic = {
       title: req.body.title,
       description: req.body.description
     };
     topicQueries.addTopic(newTopic, (err, topic) => {
       if(err){
         res.redirect(500, "/topics/new");
       } else {
         res.redirect(303, `/topics/${topic.id}`);
       }
     });
    },
    destroy(req, res, next){
        topicQueries.deleteTopic(req.params.id, (err, topic) => {
          if(err){
            res.redirect(500, `/topics/${topic.id}`)
          } else {
            res.redirect(303, "/topics")
          }
        });
      },
      edit(req, res, next){
        topicQueries.getTopic(req.params.id, (err, topic) => {
          if(err || topic == null){
            res.redirect(404, "/");
          } else {
            res.render("topics/edit", {topic});
          }
        });
      },
    show(req, res, next){
             topicQueries.getTopic(req.params.id, (err, topic) => {
               if(err || topic == null){
                 res.redirect(404, "/");
               } else {
                 res.render("topics/show", {topic});
               }
             });
           }
   }