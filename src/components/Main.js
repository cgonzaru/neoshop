import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Container, Row, Col } from 'react-grid-system';
import slide1 from '../images/slider/slide1.jpg';
import slide2 from '../images/slider/slide2.jpg';
import slide3 from '../images/slider/slide3.jpg';
import slide4 from '../images/slider/slide4.jpg';
import vans1 from '../images/products/vans1.png';
import vans2 from '../images/products/vans2.png';
import vans3 from '../images/products/vans3.png';
import vans4 from '../images/products/vans4.png';
import vans5 from '../images/products/vans5.png';
import vans6 from '../images/products/vans6.png';
import vans7 from '../images/products/vans7.png';
import vans8 from '../images/products/vans8.png';
import cta1 from '../images/cta/cta1.jpg';
import cta2 from '../images/cta/cta2.jpg';


//import 'react-awesome-slider/dist/styles.css';
import '../scss/Main.scss';

const Main = props => {

	return (
		<main className="app__main">
			<div className="main__slider">
				<CarouselProvider
					naturalSlideWidth={1920}
					naturalSlideHeight={624}
					totalSlides={4}
				>
					<Slider>
						<Slide index={0}>
							<img src={slide1} alt="slide1" className="container-slide" />
							<div className="text-slide">Título para la primera slide</div>
							<button className="btn-slide">Comprar</button>
						</Slide>
						<Slide index={1}>
							<img src={slide2} alt="slide2" className="container-slide" />
							<div className="even-text">Título para la segunda slide</div>
							<button className="even-btn">Comprar</button>
						</Slide>
						<Slide index={2}>
							<img src={slide3} alt="slide3" className="container-slide" />
							<div className="text-slide">Título para la tercera slide</div>
							<button className="btn-slide">Comprar</button>
						</Slide>
						<Slide index={3}>
							<img src={slide4} alt="slide4" className="container-slide" />
							<div className="even-text">Título para la cuarta slide</div>
							<button className="even-btn">Comprar</button>
						</Slide>
					</Slider>
				</CarouselProvider>
			</div>
			<div className="main__products">
				<h2 className="products-title">productos</h2>
				<div className="products-container">
					<Container>
						<Row>
							<Col sm={4}>
								<div className="vas-container">
									<img src={vans1} alt="vans1" className="vans" />
									<span className="vans-text">Old skool 36 dx</span>
									<button className="vans-btn">Comprar</button>
								</div>
							</Col>
							<Col sm={4}>
								<div className="vas-container">
									<img src={vans2} alt="vans2" className="vans" />
									<span className="vans-text">Old skool 36 dx</span>
									<button className="vans-btn">Comprar</button>
								</div>
							</Col>
							<Col sm={4}>
								<div className="vas-container">
									<img src={vans3} alt="vans3" className="vans" />
									<span className="vans-text">Old skool 36 dx</span>
									<button className="vans-btn">Comprar</button>
								</div>
							</Col>
						</Row>
						<Row>
							<Col sm={4}>
								<div className="vas-container">
									<img src={vans4} alt="vans4" className="vans" />
									<span className="vans-text">Old skool 36 dx</span>
									<button className="vans-btn">Comprar</button>
								</div>
							</Col>
							<Col sm={8}>
								<div className="vas-container">
									<img src={cta1} alt="cta1" className="cta" />
								</div>
							</Col>
							
						</Row>
						<Row>
							<Col sm={4}>
								<div className="vas-container">
									<img src={vans5} alt="vans5" className="vans" />
									<span className="vans-text">Old skool 36 dx</span>
									<button className="vans-btn">Comprar</button>
								</div>
							</Col>
							<Col sm={4}>
								<div className="vas-container">
									<img src={vans6} alt="vans6" className="vans" />
									<span className="vans-text">Old skool 36 dx</span>
									<button className="vans-btn">Comprar</button>
								</div>
							</Col>
							<Col sm={4}>
								<div className="vas-container">
									<img src={vans7} alt="vans7" className="vans" />
									<span className="vans-text">Old skool 36 dx</span>
									<button className="vans-btn">Comprar</button>
								</div>
							</Col>
						</Row>
						<Row>
							<Col sm={8}>
								<div className="vas-container">
									<img src={cta2} alt="cta2" className="cta" />
								</div>
							</Col>
							<Col sm={4}>
								<div className="vas-container">
									<img src={vans8} alt="vans8" className="vans" />
									<span className="vans-text">Old skool 36 dx</span>
									<button className="vans-btn">Comprar</button>
								</div>
							</Col>
							
						</Row>
					</Container>
				</div>
				<div className="products-button"><button className="products-btn">cargar más productos</button></div>
			</div>
		</main>
	);

};

export default Main;