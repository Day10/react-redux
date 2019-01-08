import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments: [
                { name: 'Lucy', content: 'Good' }
            ]
        }
    }
    handleSubmit(comment) {
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
    }

    render() {
        return (
            <div>
                <CommentInput onSubmit={this.handleSubmit.bind(this)} />
                <CommentList commentList={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp