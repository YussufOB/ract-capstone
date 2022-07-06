import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AngelsList = () => {
  const angelsList = useSelector((state) => state.angels);
  let categoryName = 'Angel';
  if (angelsList.length > 0) {
    categoryName = [...angelsList][0].category;
  }
  const loading = useSelector((state) => state.loader);

  return (
    <div data-testid="angels-list">
      {loading && <div className="loader" />}
      <div>
        <div className="hero-cover" />
        <div className="hero">
          <h3>{categoryName}</h3>
          <p>
            Through the angels we communicate to the Almighty&nbsp;
            {categoryName}
            &nbsp;our sorrows, pains and way out.
          </p>
        </div>
      </div>
      <div className="angelsListContainer">
        {
          angelsList.map((angel, index) => (
            <Link
              key={angel.order}
              to="/angels-help/angelsDetails"
              state={{ angel }}
              className={index % 2 === 0 ? 'angelsList ligth-card' : 'angelsList'}
            >
              <div className="angel">
                <h3>{angel.fullName}</h3>
                <em>{angel.definitionOfName}</em>
              </div>
              <FiArrowRightCircle />
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default AngelsList;
