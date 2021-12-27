import { makeStyles } from "@material-ui/core";
import { AddBoxOutlined } from "@material-ui/icons";
import About from "./components/About";
import Contact from "./components/Contact";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <About title="Sobre mí" id="about" dark={true} />
      <Skills title="Habilidades" id="skills" dark={false} />
      <MyWork title="Mi trabajo" id="work" dark={true} />
      <Contact title="Contacto" id="contact" dark={false} />
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default App;
