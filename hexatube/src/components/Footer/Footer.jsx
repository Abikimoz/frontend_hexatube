import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";

function Footer({ setSelectedComponent }) {
  return (
    <footer className="footer">
      <div className="first-block">
        <li onClick={() => setSelectedComponent("team")}>Команда</li>
      </div>
      <div className="second-block">
        <li onClick={() => setSelectedComponent("about")}>О проекте</li>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  setSelectedComponent: PropTypes.func.isRequired,
};

export default Footer;
{
  /* готово */
}
