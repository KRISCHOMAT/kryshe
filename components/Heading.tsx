import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import classes from "../styles/components/Heading.module.css";

type AppProps = {
  name: string;
  position: string;
};

const Heading = ({ name, position }: AppProps) => {
  if (position === "left") {
    return (
      <div className={classes.container}>
        <MdArrowForwardIos size={70} />
        <h1>{name}</h1>
      </div>
    );
  }
  if (position === "right") {
    return (
      <div className={`${classes.container} ${classes.right}`}>
        <MdArrowBackIos size={70} />
        <h1>{name}</h1>
      </div>
    );
  }
  return null;
};

export default Heading;
