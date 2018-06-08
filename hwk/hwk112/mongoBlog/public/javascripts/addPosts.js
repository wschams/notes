const addPosts = getElementById('addPosts');
addPosts.addEventListenter('click', function() {
    const newComment = {
        title: title,
        content: content,
        date: new Date(),
        author: res.locals.user
    };  
    posts.insert(newComment, (err, result) => {
        if(err) {
            next(err);
        }
        console.log(result);
    });

});