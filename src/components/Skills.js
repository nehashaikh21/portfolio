import { Card, Container, Row, Col } from 'react-bootstrap';

export default function Skills() {
    return (
        <section id="skills">
                <div>
                    <h2>My Skills</h2>
                </div>
                <Container className='rounded bgrad'>
                <div className='d-flex text-center mb-5 mt-3 skill-container mx-auto'>
                <Container className='mt-3 skillsGrid text-center'>
                    <Row className='pb-3'>
                        <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /></Col>
                        <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /></Col>
                        <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /></Col>
                    </Row>
                    <Row className='pb-3'>
                        <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></Col>
                        <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" /></Col>
                        <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" /></Col>
                    </Row>
                    <Row className='pb-3'>
                        <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></Col>
                        <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" /></Col>
                        <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" /></Col>
                    </Row>
                    <Row>
                        <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" /></Col>
                        <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" /></Col>
                        <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" /></Col>
                    </Row>
                </Container>
                </div>
                </Container>
        
        </section>
    )
}