import React, {Component} from "react";

class Table extends Component{
    render() {
        const {fullData, handleDeleteClick, handleEditClick, handleSortAscClick, handleSortDescClick, handleSortStrAscClick, handleSortStrDescClick} = this.props;

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
                  <td>ID
                    <br></br>
                    <button id="sort-button" onClick={handleSortAscClick}>&uarr;</button>
                    <button id="sort-button" onClick={handleSortDescClick}>&darr;</button>
                  </td>
                  <td>Name
                  <br></br>
                    <button id="sort-button" onClick={handleSortStrAscClick}>&uarr;</button>
                    <button id="sort-button" onClick={handleSortStrDescClick}>&darr;</button>
                  </td>
                  <td>Age
                  <br></br>
                    <button id="sort-button" onClick={handleSortAscClick}>&uarr;</button>
                    <button id="sort-button" onClick={handleSortDescClick}>&darr;</button>
                  </td>
                  <td>City
                  <br></br>
                    <button id="sort-button" onClick={handleSortStrAscClick}>&uarr;</button>
                    <button id="sort-button" onClick={handleSortStrDescClick}>&darr;</button>
                  </td>
                  <td>Gender
                  <br></br>
                    <button id="sort-button" onClick={handleSortStrAscClick}>&uarr;</button>
                    <button id="sort-button" onClick={handleSortStrDescClick}>&darr;</button>
                  </td>
                  <td>Edit</td>
                </tr>
              </thead>
              <tbody>{tableOfItems}</tbody>
            </table>
          </div>
          </>
        );
    }
}

export default Table;
