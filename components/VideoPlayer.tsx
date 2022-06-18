import classes from "../styles/components/Youtube.module.css";

type AppProps = {
  videoId: string;
};
const VideoPlayer = ({ videoId }: AppProps) => {
  return (
    <div className={classes.container}>
      <iframe
        className={"videoPlayer"}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
