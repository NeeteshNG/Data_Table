import React, {Component} from "react";

class Navbar extends Component{
    render () {
    const {handleAddClick, handleShowClick} = this.props;
    return (
        <div>
            <nav className="navbar">
            <button className="navbar-buttons" onClick={handleShowClick}>
                Show Table
            </button>
            <button className="navbar-buttons" onClick={handleAddClick}>
                Sign Up
            </button>
            </nav>
        </div>
    );
}
}

export default Navbar;
