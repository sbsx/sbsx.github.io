import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPostgresql,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiClickhouse,
  SiGnubash,
  SiMilvus,
  SiNeo4J,
  SiOpenai,
  SiFastapi
} from "react-icons/si";
// TODO Find Icons
{/*Huggingface, Langchain, llama-index*/}

const icons = [ DiPython, DiGit, SiTensorflow, SiPytorch, SiOpencv, SiOpenai, 
  SiNeo4J, SiMilvus, SiClickhouse, SiGnubash, SiFastapi, DiMongodb, SiPostgresql];
function Techstack() {
 
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

export default Techstack;
