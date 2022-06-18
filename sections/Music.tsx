import type { NextPage } from "next";
import Heading from "../components/Heading";
import CustomPlayer from "../components/CustomPlayer";
import { AiOutlineArrowRight } from "react-icons/ai";

const Music: NextPage = () => {
  return (
    <section id="music">
      <Heading name="Music" position="right" />
      <div className="content">
        <CustomPlayer
          albumId="2392697999"
          url="https://kryshe.bandcamp.com/album/neuron"
          name="Neuron by Kryshe"
          image="neuron.jpg"
          title="Neuron"
          description="On Neuron I was experimenting mostly with circuit bending. Every track is recorded in one tack with very little overdubs and as little post production as possible. The only overdubs that where made on some tracks are MS-20 recordings by my friend Tobias Reber."
        />
        <CustomPlayer
          albumId="867266890"
          url="https://kryshe.bandcamp.com/album/hauch"
          name="Hauch by Kryshe"
          image="hauch.jpg"
          title="Hauch"
          description="Hauch was made mostly with the IPad app SamplR (great app!) and a tape recorder. It was the only things that I had available in that time so I decided to record tracks with this simple setup. Afterwards I added trumpet overdrubs to the recordings."
        />
        <CustomPlayer
          albumId="660374883"
          url="https://kryshe.bandcamp.com/album/continuum"
          name="Continuum by Kryshe"
          title="Continuum"
          image="continuum.jpg"
          description="This Album I made over a longer period of time. It was a time where I was traviling and always working on some tracks and at some point I realized that I have an album. It is a collection of recordings made in i.e. Reykjavik, Hanoi, Istanbul and Berlin."
        />
        <p>
          Find more Music on my
          <a href={"https://kryshe.bandcamp.com/"}>
            <AiOutlineArrowRight />
            Bandcamp Page
          </a>
        </p>
      </div>
    </section>
  );
};

export default Music;
