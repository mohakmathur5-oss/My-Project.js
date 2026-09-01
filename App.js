import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import EditEmployee from "./EditEmployeeList";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  const startEdit = (index) => {
    setEditingIndex(index);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(employees.map((emp, i) => (i === editingIndex ? updatedEmployee : emp)));
    setEditingIndex(null);
  };

  const toggleAttendance = (index) => {
    setEmployees(
      employees.map((emp, i) =>
        i === index ? { ...emp, present: !emp.present } : emp
      )
    );
  };

  return (
    <div>
      <Header />
      <Home />
      <EmployeeForm addEmployee={addEmployee} />
      {editingIndex !== null ? (
        <EditEmployee employee={employees[editingIndex]} updateEmployee={updateEmployee} />
      ) : (
        <EmployeeList
          employees={employees}
          deleteEmployee={deleteEmployee}
          startEdit={startEdit}
          toggleAttendance={toggleAttendance}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
