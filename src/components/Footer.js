import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Footer extends Component {

  render() {
    return (
      <nav className="footer">
        <div className="foot-center">
            <li>
              <a  href="tel:+7777777777">Call Us</a>
            </li>
            <li>
              <Link>Chat</Link>
            </li>
            <li>
              <Link>Company</Link>
            </li>
        </div>
      </nav>
    );
  }
}