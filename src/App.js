import "./App.css";
import { useState } from "react";
import React from "react";
import Table from "./Components/Table";
import Form from "./Components/Form";

function App() {
  const [fullData, setFullData] = useState([
    { id: 1, name: "Neetesh", age: "22", city: "Ashokanagar", gender: "Male" },
    { id: 2, name: "Akash", age: "25", city: "Bhopal", gender: "Male" },
    { id: 3, name: "Rupa", age: "32", city: "Mumbai", gender: "Female" },
  ]);

  
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isTableVisible, setTableVisible] = useState(false);
  const [newData, setNewData] = useState({ id: null, name: "", age: "", city: "", gender: "" });
  
  const handleAddClick = () => {
    setPopupVisible(true);
    setNewData({ id: null, name: "", age: "", city: "", gender: "" });
  };
  
  const handleEditClick = (person) => {
    setPopupVisible(true);
    setNewData({ ...person });
  };

  const handleShowClick = () => {
    setTableVisible(true);
  };
  
  const handleCloseClick = () => {
    setTableVisible(false);
  };

  const handleDeleteClick = (id) => {
    const updatedData = fullData.filter((person) => person.id !== id);
    setFullData(updatedData);
  };
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewData(values => ({...values, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newData.name && newData.age && newData.city && newData.gender !== ""){
      if (newData.id === null) {

        const newId = fullData.length + 1;
        setFullData([...fullData, { ...newData, id: newId }]);
      } else {
  
        const updatedData = fullData.map((person) =>
          person.id === newData.id ? newData : person
        );
        setFullData(updatedData);
        console.log(typeof(fullData.name))
      }
      setPopupVisible(false);
    }
  };

  return (
    <div className="App">
      <button className="buttons" onClick={handleShowClick}>Show Table</button>

      {isTableVisible && (
      <>
        <button className="buttons" onClick={handleCloseClick}>Close</button>
        <Table
          fullData={fullData} 
          handleDeleteClick={handleDeleteClick} 
          handleEditClick={handleEditClick}
        />
      </>
      )}

      <button className="buttons" onClick={handleAddClick}>Sign Up</button>

      {isPopupVisible && (
        <>
          <Form
            newData={newData} 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </div>
    
  );
}

export default App;
