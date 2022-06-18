import type { NextPage } from "next";
import classes from "../../styles/layout/Footer.module.css";
import { SiBandcamp, SiYoutube, SiGmail } from "react-icons/si";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.cell}>
          <h3>Rechtliches</h3>
          <ul>
            <Link href={"/impressum"} passHref>
              <a>
                <li>Impressum</li>
              </a>
            </Link>
            <Link href={"/datenschutz"} passHref>
              <a>
                <li>Datenschutz</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className={classes.cell}>
          <h3>Connect</h3>
          <ul>
            <li>
              <a
                href={
                  "https://www.youtube.com/channel/UC16Iagn_SgUKrbaLI99wccA"
                }
              >
                <SiYoutube />
                YouTube
              </a>
            </li>
            <li>
              <a href={"https://kryshe.bandcamp.com/"}>
                <SiBandcamp />
                Bandcamp
              </a>
            </li>
            <li>
              <a href={"mailto:kryshemusic@gmail.com"}>
                <SiGmail />
                kryshemusic@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
