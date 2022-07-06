import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsMicFill, BsFillGearFill, BsCaretLeftFill } from 'react-icons/bs';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <button type="button" onClick={() => navigate(-1)}>
        <BsCaretLeftFill />
        Go Back
      </button>
      <span>TOPIC HEADING</span>
      <div className="header-actions">
        <span><BsMicFill /></span>
        <span><BsFillGearFill /></span>
      </div>
    </div>
  );
};

export default Navbar;