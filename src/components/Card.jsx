import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const { uuid, title, path } = props;
  return (
    <div key={uuid}>
      <h1>{title}</h1>
      <img src={path} alt={title} />
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
