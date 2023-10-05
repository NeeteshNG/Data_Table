import React, {Component} from "react";

class Form extends Component{
    render () {
    const {newData, handleChange, handleSubmit, handleCloseClick} = this.props;
    return (
        <div className="modal-overlay">
          <button id="form-close" href="/" onClick={handleCloseClick}>X</button>
          <form id="formStyle" onSubmit={handleSubmit}>
            <label>Name :-- <br></br>
              <input 
                type='text'
                placeholder='Enter Your Name : '
                name="name"
                value={newData.name}
                onChange={handleChange}
                required/>
              </label>
            <label>Age :-- <br></br>
              <input 
                type='number'
                placeholder='Enter Your Age'
                name="age"
                value={newData.age}
                onChange={handleChange}
                required/>
            </label>
            <label>City :-- <br></br>
              <input 
                type='text'
                placeholder='Enter City'
                name="city"
                value={newData.city}
                onChange={handleChange}
                required/>
            </label>
            <label>Gender :-- <br></br>
            <select name="gender" value={newData.gender} onChange={handleChange} required>
              <option name="Select">Select</option>
              <option name="Male" value={newData.male}>Male</option>
              <option name="Female" value={newData.female}>Female</option>
              <option name="Other" value={newData.other}>Other</option>
            </select>
            </label>
            <input id="submit" className="buttons" type="submit" />
          </form>
        </div>
    );
}
}

export default Form;
