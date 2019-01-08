import React, { Component } from 'react'

class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            content: ''
        }
    }
    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    changeContent(e) {
        this.setState({
            content : e.target.value
        })
    }

    handleSubmit() {
        if (this.props.onSubmit) {
            let { name, content } = this.state;
            this.props.onSubmit({ name, content })
        };
        this.setState({ content: ''})
    }

    _saveLocal() {
        localStorage.setItem('name', this.state.name);
        console.log(localStorage)
    }

    _loadUsername () {
        const name = localStorage.getItem('name')
        if (name) {
          this.setState({ name })
        }
    }

    handleNameBlur() {
        this._saveLocal()
    }
    
    componentDidMount() {
        this.textarea.focus();
        this._loadUsername()
    }

    render() {
        return (
            <div>
                <label>用户名：</label>
                <input value={this.state.name}
                    onChange={this.changeName.bind(this)}
                    onBlur={this.handleNameBlur.bind(this)}
                ></input>
                <label>内容：</label>
                <textarea ref={textarea => this.textarea = textarea} value={this.state.content} onChange={this.changeContent.bind(this)}></textarea>
                <button onClick={this.handleSubmit.bind(this)}>发布</button>
            </div>
        )
    }
}

export default CommentInput