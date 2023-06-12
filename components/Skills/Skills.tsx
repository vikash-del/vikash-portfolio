import Image from "next/image";

import skillData from "../../public/models/skills";
import classes from "./skills.module.css";

export default function Skills() {
  return (
    <div className={classes.skillContainer} id='technologies'>
      <p className={classes.head} >Technologies</p>
      <div className={classes.carouselContainer}>
        {skillData.map((item: any) => (
          <div className={classes.flipCard}>
            <Image
              src={item.imageSrc}
              alt={item.alt}
              height="100"
              width="100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
