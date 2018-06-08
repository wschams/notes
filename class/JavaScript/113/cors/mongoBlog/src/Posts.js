import React, { Component } from 'react';
import Post from './Post';

export default class Posts extends Component {
    state = { posts: [] };

    componentDidMount() {
        fetch("http://localhost:8080/posts")
            .then(res => res.json())
            .then(posts => this.setState({ posts }));
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