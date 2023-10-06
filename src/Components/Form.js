import React, {Component} from "react";

class Form extends Component{
    render () {
    const {newData, handleChange, handleSubmit, handleCloseClick, validationErrors} = this.props;
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
                required
                style={{
                  borderColor: validationErrors.name ? "red" : "",
                }}/>
                {validationErrors.name && (
                  <div className="error">{validationErrors.name}</div>
                )}
              </label>
            <label>Age :-- <br></br>
              <input 
                type='text'
                placeholder='Enter Your Age'
                name="age"
                value={newData.age}
                onChange={handleChange}
                required
                style={{
                  borderColor : validationErrors.age ? "red" : "",
                }}/>
                {validationErrors.age && (
                  <div className="error">{validationErrors.age}</div>
                )}
            </label>
            <label>City :-- <br></br>
              <input 
                type='text'
                placeholder='Enter City'
                name="city"
                value={newData.city}
                onChange={handleChange}
                required
                style={{
                  borderColor : validationErrors.city ? "red" : "",
                }}/>
                {validationErrors.city && (
                  <div className="error">{validationErrors.city}</div>
                )}
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
