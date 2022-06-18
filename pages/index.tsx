import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

import Menue from "../components/layout/Menue";
import VideoHeader from "../components/VideoHeader";
import About from "../sections/About";
import Music from "../sections/Music";
import Videos from "../sections/Videos";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Menue />
      <VideoHeader />
      <About />
      <Music />
      <Videos />
    </div>
  );
};

export default Home;
