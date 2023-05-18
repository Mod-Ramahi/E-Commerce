import Carousel from 'react-bootstrap/Carousel';
import './Firstslider.scss'

const Firstslider = () => {
    return (
        <div className='slider'>
            <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block slider-image"
                src="/images/aa.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block slider-image"
                src="/images/bb.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block slider-image"
                src="/images/cc.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna
                </p>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default Firstslider;