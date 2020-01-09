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

    handleInput = (event) => {
        this.setState({
            search_query: event.target.value
        })
    }

    handleSubmit = () => {
        console.log(this.state.search_query)
    }



    render() {
        return (
            <>
                <div className="infoDiv">
                    <form>
                        <input onChange={this.handleInput} placeholder="Enter game title..."></input><input type="submit" value="Search" onClick={this.handleSubmit}></input>
                    </form>
                </div>
                <center>
                    <h2>Results:</h2>
                    {JSON.stringify(this.state, null, 2)}
                </center>

            </>
        );
    }
}

const mapStateToProps = state => ({
    state: state,
});

export default withRouter(connect(mapStateToProps)(EditShelf));
