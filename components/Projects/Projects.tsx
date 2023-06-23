import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import projectData from "../../public/models/projects";

import classes from "./projects.module.css";

export default function Projects() {
  return (
    <div className={classes.projectContainer} id="projects">
      <p className={classes.head}>Projects</p>
      <div className={classes.carouselContainer}>
      {projectData.map((item: any) => (
        <Card key={item.imageSrc} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={item.imageSrc}
            title={item.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
           ))}
      </div>
    </div>
  );
}
