import React from "react";


/**
 * EmployeeCard Component
 * Displays individual employee details (photo, name, role, department)
 * @param {Object} props - React props
 * @param {Object} props.employee - Employee data (id, name, role, department, image)
 */


const pastelColors = [
  "bg-pink-100",
  "bg-blue-100",
  "bg-purple-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-orange-100",
  "bg-rose-100",
  "bg-green-100",
];

const EmployeeCard = ({ employee }) => {
  const colorClass = pastelColors[employee.id % pastelColors.length];

  return (
    //employee card container
    <div
      className={`${colorClass} p-4 rounded-xl shadow hover:shadow-lg transition w-64 text-center hover:scale-105`}
    >
      <img
        src={employee.image}
        alt={employee.name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
      />
      <h2 className="text-lg font-semibold text-gray-800">{employee.name}</h2>
      <p className="text-sm text-gray-600">{employee.role}</p>
      <p className="text-sm text-gray-500">{employee.department}</p>
    </div>
  );
};

export default EmployeeCard;
