import React, { useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
 
/** this will hold all employee related components
 * main page for employee
*/

const sampleEmployees = [
  { id: 1, name: "Ananya Yadav", role: "Software Developer", email: "ananya@penthara.com" },
  { id: 2, name: "Divyanshu Chikara", role: "Backend Engineer", email: "divyanshu@penthara.com" },
  { id: 3, name: "Divya Singh", role: "Frontend Developer", email: "divya@penthara.com" },
];

function EmployeeDirectory() {
  const [search, setSearch] = useState("");

  const filteredEmployees = sampleEmployees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <SearchBar search={search} setSearch={setSearch} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {filteredEmployees.map((emp) => (
            <EmployeeCard key={emp.id} emp={emp} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmployeeDirectory;
