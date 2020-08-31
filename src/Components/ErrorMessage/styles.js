/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  message: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(4),
  },
}));
