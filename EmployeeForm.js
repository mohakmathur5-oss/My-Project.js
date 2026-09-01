import React, { useState } from "react";


function EmployeeForm({ addEmployee }) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !department || !role) return;
    addEmployee({ name, department, role, present: false });
    setName(""); setDepartment(""); setRole("");
  };

  return (
    <div>
    <form onSubmit={handleSubmit} style={{margin:"100px", padding:"20px" , content: "200px"}}>
      <center><h2>Add an Employee</h2>
      <span>
      Enter Name of Employee : <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} /><br/><br/>
      Enter Department of Employee : <input type="text" placeholder="Department" value={department} onChange={(e)=>setDepartment(e.target.value)} /><br/><br/>
      Enter Role of Employee : <input type="text" placeholder="Role" value={role} onChange={(e)=>setRole(e.target.value)} /><br/><br/>
      <button type="submit">➕ Add</button></span></center>
    </form>
    </div>
  );
}

export default EmployeeForm;

