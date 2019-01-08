import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeFavoriteQuote } from '../state/actions/favoriteQuoteActions'

const FavoriteCard = (props) => (
    <div>
        <p>{props.quote.content}</p>
        <p>{props.quote.author}</p>
        <button onClick={() => props.removeFavoriteQuote(props.quote.id)}>删除</button>
    </div>
)

FavoriteCard.propTypes = {
    quote: PropTypes.object,
    index: PropTypes.number,
    removeFavoriteQuote: PropTypes.func
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({removeFavoriteQuote}, dispatch)
}

const wrap = connect(null, mapDispatchToProps)(FavoriteCard);

export { wrap as FavoriteCard };