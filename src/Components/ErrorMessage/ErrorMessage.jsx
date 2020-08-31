import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

const ErrorMessage = ({ domainData, error }) => {
  const classes = useStyles();

  return (
    <>
      {!domainData && (
      <div className={classes.message}>
        <h2>
          {error ? error.message : 'No data yet ...'}
        </h2>
      </div>
      )}
    </>
  );
};

export default ErrorMessage;

ErrorMessage.defaultProps = {
  domainData: '',
  error: '',
};

ErrorMessage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  domainData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
};
