import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const { uuid, title, path } = props;
  return (
    <div key={uuid} className="card">
      <img src={path} alt={title} />
      <h1>{title}</h1>
    </div>
  );
}

Card.propTypes = {
  uuid: PropTypes.string,
  title: PropTypes.string,
  path: PropTypes.string,
};

Card.defaultProps = {
  uuid: '',
  title: '',
  path: '',
};

export default Card;
