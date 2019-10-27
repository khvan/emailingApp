import React from 'react';
import {Link} from 'react-router-dom';
import Auth from './Auth';


const Header = () => {
  return (
    <div className="ui secondary pointing menu" 
    style={{"backgroundImage": "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)"}}>
      <Link to="/" className="item">
        uPath
      </Link>
      <div className="right menu" />
      <Link to="/streams/list" className="item">
        All Streams
      </Link>
      <Auth />
    </div>
   
  );
};

export default Header;
