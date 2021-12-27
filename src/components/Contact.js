import {
  Button,
  makeStyles,
  Paper,
  Radio,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const Contact = ({ title, dark, id }) => {
  const classes = useStyles();
  const [value, setValue] = useState("Di hola");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Paper className={classes.root}>
          <div className={classes.titlechoices}>
            <Typography variant="h5">Contacta conmigo</Typography>
            <div className={classes.choices}>
              <span>Preguntame</span>
              <Radio
                value="contacto"
                checked={value === "contacto"}
                color="primary"
                onChange={handleChange}
              ></Radio>
              <span>Información de Contacto</span>
              <Radio
                value="info"
                checked={value === "info"}
                color="#fff"
                onChange={handleChange}
              ></Radio>
            </div>
          </div>
          <form className={classes.form} noValidate autoComplete="off">
            {value === "info" ? (
              <>
                <Typography variant="h6">E-mail</Typography>
                <span>ajmolina@hotmail.es</span>
                <Typography variant="h6">Teléfono de Contacto</Typography>
                <span>697430523</span>
              </>
            ) : (
              <>
                <TextField label="Nombre" />
                <TextField label="Email" />
                <TextField label="Mensaje" />
              </>
            )}
          </form>
          <Button variant="contained">OK</Button>
        </Paper>
      </div>
    </div>
  );
};

//Estilos
const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  sectiondark: {
    background: "#333",
    color: "#fff",
  },
  root: {
    marginTop: theme.spacing(4),
    background: "#CFDEE3",
    color: "#black",
    fontSize: "1.2rem",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(4),
    "& button": {
      backgroundColor: "#black",
      color: "#17202A",
      fontWeight: 900,
      fontSize: "1.2rem",
      marginTop: theme.spacing(4),
    },
  },
  sectioncontent: {
    maxWidth: "80vw",
  },
  titlechoices: {
    "& h5": {
      marginTop: theme.spacing(4),
    },
  },
  form: {
    color: "#black",
    display: "flex",
    flexDirection: "column",
    "& input": {
      marginBottom: theme.spacing(1),
    },
  },
}));

export default Contact;
