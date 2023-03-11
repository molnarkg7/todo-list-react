import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Dropdown = ({ icon, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-title" onClick={toggleDropdown}>
        <BsThreeDotsVertical />
      </div>
      {isOpen && (
        <div className="dropdown-list-container">
          {options.map((option) => {
            return (
              <button
                onClick={
                  option.value === "Edit"
                    ? () => setIsOpen(false)
                    : () => option.onClick()
                }
                className={`${option.color} dropdown-list-btn`}
              >
                {option.value}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
