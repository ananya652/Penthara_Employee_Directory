import React, { useState } from "react";


/**
 * EmployeeForm Component
 * Handles adding and editing employee details
 */


const EmployeeForm = ({ onAdd, onClose }) => {
  const [formData, setFormData] = useState({  // to store new employee 
    name: "",
    role: "",
    department: "",
    image: "",
  });

  /**
   * Updates form data when user types
   * @param {Object} e - Input event
   */
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { id: Date.now(), ...formData };
    onAdd(newEmployee);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl w-80">
      <h2 className="text-xl font-semibold mb-4 text-[#55abd5ff]">
        Add Employee
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white rounded transition hover:opacity-90"
            style={{
              backgroundColor: "#55abd5ff",
            }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
