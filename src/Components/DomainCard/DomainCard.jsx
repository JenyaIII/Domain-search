/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {
  Card, CardActions, CardContent, Button,
} from '@material-ui/core/';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import ReactCountryFlag from 'react-country-flag';
import { useStyles } from './styles';
import Fade from './ReactSpring';

const DomainCard = ({ data }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card className={classes.root} variant="outlined" key={data.domain}>
        <CardContent key={data.domain}>
          {data.domain}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>Learn More</Button>
        </CardActions>
      </Card>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h1 id="spring-modal-title">
              Domain information
            </h1>
            <span id="spring-modal-description">
              Domain name:
              {`${' '}${data.domain}`}
              <br />
              Country:
              {' '}
              <ReactCountryFlag
                countryCode={data.country || ''}
                svg
                style={{
                  width: '1.5em',
                  height: '1.5em',
                }}
              />
              <br />
              Create date:
              {`${' '}${data.create_date.slice(0, 10) || 'Empty'}`}
              <br />
              Is dead ?:
              {`${' '}${data.isDead || 'Empty'}`}
            </span>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default DomainCard;

DomainCard.propTypes = {
  data: PropTypes.object.isRequired,
};
