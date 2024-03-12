import { Fragment } from 'react';
import './App.css';
import Logo from './images/logo.svg';
import HeroImage from './images/HeroImage.png';
import Vector from './images/Vector.svg';
import Vector2 from './images/Vector2.svg';
import Vector3 from './images/Vector3.svg';

const App = () => {
  return (
    <Fragment>
      <main className="main">
        <div className="container">
          <div className="main__wrap">
            <div className="main__top">
              <a href="/" className="logo">
                <img src={Logo} alt="logo" />
                <span>Nickelfox</span>
              </a>

              <nav className="main__menu">
                <a href="#!" className="menu__link">
                  Home
                </a>
                <a href="#!" className="menu__link">
                  Services
                </a>
                <a href="#!" className="menu__link">
                  Success Stories
                </a>
                <a href="#!" className="menu__link">
                  Blog
                </a>
                <a href="#!" className="menu__link-active">
                  Contact Us
                </a>
              </nav>
            </div>
            <div className="main__row">
              <div className="main__content">
                <h1 className="title-1">Designer FoxenStein</h1>

                <p className="main__text">
                  We create solutions that have top notch ui/ux designs and
                  software development standards, suitable for best web products
                  & iOS & Android apps, crafted with love & passion.
                </p>
                <a href="#!" className="main__button-green">
                  Contact Us
                </a>

                <div className="main__buttons">
                  <button className="main__button">
                    <span><img src={Vector} alt='error'/></span>
                    <span>UI/UX</span>
                  </button>
                  <button className="main__button">
                    <span><img src={Vector2} alt='error'/></span>
                    <span>App Design</span>
                  </button>
                  <button className="main__button">
                    <span><img src={Vector3} alt='error'/></span>
                    <span>Web Design</span>
                  </button>
                </div>
              </div>
              <div className="main__imageholder">
                <img src={HeroImage} alt="error" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default App;
