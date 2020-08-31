/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
    },
  },
  circleProgress: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(4),
  },
  paginator: {
    justifyContent: 'center',
    padding: '10px',
  },
}));
