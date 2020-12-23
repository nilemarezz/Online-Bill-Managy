import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button'
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    borderRadius: 10
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            {
              props.loading ? <CircularProgress /> :
                <>
                  <Typography variant="h5">Confirm to submit ?</Typography>
                  <Typography variant="subtitle1">You cannot edit detail after submit.</Typography>
                  <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 10, justifyContent: 'space-around' }}>
                    <Button style={{ backgroundColor: '#4caf50', color: 'white' }} onClick={props.submitForm}>Confirm</Button>
                    <Button style={{ backgroundColor: '#ff1744', color: 'white', padding: '0px 15px' }} onClick={props.handleClose}>Cancel</Button>
                  </div>
                </>
            }
          </div>

        </Fade>
      </Modal>
    </div>
  );
}