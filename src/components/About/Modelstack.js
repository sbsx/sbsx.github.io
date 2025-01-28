import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiMeta, SiOpenai } from "react-icons/si";

import MistralLogo from "../../assets/logos/mistral.svg";
import SentenceBertLogo from "../../assets/logos/sentencebert.png";
import DeepSeekLogo from "../../assets/logos/deepseek.svg";

const icons = [
  { component: SiMeta, type: "icon" },
  { component: SiOpenai, type: "icon" },
  { component: MistralLogo, type: "image" },
  { component: SentenceBertLogo, type: "image" },
  { component: DeepSeekLogo, type: "image" },
];

function Modelstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((icon, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {icon.type === "icon" ? (
            <icon.component />
          ) : (
            <img src={icon.component} alt="logo" style={{ width: "100%" }} />
          )}
        </Col>
      ))}
    </Row>
  );
}

export default Modelstack;
