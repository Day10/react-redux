import React, { Component } from 'react'
import Comment from './Comment';

class CommentList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.commentList.map((comment, i) => { 
                        return <Comment key={i} name={comment.name} content={comment.content}/>
                    })
                }
            </div>
        )
    }
}

export default CommentList