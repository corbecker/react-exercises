import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui pointing menu">
      <Link to="/" className="item">Streamer</Link>
      <div className="right menu">
        <Link to="/" className="item">Stream List</Link>
        <GoogleAuth />
      </div>
    </div>
  )
};

export default Header;