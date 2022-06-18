import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import classes from "../../styles/layout/Menue.module.css";
import { useState } from "react";

const Menue = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={
        toggle
          ? `${classes.container} ${classes.show}`
          : `${classes.container} ${classes.hide}`
      }
    >
      <div
        className={
          toggle
            ? `${classes.menueContainer} ${classes.turn}`
            : `${classes.menueContainer} `
        }
        onClick={handleClick}
      >
        <CgMenuRight size={50} />
      </div>
      <div
        className={
          toggle ? `${classes.menue} ` : `${classes.menue} ${classes.noMenue} `
        }
      >
        <Link href="#about">
          <a onClick={handleClick}>About</a>
        </Link>
        <Link href="#music">
          <a onClick={handleClick}>Music</a>
        </Link>
        <Link href="#videos">
          <a onClick={handleClick}>Videos</a>
        </Link>
        <Link href="#contact">
          <a onClick={handleClick}>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Menue;
