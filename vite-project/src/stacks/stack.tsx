import Carousel from 'react-bootstrap/Carousel';
import capa from '../assets/Capa.png';
import poster from '../assets/poster.png';
import calc from '../assets/calc.png';
import efood from '../assets/efood.png';
import { ImagemCarrossel, ContImgCarrossel } from './stack_styled';
import { useState } from 'react';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ContImgCarrossel>
          <ImagemCarrossel src={efood} />
        </ContImgCarrossel>
        <Carousel.Caption>
          <h3>primeiro</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ContImgCarrossel>
          <ImagemCarrossel src={capa} />
        </ContImgCarrossel>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ContImgCarrossel>
          <ImagemCarrossel src={calc} />
        </ContImgCarrossel>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ContImgCarrossel>
          <ImagemCarrossel src={poster} />
        </ContImgCarrossel>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default ControlledCarousel;