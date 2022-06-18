import type { NextPage } from "next";
import Heading from "../components/Heading";
import VideoPlayer from "../components/VideoPlayer";

const Videos: NextPage = () => {
  return (
    <section id="videos">
      <Heading name="Videos" position="left" />
      <div className="content">
        <VideoPlayer videoId="UflbvBgo6no" />
        <VideoPlayer videoId="Py5IEel-8y4" />
        <VideoPlayer videoId="LPD6vCqB_3Y" />
      </div>
    </section>
  );
};

export default Videos;
