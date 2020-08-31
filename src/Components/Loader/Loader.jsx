import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useStyles } from './styles';

const Loader = ({ loading }) => {
  const classes = useStyles();
  return (
    <>
      {loading && (
      <div className={classes.circleProgress}>
        <CircularProgress />
      </div>
      )}
    </>
  );
};
export default Loader;
