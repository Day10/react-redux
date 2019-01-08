import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addFavoriteQuote } from '../state/actions/favoriteQuoteActions'

const QuoteCard = (props) => (
    <div>
        <p>{props.quote.content}</p>
        <p>{props.quote.author}</p>
        <button onClick={() => props.addFavoriteQuote(props.quote)}>添加</button>
    </div>
)

QuoteCard.propTypes = {
    quote: PropTypes.object,
    index: PropTypes.number,
    addFavoriteQuote: PropTypes.func
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({addFavoriteQuote}, dispatch)
}

const wrap = connect(null, mapDispatchToProps)(QuoteCard);

export { wrap as QuoteCard };