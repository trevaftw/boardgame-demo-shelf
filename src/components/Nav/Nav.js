import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <a href="http://www.lodestonecoffeeandgames.com/">
      <h2 className="nav-title">Lodestone</h2>
    </a>
    <div className="nav-right">
      {/* Show the link to the Add Game and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <Link className="nav-link" to="/add">
            Add Game
          </Link>
          <LogOutButton className="nav-link" />
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/home">
        Demo Shelf
      </Link>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
