import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        {/* TODO Change All Projects */}
        {/* Projects:
        - GISHelp Chatbot
        - ARK lookup
        - HoneyBee Lora finetuning
        - Embedding/Reranker finetuning
        - CameraWafer
        - Pose Estimation
        - TUAS Drone
        - Triton Robot
        - Skin cancer knn
        - google cloud ocr calc
        */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}  GRADIO/AMAT logo
              isBlog={false}
              title="GISHelp Chatbot"
              description="RAG based chatbot using onprem hosted mistral llm with milvus vdb with over 25k documents to help users solve tech issues following company procedure"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode} GRADIO/AMAT logo
              isBlog={false}
              title="ARK"
              description="RAG chatbot using Azure Openai and Doc Search to enable rapid discovery of tooling documents for onsite fab workers"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor} HoneyBee
              isBlog={false}
              title="HoneyBee LoRA"
              description="Using GPT generated finetuning data to finetune a Llama model for better performance in Material Science based questions"
              // ghLink="https://github.com/soumyajit4419/Editor.io"  link to HoneyBee research paper
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf} Embedding/Reranker
              isBlog={false}
              title="Improving Retrieval"
              description="Finetuning embedding and reranker models with business specific data to improve search accuracy and hitrate"
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide} camerawafer maybe pic of machine?
              isBlog={false}
              title="CameraWafer"
              description="Computer Vision device speeding up machine calibration"
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion} pose estimation example
              isBlog={false}
              title="Pose Estimation"
              description="Trained small CNN to classify images and find precise locations of body parts"
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion} TUAS logo
              isBlog={false}
              title="TUAS Drone"
              description="Developed pipeline and used cv models to complete competition tasks"
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"  TUAS github?
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion} Triton Robotics Logo
              isBlog={false}
              title="Triton Robotics Object Tracking"
              description="Used opencv to improve low light object tracking performance for better enemy path prediction"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion} skin cancer knn pca
              isBlog={false}
              title="Skin Cancer Detection" 
              description="Created KNN and PCA models from scratch to efficiently classify skin cancer types as an exercise in ML theory"
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion} Compass GC OCR
              isBlog={false}
              title="OCR Calculator"
              description="Used Google Cloud OCR to create a calculator that can read and solve math problems from images, winning top 10 in the 2020 SFHacks hackathon"
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
