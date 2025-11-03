import React, { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeForm from "./components/EmployeeForm";
import { employees as employeeData } from "./data/employees";

/**
 * Main Application Component
 * Displays the Employee Directory with search and add features
 */

function App() {
  // state for search input, employee list, and form visibility
  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState(employeeData);
  const [showForm, setShowForm] = useState(false);


  // filter employees based on search term
  const filteredEmployees = employees.filter((emp) => {
    const term = searchTerm.toLowerCase();
    return (
      emp.name.toLowerCase().includes(term) ||
      emp.department.toLowerCase().includes(term) ||
      emp.role.toLowerCase().includes(term)
    );
  });

  /**
   * Adds a new employee to the list
   * @param {Object} newEmployee - Employee data from the form
   */
  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
    setShowForm(false);
  };

  /** to blur the bg behind the pop up **/
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 relative overflow-hidden">
      <div
        className={`w-full flex flex-col items-center transition-all duration-300 ${
          showForm ? "blur-[2px]" : ""
        }`}
      >
        <h1 className="text-5xl font-bold mb-6 text-[#3fa2d1]">
          Employee Directory
        </h1>

        {/* Search bar + Add button */}
        <div className="flex items-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Search by name, role, or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded-lg w-72 focus:outline-none focus:ring-2"
            style={{
              borderColor: "#b9eaf9ff",
              outlineColor: "#cbebfbff",
            }}
          />
          <button
            onClick={() => setShowForm(true)}
            className="text-white rounded-full p-2 text-xl font-bold w-10 h-10 flex items-center justify-center transition"
            style={{
              backgroundColor: "#9ad4f1ff",
            }}
          >
            +
          </button>
        </div>

        {/* Employee cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredEmployees.map((emp) => (
            <EmployeeCard key={emp.id} employee={emp} />
          ))}
        </div>
      </div>

      {/* Popup form */}
      {showForm && (
        <div className="absolute inset-0 flex justify-center items-center bg-transparent z-50">
          <EmployeeForm
            onAdd={handleAddEmployee}
            onClose={() => setShowForm(false)}
          />
        </div>
      )}
    </div>
  );
}

export default App;
