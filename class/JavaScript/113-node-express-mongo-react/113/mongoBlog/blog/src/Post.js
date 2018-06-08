import React, { Component } from 'react';

export default class Post extends Component {
    render() {
        return (
            <div id="{this.props.post._id}">
                <h2>{this.props.post.title}</h2>
                <h3>by {this.props.post.author} at {this.props.post.date}</h3>
                <div>{this.props.post.content}</div>
            </div>
        );
    }
}