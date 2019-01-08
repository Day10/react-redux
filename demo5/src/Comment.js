import React, { Component } from 'react'

class Comment extends Component {
  render() {
    return (
        <div>
            <span>{this.props.name}</span> : 
            <span>{this.props.content}</span>                
        </div>
    )
  }
}

export default Comment