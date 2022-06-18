import Image from "next/image";
import classes from "../styles/components/CustomPlayer.module.css";

type AppProps = {
  albumId: string;
  url: string;
  name: string;
  image: string;
  description: string;
  title: string;
};
const CustomPlayer = ({
  albumId,
  url,
  name,
  image,
  description,
  title,
}: AppProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className={classes.customPlayer}>
        <Image
          src={`/images/${image}`}
          alt="Cover Art"
          layout={"fill"}
          objectFit={"cover"}
        ></Image>
        <iframe
          className={"audioPlayer"}
          title="small player"
          src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=none/transparent=true/`}
          seamless
        />
      </div>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default CustomPlayer;
