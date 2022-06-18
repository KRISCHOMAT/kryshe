import type { NextPage } from "next";

import classes from "../styles/components/VideoHeader.module.css";

const VideoHeader: NextPage = () => {
  return (
    <div className={classes.container}>
      <video className={classes.video} loop autoPlay muted>
        <source src="/videos/studio-short.mp4" />
      </video>
      <div className={classes.heading}>Kryshe</div>
    </div>
  );
};

export default VideoHeader;
