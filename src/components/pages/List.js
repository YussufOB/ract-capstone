import React from 'react';
import { BsArrowRight } from 'react-icons/bs/';
import { Link } from 'react-router-dom';

const List = () => (
  <div>
    <div>
      <div className="main-cover">
        <div className="cover">
          <h3>TITLE</h3>
          <p>
            Lorem ipsum, dolor sit adipisicing elit.
            Inventore error facilis ipsa dolore, pariatur,
          </p>
        </div>
      </div>
      <div className="ListContainer">
        <Link to="/details" className="List">
          <div className="item">
            <h3>ITEM TITLE</h3>
            <p>Item Header</p>
          </div>
          <BsArrowRight />
        </Link>
        <Link to="/details" className="List">
          <div className="item">
            <h3>ITEM TITLE</h3>
            <p>Item Header</p>
          </div>
          <BsArrowRight />
        </Link>
        <Link to="/details" className="List">
          <div className="item">
            <h3>ITEM TITLE</h3>
            <p>Item Header</p>
          </div>
          <BsArrowRight />
        </Link>
        <Link to="/details" className="List">
          <div className="item">
            <h3>ITEM TITLE</h3>
            <p>Item Header</p>
          </div>
          <BsArrowRight />
        </Link>
        <Link to="/details" className="List">
          <div className="item">
            <h3>ITEM TITLE</h3>
            <p>Item Header</p>
          </div>
          <BsArrowRight />
        </Link>
        <Link to="/details" className="List">
          <div className="item">
            <h3>ITEM TITLE</h3>
            <p>Item Header</p>
          </div>
          <BsArrowRight />
        </Link>
      </div>
    </div>
  </div>
);

export default List;
