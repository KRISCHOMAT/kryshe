import type { NextPage } from "next";
import Heading from "../components/Heading";

const About: NextPage = () => {
  return (
    <section id="about">
      <Heading name="About" position="left" />
      <div className="content">
        <p>
          Kryshe is the Solo Project of musician Christian Grothe. With the use
          of DIY instruments such as synthesizers and sampler instruments he
          creates sonic landscapes. Sometimes soft and mellow. Sometimes harsh
          and distorted. Always creating a space for exploration.
        </p>
      </div>
    </section>
  );
};

export default About;
