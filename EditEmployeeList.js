import React, { useState } from "react";

function EditEmployee({ employee, updateEmployee }) {
  const [name, setName] = useState(employee.name);
  const [department, setDepartment] = useState(employee.department);
  const [role, setRole] = useState(employee.role);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee({ ...employee, name, department, role });
  };

  return (
    <form onSubmit={handleSubmit} style={{margin:"20px"}}>
      <h2>Edit Employee</h2>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="text" value={department} onChange={(e)=>setDepartment(e.target.value)} />
      <input type="text" value={role} onChange={(e)=>setRole(e.target.value)} />
      <button type="submit">💾 Save</button>
    </form>
  );
}

export default EditEmployee;
