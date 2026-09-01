import React from "react";

function EmployeeList({ employees, deleteEmployee, startEdit, toggleAttendance }) {
  return (
    <div style={{margin:"20px"}}>
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <table border="1" cellPadding="10" style={{borderCollapse:"collapse", width:"100%"}}>
          <thead style={{background:"#eee"}}>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.role}</td>
                <td>
                  <button onClick={() => startEdit(index)}>✏️ Edit</button>
                  <button onClick={() => deleteEmployee(index)}>🗑 Delete</button>
                  <button onClick={() => toggleAttendance(index)}>
                    
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeList;
