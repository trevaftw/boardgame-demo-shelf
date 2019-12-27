import React, { Component } from 'react';
import { connect } from 'react-redux';

//styling
import './Home.css'

class SearchResult extends Component {

    render() {
        return (
            <div className="resultDiv">
                <div className="top">

                    <img className="bgCover" src={this.props.bg.image_url} alt={`Art for the cover of ${this.props.bg.name}`} />

                    <div className="right">
                        <span className="bgName">{this.props.bg.name}</span><br />
                        {this.props.bg.rules_url &&
                            <span className="bgRules"><a href={this.props.bg.rules_url} >Rules</a></span>
                        }
                    </div>
                </div>
                <div className="bottom">
                    <p>{this.props.bg.description_preview}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(SearchResult);
