import React from 'react';
import logo from '../images/logo.png';
import '../scss/Header.scss';

const Header = props => {

	return (
		<header className="app__header">
			<div className="header__logo"><img src={logo} alt="logo" className="logo" /></div>
			<nav className="header__nav">
				<div className="header__nav-container">
					<ul className="header__nav-ul">
						<li className="header__nav-li"><a href="#" className="header__nav-link"><i class="fas fa-shopping-cart"></i></a></li>
						<li className="header__nav-li"><a href="#" className="header__nav-link"><i class="fas fa-user"></i></a></li>
						<li className="header__nav-li"><a href="#" className="header__nav-link"><i class="fas fa-box-open"></i></a></li>
					</ul>
				</div>
			</nav>
		</header>
	);

};

export default Header;