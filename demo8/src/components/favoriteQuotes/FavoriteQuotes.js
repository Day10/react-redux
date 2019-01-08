import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {FavoriteCard} from './FavoriteCard'
import {getFavoriteQuote} from '../state/actions/favoriteQuoteActions'

class FavoriteQuotes extends Component {
    componentDidMount() {
        this.props.getFavoriteQuote();
    }
    renderCards() {
        return this.props.favorites.map((quote, index) => {
            return this.renderCard(quote, index);
        })
    }
    renderCard(quote, index) {
        return <FavoriteCard quote={quote} index={index} key={index}></FavoriteCard>
    }

    render() {
        return (
            <div>
                {
                    this.props.favorites && 
                    <div>
                        {this.renderCards()}
                    </div>
                }
            </div>
        )
    }
}
FavoriteQuotes.propTypes = {
    getFavoriteQuote: PropTypes.func,
    favorites: PropTypes.array
};

const mapStateToProps = state => {
    let {favorites} = state.favoriteQuoteReducer
    return { favorites };
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getFavoriteQuote }, dispatch);
};

const wrap = connect(mapStateToProps, mapDispatchToProps)(FavoriteQuotes);

export { wrap as FavoriteQuotes };

