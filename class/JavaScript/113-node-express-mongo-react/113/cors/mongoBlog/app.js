const express = require('express'),
    app = express(),
    path = require('path'),
    mongo = require('mongodb'),
    bodyParser = require('body-parser');

let posts;
app.locals.title = 'Express Mongo Blog';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});*/

app.use(require('cors')());

app.get('/posts', (req, res, next) => {
    posts.find().toArray((err, posts) => {
        res.end(JSON.stringify(posts));
    });
});

app.use(require('./basicAuth')({
    realm: app.locals.title,
    users: {
        donald: 'trump',
        me: 'p@$$w0rd'
    }
}));

app.get('/new-post', (req, res, next) => {
    res.render('layout', {
        subtitle: "New Post",
        partials: {
            content: 'newPost'
        }
    });
});

app.post('/new-post', (req, res, next) => {
    const newPost = {
        title: req.body.title,
        content: req.body.content,
        date: new Date(),
        author: res.locals.user
    };

    posts.insert(newPost, (err, result) => {
        if (err) {
            next(err);
        }
        console.log(result);
    });

    res.redirect('/');
});

app.listen(8080);

mongo.MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        console.error(err);
    }
    const db = client.db('blog');
    posts = db.collection('posts');
});