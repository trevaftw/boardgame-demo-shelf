import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


class EditShelf extends Component {

    state = {
        search_query: ''
    }

    componentDidMount() {
        console.log('Component did Mount')
    }



    render() {
        return (
            <>
                <div className="infoDiv">
                    edit shelf
                </div>
                <center><h2>Results:</h2></center>

            </>
        );
    }
}

const mapStateToProps = state => ({
    state: state,
});

export default withRouter(connect(mapStateToProps)(EditShelf));
