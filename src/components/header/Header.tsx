// Header

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>
        <Link to="/">Admin Portal</Link>
      </h1>
      <h2>Welcome to the Admin Portal</h2>
    </div>
  );
};

export default Header;
