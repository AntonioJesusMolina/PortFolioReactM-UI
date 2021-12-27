import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import yo from "../images/Antonio-1.PNG";
import TypeWriterEffect from "react-typewriter-effect";
import pdf from "../images/CV Antonio Jesus Molina Espinosa (1).pdf";

const About = ({ title, dark, id }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={`${classes.section} ${dark && classes.sectiondark}`}>
        <div className={classes.sectioncontent} id={id}>
          <Typography variant="h3">{title}</Typography>
          <Card className={classes.card}>
            <CardMedia image={yo} className={classes.media} title="yo" />
            <CardContent className={classes.cardcontent}>
              <TypeWriterEffect
                text="Hola! Soy Antonio Jesús Molina Espinosa"
                textStyle={{
                  fontSize: "2rem",
                  fontWeight: "700px",
                  //Color del texto
                  color: "#0997A6",
                  margin: "5%,5%,5%,30%",
                }}
                startDelay={200}
                cursorColor="black"
                typeSpeed={100}
              />
              <TypeWriterEffect
                text="Programador en Front End."
                textStyle={{
                  fontSize: "1.2rem",
                  fontWeight: "500px",
                  //Color del texto
                  color: "#17202A",
                  textAlign: "justify",
                }}
                startDelay={4000}
                cursorColor="black"
                typeSpeed={100}
              />
              {/*En typography ponemos el texto plano normal*/}
              <Typography variant="h6" color="textSecondary" align="justify">
                Completé el ciclo superior de Desarrollo de Aplicaciones
                Multiplataforma en el I.E.S Virgen del Carmen de la ciudad de
                Jaén. A lo largo de mi formación he descubierto la magia de
                crear desde cero aplicaciones y programas con varios lenguajes
                de programacion. Dejo debajo, un botón para descargar mi
                Curriculum, por si está interesado.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" className={classes.pdfbutton}>
                <a href={pdf} download>
                  Descargar CV
                </a>
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

//Estilos
const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectiondark: {
    background: "#333",
    color: "#fff",
  },
  sectioncontent: {
    maxWidth: "80vw",
    margin: "0 auto",
  },
  card: {
    height: "70vh",
    display: "flex",
    marginTop: theme.spacing(6),
    position: "relative",
    imageResolution: "",
  },
  //En media configuramos el cardmedia, donde va insertada nuestra foto.
  media: {
    width: "100%",
    height: "85%",
    objectFit: "cover",
    margin: theme.spacing(5),
    borderRadius: "10px",
  },
  cardcontent: {
    marginTop: theme.spacing(2),
    "& h6": {
      marginTop: theme.spacing(6),
      //Establecemos que en pantallas pequeñas El texto desaparezca, para que no quede feo
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
  pdfbutton: {
    position: "absolute",
    bottom: "5rem",
    right: "4rem",
    [theme.breakpoints.down("sm")]: {
      botton: 10,
      right: "1rem",
    },
    backgroundColor: "#17202A",
    padding: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "& a": {
      color: "#fff",
      textDecoration: "none",
      fontWeight: 900,
    },
    "& a:hover": {
      color: "#432423",
    },
  },
}));

export default About;
