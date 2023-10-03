import React from "react";

const Table = ({fullData, handleDeleteClick, handleEditClick}) => {
    const tableOfItems = [...fullData].map((person, index) => (
        <tr key={index}>
          <td>{person.id}</td>
          <td>{person.name}</td>
          <td>{person.age}</td>
          <td>{person.city}</td>
          <td>{person.gender}</td>
          <td id="editButtons">
            <button onClick={() => handleEditClick(person)} className="buttons">Update</button>
            <button onClick={() => handleDeleteClick(person.id)} className="buttons">Delete</button>
          </td>
        </tr>
      ));

    return (
      <>  
      <div id="tableContainer">
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Age</td>
              <td>City</td>
              <td>Gender</td>
              <td>Edit</td>
            </tr>
          </thead>
          <tbody>{tableOfItems}</tbody>
        </table>
      </div>
      </>
    );
}

export default Table;
