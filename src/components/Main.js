import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
import slide4 from '../images/slide4.jpg';
import 'react-awesome-slider/dist/styles.css';
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
				<div className="products-container">Aquí van las imágenes</div>
				<div className="products-button"><button className="btn">cargar más productos</button></div>
			</div>
		</main>
	);

};

export default Main;