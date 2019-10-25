import React from 'react';
import {Link} from 'react-router-dom';
import Auth from './Auth';


const Header = () => {
  return (
    <div className="ui secondary pointing menu ">
      <Link to="/" className="item">
        uPath
      </Link>
      <div className="right menu" />
      <Link to="/" className="item">
        All Streams
      </Link>
      <Auth />
    </div>
  );
};

export default Header;
