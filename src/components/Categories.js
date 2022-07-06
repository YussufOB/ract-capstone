import React from 'react';
import { Link } from 'react-router-dom';
import {
  GoFlame,
  GoGlobe,
  GoBookmark,
  GoDatabase,
  GoGift,
  GoMarkGithub,
} from 'react-icons/go';

const Categories = () => (
  <>
    <Link to="/list" className="card">
      <div className="summary">
        <div className="icon">
          <GoFlame className="card-icon" />
        </div>
        <div className="details">
          <h3>TITLE</h3>
          <p>Title Heading</p>
        </div>
      </div>
    </Link>
    <Link to="/list" className="card ligth-icon">
      <div className="summary">
        <div className="icon">
          <GoGlobe className="card-icon" />
        </div>
        <div className="details">
          <h3>TITLE</h3>
          <p>Title Heading</p>
        </div>
      </div>
    </Link>
    <Link to="/list" className="card ligth-icon">
      <div className="summary">
        <div className="icon">
          <GoDatabase className="card-icon" />
        </div>
        <div className="details">
          <h3>TITLE</h3>
          <p>Title Heading</p>
        </div>
      </div>
    </Link>
    <Link to="/list" className="card ligth-icon">
      <div className="summary">
        <div className="icon">
          <GoBookmark className="card-icon" />
        </div>
        <div className="details">
          <h3>TITLE</h3>
          <p>Title Heading</p>
        </div>
      </div>
    </Link>
    <Link to="/list" className="card ligth-icon">
      <div className="summary">
        <div className="icon">
          <GoMarkGithub className="card-icon" />
        </div>
        <div className="details">
          <h3>TITLE</h3>
          <p>Title Heading</p>
        </div>
      </div>
    </Link>
    <Link to="/list" className="card ligth-icon">
      <div className="summary">
        <div className="icon">
          <GoGift className="card-icon" />
        </div>
        <div className="details">
          <h3>TITLE</h3>
          <p>Title Heading</p>
        </div>
      </div>
    </Link>
  </>
);

export default Categories;
