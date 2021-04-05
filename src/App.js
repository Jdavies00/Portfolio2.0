import './App.scss';
import React from 'react'
import Typist from 'react-typist';
import { Jumbotron, Container, Col, Row, Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      <header>
        <ul className='navItems pt-4'>
          <li><a>test</a></li>
          <li><a>test</a></li>
          <li><a>test</a></li>
          <li><a>test</a></li>
        </ul>
      </header>
      <hr />
      <body>
        <Typist>
          <Container className='introTron'>
            <Col>
              <h1 style={{ fontSize: "50px"}}>Hi, I'm Anthony,<br />I'm a<span style={{ fontSize: "50px", color: "#EA00D9" }}> web developer.</span> </h1>
              <Button className="flatButton" variant="outline-dark" >Contact Me!</Button>
              {/* <button id='test' className="btn btn-outline-light btn-lg">hgjjghjhg</button> */}
            </Col>
          </Container>
        </Typist>
        <Container>
          <h1  style={{ fontSize: "50px"}}>
            My Portfolio
          </h1>
        </Container>
      </body>
      <footer className="footer fixed-bottom">
        <div className="content has-text-centered">
          <p>
          </p>
        </div>

      </footer>

    </div>
  )
}

export default App
