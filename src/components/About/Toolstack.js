import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiDbeaver,
  SiCloudera,
  SiMicrosoftazure,
  SiJira,
  SiBitbucket,
  SiMicrosoftteams,
  SiWindows,
  SiLinux
} from "react-icons/si";

// TODO find icons
{/*DBeaver, ServiceNow*/}

const icons = [SiVisualstudiocode, SiPostman, SiMicrosoftazure, SiCloudera, 
  SiJira, SiBitbucket,  SiWindows, SiMicrosoftteams, SiLinux, SiSlack]

function Toolstack() {
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

export default Toolstack;
