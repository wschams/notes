import React, { Component } from 'react';

export default class BlogInfo extends Component {

    //child getting from parent by caling parent function
    handleClick = () => {
        this.props.blogSelected(this.props.blog);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <h2 style={{ margin: 0 }}>{this.props.blog.name}</h2>
                {this.props.blog.website} <br />
                {this.props.blog.company}
            </div >
        );
    }
}
