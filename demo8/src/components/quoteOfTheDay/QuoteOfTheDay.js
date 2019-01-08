import React, { Component }from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { QuoteDisplay } from './QuoteDisplay'

import { getQuoteOfTheDay } from '../state/actions/quoteOfDayActions';

class QuoteOfTheDay extends Component {
    componentDidMount() {
        this.props.getQuoteOfTheDay();
    }

    render() {
        return (
            <div>
                <QuoteDisplay />
            </div>
        )
    }
}

QuoteOfTheDay.propTypes = {
    getQuoteOfTheDay: PropTypes.func
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({getQuoteOfTheDay}, dispatch)
}

let wrap = connect(undefined, mapDispatchToProps)(QuoteOfTheDay);

export { wrap as QuoteOfTheDay }