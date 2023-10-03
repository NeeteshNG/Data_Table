import React, {Component} from "react";

class Form extends Component{
    render () {
    const {newData, handleChange, handleSubmit} = this.props;
    return (
        <div className="modal-overlay">
          <form id="formStyle" onSubmit={handleSubmit}>
            <label>Name :-- <br></br>
              <input 
                id="inputBox"
                type='text'
                placeholder='Enter Your Name : '
                name="name"
                value={newData.name}
                onChange={handleChange}/>
              </label>
            <label>Age :-- <br></br>
              <input 
                id="inputBox"
                type='number'
                placeholder='Enter Your Age'
                name="age"
                value={newData.age}
                onChange={handleChange}/>
            </label>
            <label>City :-- <br></br>
              <input 
                id="inputBox"
                type='text'
                placeholder='Enter City'
                name="city"
                value={newData.city}
                onChange={handleChange}/>
            </label>
            <label>Gender :-- <br></br>
            <select name="gender" value={newData.gender} onChange={handleChange}>
              <option name="Select" value={newData.select}>Select</option>
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
