import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const { handleAddClick, handleShowClick } = this.props;
    return (
      <div>
        <nav className="navbar">
          <button className="navbar-buttons" onClick={handleShowClick}>
            Show Table
          </button>
          <div className="ul_git">
            <div className="il_git">
              <a
                href="https://github.com/NeeteshNG/MyTaskBestPeers"
                rel="noreferrer"
                target="_blank"
                title="Git Repo"
                className="git-click"
              >
                <i className="fab fa-github size_git"></i>
              </a>
            </div>
          </div>
          <button className="navbar-buttons" onClick={handleAddClick}>
            Sign Up
          </button>
        </nav>
      </div>
    );
  }
}

export default Navbar;
