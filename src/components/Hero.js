import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Cruise0 React.js Sample</h1>

    <p className="lead">
      Sample application to demonstrates Auth0 capabilities for
      an SPA, using <a href="https://reactjs.org">React.js</a>
    </p>
  </div>
);

export default Hero;
