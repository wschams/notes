/*global $*/
(function () {
    'use strict';
    const apiEndpoint = 'https://jsonplaceholder.typicode.com',
        titleElem = $('#title'),
        contentElem = $('#content'),
        NUM_POSTS = 3;

    function displayPosts(posts, postListElem) {
        postListElem.empty();
        posts.forEach(post => {
            $(`<li>
                    <h2>${post.title}</h2>
                    ${post.body}
                </li>`
            ).appendTo(postListElem);
        });
    }

    function loadBlog(blog) {
        let index = 0,
            nextButton,
            prevButton;

        titleElem.text(`${blog.name}'s Blog`);
        contentElem.empty();
        const postListElem = $('<ul></ul>').appendTo(contentElem);

        $.getJSON(`${apiEndpoint}/posts?userId=${blog.id}`, posts => {
            function update() {
                displayPosts(posts.slice(index, index + NUM_POSTS) , postListElem);
                
                if(index <= 0) {
                    prevButton.hide();
                } else {
                    prevButton.show();
                }

                if(index >= posts.length - NUM_POSTS) {
                    nextButton.hide();
                } else {
                    nextButton.show();
                }
            }

            prevButton = $('<button>prev</button>').appendTo(contentElem)
                .click(() => {
                    index -= NUM_POSTS;
                    update();
                });

            nextButton = $('<button>next</button>').appendTo(contentElem)
                .click(() => {
                    index += NUM_POSTS;
                    update();
                });

            update();
        });
    }

    function loadBlogs() {
        titleElem.text('The Big List Of Blogs');
        contentElem.empty();
        const blogList = $('<ul></ul>').appendTo(contentElem);

        $.getJSON(`${apiEndpoint}/users`, blogs => {
            blogs.forEach(blog => {
                $(`<li><a href="#">
                        Name: ${blog.name}<br/>
                        Website: ${blog.website}<br/>
                        Company: ${blog.company.name}
                        </a>
                    </li>`
                ).appendTo(blogList)
                 .click(() => {
                    loadBlog(blog);
                 });
            });
        });
    }

    $('#blogListLink').click(e => {
        e.preventDefault();
        loadBlogs();
    });

    loadBlogs();
}());