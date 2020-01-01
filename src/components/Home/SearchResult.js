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
                        <span className="bgName">{this.props.bg.name}</span>
                        {this.props.bg.rules_url &&
                            <span className="bgRules"><a href={this.props.bg.rules_url} >Rules</a></span>
                        }
                    </div>
                </div>
                <center>
                    <p>
                        Players: {this.props.bg.min_players} - {this.props.bg.max_players}<br />
                        Play Length: {this.props.bg.min_playtime} - {this.props.bg.max_playtime}<br />
                        About the game:
                        </p>
                </center>
                <div className="bottom">
                    <p className="bgDescription">{this.props.bg.description_preview}</p><br />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(SearchResult);
