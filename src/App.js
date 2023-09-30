import React, {useRef, useState} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LightHeart, RedHeart, RightArrow, leftArrow, Message, Share } from './assets/svg';
import {
  LightAppStore,
  LightPlayStore,
  ComingSoonText,
  Phone1,
  Phone2,
  Phone3,
  Phone4,
} from "./assets/png";


function App() {
  const wrapperRef = useRef(null);
  const [isLastVisible, setIsLastVisible] = useState(false);
  const [scrollAmount, setScrollAmount] = useState(0);

  const isLastChildVisible = () => {
    const wrapper = wrapperRef.current;
    const lastChild = wrapper.lastChild;

    const wrapperRightEdge = wrapper.scrollLeft + wrapper.offsetWidth;
    const lastChildRightEdge = lastChild.offsetLeft + lastChild.offsetWidth;

    return lastChildRightEdge <= wrapperRightEdge;
}

  const handleNextClick = () => {
    const newScrollAmount = scrollAmount + 360;
    setScrollAmount(newScrollAmount);
    wrapperRef.current.scrollLeft = newScrollAmount;
  };

  const handlePrevClick = () => {
    const newScrollAmount = scrollAmount - 360;
    setScrollAmount(newScrollAmount);
    wrapperRef.current.scrollLeft = newScrollAmount;
     setIsLastVisible(isLastChildVisible());
  };
  const cardsList = [
    {
      cardImg: Phone1,
      title: "Log in with email",
      subTitle: "Enter your email address and password to proceed.",
      likes: "52k",
      messages: "1.3k",
      shares: "463",
      heart: true,
    },
    {
      cardImg: Phone2,
      title: "Log in with email",
      subTitle: "Enter your email address and password to proceed.",
      likes: "200",
      messages: "135",
      shares: "22",
      heart: false,
    },
    {
      cardImg: Phone3,
      title: "Log in with email",
      subTitle: "Enter your email address and password to proceed.",
      likes: "200",
      messages: "153",
      shares: "22",
      heart: true,
    },
    {
      cardImg: Phone4,
      title: "Log in with email",
      subTitle: "Enter your email address and password to proceed.",
      likes: "22",
      messages: "16",
      shares: "2",
      heart: false,
    },
  ];
 

  return (
    <>
      <Navbar />
      <main>
        <section>
          <div className="container">
            <h1>Content sharing like never before.</h1>
          </div>
          <div className="container">
            <div className="controls">
              <button
                onClick={handlePrevClick}
                type="button"
                disabled={scrollAmount <= 0}
                aria-label="previous"
                id="prevButton"
              >
                <img src={leftArrow} alt="previous" />
              </button>
              <button
                onClick={handleNextClick}
                type="button"
                disabled={isLastVisible}
                aria-label="next"
                id="nextButton"
              >
                <img src={RightArrow} alt="next" />
              </button>
            </div>
          </div>
          <div className="cardsContainer" ref={wrapperRef}>
            {cardsList.map((card) => (
              <div className="card" key={card.messages}>
                <div className="cardImg">
                  <img src={card.cardImg} alt="iphone mockup" />
                </div>
                <div className="cardTexts">
                  <h2>{card.title}</h2>
                  <p>{card.subTitle}</p>
                </div>
                <p className="cardEngagements">
                  <span>
                    <img src={card.heart ? RedHeart : LightHeart} alt="heart" />
                    {card.likes}
                  </span>
                  <span>
                    <img src={Message} alt="chat bubble" />
                    {card.messages}
                  </span>
                  <span>
                    <img src={Share} alt="share icon" />
                    {card.shares}
                  </span>
                </p>
              </div>
            ))}
            <div className="comingSoonCard">
              <img src={ComingSoonText} alt="coming soon" />
              <img src={LightAppStore} alt="appstore" />
              <img src={LightPlayStore} alt="playstore" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
 
export default App;