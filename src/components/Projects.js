import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Projects() {
    return (
        <section id="projects">
            <h2>My Recent Projects</h2>
    <div className='d-flex align-items-center justify-content-center mb-5 mt-5 text-center'>
     <div class="container rounded"> 
    <Row>
      <Col>
  <div class="box">
    <span></span>
      <div class="content">
        <h2>Card one</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <a herf="#"><Button>Code</Button></a> <a herf="#"><Button>Demo</Button></a>
      </div>    
   </div>
   </Col>
   <Col>
      <div class="box">
        <span></span>
          <div class="content">
            <h2>Card two</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
 <a herf="#"><Button>Code</Button></a> <a herf="#"><Button>Demo</Button></a>
            </div>    
         </div>
         </Col>
         <Col>
         <div class="box">
            <span></span>
              <div class="content">
                <h2>Card three</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<a herf="#"><Button>Code</Button></a> <a herf="#"><Button>Demo</Button></a>
                </div>    
            </div>
            </Col>
            <Col>
         <div class="box">
            <span></span>
              <div class="content">
                <h2>Card Four</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<a herf="#"><Button>Code</Button></a> <a herf="#"><Button>Demo</Button></a>
                </div>    
            </div>
            </Col>
        </Row>
</div>
</div>
        </section>
    )
}