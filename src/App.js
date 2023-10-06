import "./App.css";
import React, { Component } from "react";
import Table from "./Components/Table";
import Form from "./Components/Form";

class App extends Component {
  state = {
      fullData: [
        { id: 1, name: "Neetesh", age: "22", city: "Ashokanagar", gender: "Male" },
        { id: 2, name: "Akash", age: "25", city: "Bhopal", gender: "Male" },
        { id: 3, name: "Rupa", age: "32", city: "Mumbai", gender: "Female" },
      ],
      isPopupVisible: false,
      isTableVisible: false,
      newData: { id: null, name: "", age: "", city: "", gender: "" },
      validationErrors : { name : "", age : "", city : ""}
    };
  
  handleAddClick = () => {
    this.setState({
      isPopupVisible: true,
      newData: { id: null, name: "", age: "", city: "", gender: "" },
    });
  };

  handleEditClick = (person) => {
    this.setState({
      isPopupVisible: true,
      newData: { ...person },
    });
  };

  handleShowClick = () => {
    this.setState({
      isTableVisible: true,
    });
  };

  handleCloseClick = () => {
    this.setState({
      isTableVisible: false,
      isPopupVisible: false,
      validationErrors : {}
    });
  };

  handleDeleteClick = (id) => {
    const updatedData = this.state.fullData.filter((person) => person.id !== id);
    this.setState({
      fullData: updatedData,
    });
  };

  handleSortAscClick = () => {
    const numAscending = [...this.state.fullData].sort((a, b) => a.id - b.id);
    this.setState({
      fullData: numAscending,
    });
  }

  handleSortDescClick = () => {
    const numDescending = [...this.state.fullData].sort((a, b) => b.id - a.id);
    this.setState({
      fullData: numDescending,
    });
  }

  handleSortStrAscClick = () => {
    const strAscending = [...this.state.fullData].sort((a, b) => a.name > b.name ? 1 : -1,);
    this.setState({
      fullData: strAscending,
    });
  }

  handleSortStrDescClick = () => {
    const strDescending = [...this.state.fullData].sort((a, b) => a.name > b.name ? -1 : 1,);
    this.setState({
      fullData: strDescending,
    });
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState((prevState) => ({
      newData: { ...prevState.newData, [name]: value },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { newData, fullData } = this.state;

    // Validation of Form Inputs
    const errors = {};

    if (!/^[a-zA-Z]+$/.test(newData.name)){
      errors.name = "*Name should contain only Alphabetical Characters.";
    }

    if (newData.name.length > 20){
      errors.name = "*Name is Too Long to be Real.";
    }

    if (isNaN(newData.age)){
      errors.age = "*Age should be a number.";
    }

    if (newData.age < 0){
      errors.age = "*Age cannot be Negative.";
    }

    if (newData.age > 150){
      errors.age = "*Age is too High to be Real.";
    }

    if (!/^[a-zA-Z]+$/.test(newData.city)){
      errors.city= "*City should contain only Alphabetical Characters.";
    }

    if (newData.city.length > 20){
      errors.city = "*City's Characters are Too Long to be Real.";
    }

    if (Object.keys(errors).length === 0) {
      if (newData.id === null) {
        const newId = fullData.length + 1;
        this.setState((prevState) => ({
          fullData: [...prevState.fullData, { ...newData, id: newId }],
          isPopupVisible: false,
          validationErrors : {}
        }));
      } else {
        const updatedData = fullData.map((person) =>
          person.id === newData.id ? newData : person
        );
        this.setState({
          fullData: updatedData,
          isPopupVisible: false,
        });
      }
    }else {
      this.setState((prevState) => ({
        ...prevState,
        validationErrors: errors,
      }));
    }
  };

  render() {
    const { fullData, isTableVisible, isPopupVisible, newData } = this.state;

    return (
      <div className="App">
        <button className="buttons" onClick={this.handleShowClick}>
          Show Table
        </button>

        {isTableVisible && (
          <>
            <button className="buttons" onClick={this.handleCloseClick}>
              Close
            </button>
            <Table
              fullData={fullData}
              handleDeleteClick={this.handleDeleteClick}
              handleEditClick={this.handleEditClick}
              handleSortAscClick={this.handleSortAscClick}
              handleSortDescClick={this.handleSortDescClick}
              handleSortStrAscClick={this.handleSortStrAscClick}
              handleSortStrDescClick={this.handleSortStrDescClick}
            />
          </>
        )}

        <button className="buttons" onClick={this.handleAddClick}>
          Sign Up
        </button>

        {isPopupVisible && (
          <>
            <Form
              newData={newData}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleCloseClick={this.handleCloseClick}
              validationErrors={this.state.validationErrors}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
