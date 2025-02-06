import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Screenshot (19).png";
import projImg2 from "../assets/img/ozq1TcPFSmA-HD.jpg";
import projImg3 from "../assets/img/WhatsApp Image 2025-02-05 at 23.47.06_4f0e6b00.jpg";
import projImg4 from "../assets/img/photo-collage.png.png";
import projImg5 from "../assets/img/WhatsApp Image 2025-02-06 at 00.08.04_c0afd212.jpg";
import projImg6 from "../assets/img/WhatsApp Image 2025-02-06 at 00.09.43_10a20e30.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Documentary",
      description: "Adobe Premier Pro And After Effects",
      imgUrl: projImg1,
      youtubeLink: "https://youtu.be/AYGR5N1UmPs"
    },
    {
      title: "Viral Reel",
      description: "Adobe premire Pro",
      imgUrl: projImg2,
      youtubeLink: "https://youtube.com/shorts/3VLlIvxBNA8"
    },
    {
      title: "Podcast",
      description: "Adobe Premire Pro And Davinci Resolve",
      imgUrl: projImg3,
      youtubeLink: "https://youtu.be/SQbRxqIP-ho?si=jO5yiDSxpeizWbGx"
    },
    {
      title: "Thumbnail Designing",
      description: "Adobe Photoshop",
      imgUrl: projImg4,
      youtubeLink: "https://drive.google.com/drive/folders/1_kRh_mTiHpqOhAhs6E0qNstDdfBGRtF5?usp=sharing"
    },
    {
      title: "Pace Editing",
      description: "Adobe Premier Pro And After Effects",
      imgUrl: projImg5,
      youtubeLink: "https://youtu.be/jjLqQYv-79U?si=CkeCYVcrQ4a2G2DC"
    },
    {
      title: "Fast Editing",
      description: "Adobe Premier Pro And After Effects",
      imgUrl: projImg6,
      youtubeLink: "https://youtu.be/iKywpmDx8YI?si=ldY4QLjK6gT-dALD"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
