import React, { Component } from 'react';
import { connect } from 'react-redux';

//styling
import './Home.css'

class SearchResult extends Component {

    render() {
        return (
            <>
                {JSON.stringify(this.props, null, 2)}
            </>
        )
    }
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(SearchResult);
