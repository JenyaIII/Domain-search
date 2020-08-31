/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  circleProgress: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(4),
  },
}));
