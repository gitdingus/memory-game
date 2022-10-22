import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const {
    uuid,
    title,
    path,
    reportClick,
  } = props;
  const [previouslyClicked, setPreviouslyClicked] = useState(false);

  function handleClick() {
    reportClick(uuid, previouslyClicked);
    setPreviouslyClicked(true);
  };

  return (
    <button key={uuid} type="button" className="card" onClick={handleClick}>
      <img src={path} alt={title} />
      <h1>{title}</h1>
    </button>
  );
}

Card.propTypes = {
  uuid: PropTypes.string,
  title: PropTypes.string,
  path: PropTypes.string,
  reportClick: PropTypes.func,
};

Card.defaultProps = {
  uuid: '',
  title: '',
  path: '',
  reportClick: () => {},
};

export default Card;
