import Carousel from 'react-bootstrap/Carousel';
import pizza from '../assets/img/pizza.jpg';
import pizza2 from '../assets/img/pizza2.jpg';


const Header = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pizza}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pizza2}
          alt="First slide"
        />
      </Carousel.Item>
    
    </Carousel>
  )
}

export default Header