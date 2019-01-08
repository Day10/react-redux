import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { QuoteCard } from './QuoteCard'
import {SearchBar} from './SearchBar'
import {getQuotes} from '../state/actions/quoteActions'

class Quotes extends Component {
    componentDidMount() {
        this.props.getQuotes();
    }
    renderCards() {
        return this.props.quotes.map((quote, index) => {
            return this.renderCard(quote, index);
        })
    }
    renderCard(quote, index) {
        return <QuoteCard quote={quote} index={index} key={index}></QuoteCard>
    }

    render() {
        return (
            <div>
                <SearchBar/>
                {
                    this.props.quotes && 
                    <div>
                        {this.renderCards()}
                    </div>
                }
            </div>
        )
    }
}
Quotes.propTypes = {
    getFavoriteQuote: PropTypes.func,
    quotes: PropTypes.array
};

const mapStateToProps = state => {
    let {quotes} = state.quoteReducer
    return { quotes };
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getQuotes }, dispatch);
};

const wrap = connect(mapStateToProps, mapDispatchToProps)(Quotes);

export { wrap as Quotes };

