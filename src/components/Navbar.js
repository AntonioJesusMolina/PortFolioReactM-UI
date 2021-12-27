import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import React, { useState } from "react";
import logo from "../images/Ajme2.png";
import { Link, animateScroll as scroll } from "react-scroll";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone";
import BuildTwoToneIcon from "@material-ui/icons/BuildTwoTone";
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import { ArrowForwardIos } from "@material-ui/icons";

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const links = [
    {
      id: "about",
      text: "Sobre mí",
      icon: <InfoTwoToneIcon fontSize="large" className={classes.sobre} />,
    },
    {
      id: "skills",
      text: "Habilidades",
      icon: (
        <EmojiObjectsTwoToneIcon
          fontSize="large"
          className={classes.bombilla}
        />
      ),
    },
    {
      id: "work",
      text: "Trabajos",
      icon: <BuildTwoToneIcon fontSize="large" className={classes.trabajo} />,
    },
    {
      id: "contact",
      text: "Contacto",
      icon: (
        <ContactMailTwoToneIcon fontSize="large" className={classes.contacto} />
      ),
    },
  ];

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <img
            src={logo}
            className={classes.logo}
            alt="Logo"
            onClick={scrollToTop}
          />
          <List className={classes.menu}>
            {links.map(({ id, text }, index) => (
              //Si no ponemos el offset (extrapadding) el titulo de cada seccion se metería debajo del menu.
              //El smooth hace que el scroll sea suave, duration la duration del scrollin

              <Link
                key={index}
                to={id}
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-70}
              >
                {text}
              </Link>
            ))}
          </List>
          {/*Menu hamburguesa se pone de esta forma*/}
          {/*Con iconburtton hacemos boton el menuicon*/}
          <IconButton
            edge="end"
            className={classes.menubutton}
            onClick={() => setOpen(!open)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton onClick={() => setOpen(false)}>
          <ArrowForwardIos fontSize="large" className={classes.botonVolver} />
        </IconButton>
        <Divider />
        {links.map(({ id, text, icon }, index) => (
          //Si no ponemos el offset (extrapadding) el titulo de cada seccion se metería debajo del menu.
          //El smooth hace que el scroll sea suave, duration la duration del scrollin
          <Link
            className={classes.sidebar}
            key={index}
            to={id}
            spy={true}
            activeClass="active"
            smooth={true}
            duration={500}
            offset={-70}
          >
            <ListItem component="h5">
              <span>
                <ListItemIcon>{icon}</ListItemIcon>
              </span>
              {text}
            </ListItem>
          </Link>
        ))}
      </Drawer>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    //Color de fondo, He usado el mismo color que el fondo del logo
    backgroundColor: "#17202A",
    //Para asegurarnos que va a tener el 100% de la anchura
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  toolbar: {
    display: "flex",
    objectFit: "contain",
    alignItems: "center",
  },
  logo: {
    height: "4.5rem",
    //objectfit para asegurar que la imagen no se va a modificar sus medidas.
    objectFit: "contain",
    //Para que cuando pasemos el cursor por el logo salga una mano.
    //Para indicar que podemos esperar algún tipo de accion
    "&:hover": {
      cursor: "pointer ",
    },
  },
  menu: {
    //Cunado en pantalla el tamaño sea small o mas pequeñas en la pantalla del navegador, esconde los accesos
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    //Ancla
    "& a": {
      color: "#fff",
      fontSize: "1.4rem",
      fontWeight: "bold",
      //Espaciado a la izquierda
      marginLeft: theme.spacing(3),
    },
    "& a:hover": {
      cursor: "pointer",
      color: "#0997A6",
      borderBottom: "3px solid #0997A6",
    },
  },
  //Con theme.breakpoints.down, obligamos a que sólo aparezca
  //en la pantalla el menu hamburguesa cuando la pantalla se renderice a menor que small
  //Con el display, por defecto lo establecemos en que no lo queremos cuando la patnalla es grande
  menubutton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: "#999",
      position: "absolute",
      top: 0,
      right: 10,
    },
  },
  sidebar: {
    width: "40vw",
    [theme.breakpoints.down("sm")]: {
      width: "60vw",
    },
    "& h5": {
      margin: theme.spacing(5, 0, 0, 4),
      fontSize: "1.4rem",
      color: "#17202A",
      fontWeight: "bold",
    },
    "& h5:hover": {
      color: "#0997A6",
      cursor: "pointer",
    },
  },
  botonVolver: {
    color: "#17202A",
    position: "absolute",
    top: 5,
    left: 10,
  },
  bombilla: {
    color: "#ffcc11",
  },
  sobre: {
    color: "#E74130",
  },
  trabajo: {
    color: "#37D01F",
  },
  contacto: {
    color: "#10A4D7",
  },
}));

export default Navbar;
