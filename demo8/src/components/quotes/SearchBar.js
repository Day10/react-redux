import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getQuotes} from '../state/actions/quoteActions'

class SearchBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            filter: ''
        }
    }

    searchChange = (e) => {
        let filter = e.target.value;
        this.props.getQuotes(filter);
        this.setState({
            filter
        });
    }

    render() {
        return (
            <div>
                <input value={this.state.filter}
                    onChange={this.searchChange}
                ></input>
                {this.state.filter}
            </div>
        )
    }
}

SearchBar.propTypes = {
    getQuotes: PropTypes.func
};


// CONFIGURE REACT REDUX

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getQuotes }, dispatch);
};

const hoc = connect(null, mapDispatchToProps)(SearchBar);


// EXPORT COMPONENT

export { hoc as SearchBar };