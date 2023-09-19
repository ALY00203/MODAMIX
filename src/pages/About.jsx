import React, { useEffect } from 'react'
import SliderMain from '../Components/SliderMain';
import Card from 'react-bootstrap/Card';
import collection1 from '../vedios-images/collection-man.png'
import collection2 from '../vedios-images/collection-new-arrivals.png'
function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SliderMain />
      <div className='container w-100 d-flex justify-content-between p-5 gap-5'>

      <Card className='cardAbout'>
        <div className="image-container">
          <Card.Img variant="top" src={collection1} className='image'/>
        </div>
        <Card.Body>
          <Card.Title className='fst-italic lh-1 custom-link-font'>brands</Card.Title>
          <Card.Text className='custom-link-font'>
            all you need in one place
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='cardAbout'>
        <div className="image-container">
          <Card.Img variant="top" src={collection2} className='image'/>
        </div>
        <Card.Body>
          <Card.Title className='fst-italic lh-1 custom-link-font'>fashions</Card.Title>
          <Card.Text className='custom-link-font'>
            shop from your home now
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className='container d-flex flex-column  justify-content-center text-center w-50'>
       <span className='fs-4 fw-bold custom-link-font'>WHY US?</span>
       <p className='fs-5 fst-italic custom-link-font fw-lighter'>In 2008, Gwyneth Paltrow launched goop from her kitchen as a homespun weekly newsletter. It’s grown a lot since then. We operate from a place of curiosity and nonjudgment, and we start hard conversations, crack open taboos, and look for connection and resonance everywhere we can find it. We don’t mind being the tip of the spear—in short, we go first so you don’t have to. We’re glad you’re here.
CHOOSE YOUR OWN ADVENTURE <br />
<span className='custom-link-font fs-4 fw-bold'>Read..</span> <br />
We take a curious, open-minded, and service-centric approach to the work we do. We ask questions about all of it. We believe that people can take what serves them and leave what doesn’t. We recommend what we love and what we think is worthy of your time and wallet. We value your trust above all things.</p>
      </div>
      <div className='scroll'></div>


    </div>
  )
}

export default About;