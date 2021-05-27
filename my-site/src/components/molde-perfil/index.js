import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './style.css';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;
   
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Perfil:</h2>
      <p id="simple-modal-description">
        Atualize as informações do seu perfil!
      </p>
      <label>
          <h3>Nome:</h3>
          <input className="input-modal" type="text" placeholder="Nome:"/>
      </label>
      <label>
          <h3>Data de Nascimento:</h3>
          <input className="input-modal" type="date" placeholder="Nome:"/>
      </label>
      <label>
          <h3>Email:</h3>
          <input className="input-modal" type="text" placeholder="Nome:"/>
      </label>
      <label>
          <h3>Senha:</h3>
          <input className="input-modal" type="Password" placeholder="Nome:"/>
      </label>
      <label>
          <h3>Peso:</h3>
          <input className="input-modal" type="text" placeholder="Nome:"/>
      </label>
      <label>
          <h3>Altura:</h3>
          <input className="input-modal" type="text" placeholder="Nome:"/>
      </label>
      <label>
          <h3>Imagem de perfil:</h3>
          <input className="input-modal" type="file" placeholder="Nome:"/>
      </label>
      <br/>
      <button id="btnmodal2">Aplicar</button>
    </div>
  );

  return (
    <div>
      <button id="btnmodal"type="button" onClick={handleOpen}>
        Informações do perfil
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
