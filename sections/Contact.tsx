import type { NextPage } from "next";
import Heading from "../components/Heading";

const Contact: NextPage = () => {
  return (
    <section id="contact">
      <Heading name="Contact" position="right" />
      <div className="content">
        <p>I am happy to read your message!</p>
        <a className="email" href="maito=kryshemusic@gmail.com">
          kryshemusic@gmail
        </a>
      </div>
    </section>
  );
};

export default Contact;
