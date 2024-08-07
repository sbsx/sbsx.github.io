import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

// TODO CHANGE LAYOUTT TO: Name, Pic, About you. Remove animation, unnecessary images, and emojis.

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        {/* <Container className="home-content"> */}
        <Home2 />
        {/* </Container> */}
      </Container>
    </section>
  );
}

export default Home;


