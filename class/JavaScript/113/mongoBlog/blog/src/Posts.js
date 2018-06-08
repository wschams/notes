import React, { Component } from 'react';
import Post from './Post';
import $ from 'jquery';

export default class Posts extends Component {
    state = { posts: [] };

    componentDidMount() {
        /*fetch("/posts", {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(res => res.json())
            .then(posts => this.setState({ posts }));*/

        $.getJSON('/posts', posts => this.setState({ posts }));
    }

    render() {
        const posts = this.state.posts ? this.state.posts.map(p => <Post key={p._id} post={p} />) : null;

        return (
            <div>
                {posts}
            </div>
        );
    }
}