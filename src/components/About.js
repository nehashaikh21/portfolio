import { Button, Card } from 'react-bootstrap';
import Typewriter from "typewriter-effect";

export default function About() {
    
    return (
        <section id="about">
               
                <div className='text-center mb-3 pt-5 mt-10 typewriter'>
                <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/qkmmvfdj.json"
    trigger="hover"
    colors="primary:#c3d7d8,secondary:#f9b983"
    style={{width:"250px", height:"250px"}}>
</lord-icon>
                    <Typewriter  
                        onInit={(typewriter)=>{
                        typewriter.typeString("Hello,")
                        .pauseFor(500)
                        .deleteAll()
                        .typeString("I am Neha.").start();
       }
        } />
                        

                        <h1>Full-Stack Developer</h1>
                  
                </div>
                <div className='text-center mb-5'>
                    <a href="CV_Neha.pdf" download>
                            <Button variant="secondary">Download CV <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                </svg>
                            </Button>
                    </a>  
                </div>
           
            
        </section>
    )
}