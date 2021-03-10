import React from "react";
import {Link} from "react-router-dom";

const Header = () => {

  return (
    <React.Fragment>
      <header className="header">
        <Link to="/" className="header__logo logo">Library</Link>
      </header>
    </React.Fragment>
  );
};

export default Header;