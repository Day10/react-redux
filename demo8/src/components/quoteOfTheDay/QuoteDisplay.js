
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getQuoteOfTheDay } from '../state/actions/quoteOfDayActions';

const QuoteDisplay = (props) => (
    <div>
        <p>{props.quote}123</p>
        <button onClick={props.getQuoteOfTheDay}>刷新quote</button>
    </div>
)

QuoteDisplay.propTypes = {
    quote: PropTypes.number
}

const mapStateToProps = state => {
    let { quote } = state.quoteOfTheDayReducer;
    return { quote }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({getQuoteOfTheDay}, dispatch)
}

let wrap = connect(mapStateToProps, mapDispatchToProps)(QuoteDisplay);

export { wrap as QuoteDisplay }