import React from "react";
import java from "../images/java.png";
import javaScript from "../images/javascript.png";
import html from "../images/html.png";
import android from "../images/android.png";
import react from "../images/react.png";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import { makeStyles, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import StarRating from "./StarRating";

const Tecnologias = () => {
  const classes = useStyles();
  const skills = [
    { year: "2020", src: java, title: "Java", stars: 3 },
    { year: "2020", src: javaScript, title: "JavaScript", stars: 3 },
    { year: "2020", src: html, title: "HTML", stars: 3 },
    { year: "2021", src: android, title: "Android", stars: 3 },
    { year: "2021", src: react, title: "React", stars: 3 },
  ];

  return (
    <Timeline align="left">
      {skills.map(({ year, src, title, stars }, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="h6" color="textSecondary">
              {year}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <img src={src} alt={title} className={classes.customlogo} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1" color="textSecondary">
                {title}
              </Typography>
              <StarRating stars={stars}></StarRating>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

const useStyles = makeStyles((theme) => ({
  customlogo: {
    width: "30px",
  },
  paper: {
    padding: "6px 16px",
    maxWidth: "200px",
  },
}));

export default Tecnologias;
