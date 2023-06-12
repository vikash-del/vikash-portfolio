import ExploreIcon from "@mui/icons-material/Explore";

import exploreData from "../../public/models/explorations";

import classes from "./explorations.module.css";

export default function Explorations() {
  return (
    <div className={classes.explorationsContainer} id="explorations">
      <p className={classes.head}>Explorations</p>
      <div className={classes.exploreContainer}>
      {exploreData.map((item: any) => (
      <div className={classes.explore}>
        <ExploreIcon sx={{ fontSize: 24 }}/>
        <p>{item.description}</p>
      </div>
      ))}
      </div>
    </div>
  );
}
