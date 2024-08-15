import React from "react";
import { Col, Row } from "react-bootstrap";
import {
//   list of model icons
SiMeta,
SiOpenai
} from "react-icons/si";
{/*Llama, GPT, Mistral, SentenceBert, YOLO, SAM, */}

const icons = [SiMeta,SiOpenai,]

function Modelstack() {
  // TODO Find Icons
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((Icon, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Modelstack;
