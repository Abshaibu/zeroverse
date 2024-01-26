import React, {useRef, useState} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LightHeart, RedHeart, RightArrow, leftArrow, Message, Share, DarkAppStore, PlayStore, AppStore } from './assets/svg';
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
    wrapperRef.current.scrollLeft = newScrollAmount;
    setScrollAmount(newScrollAmount);
    setIsLastVisible(isLastChildVisible()); // Check if last child is visible after scrolling
  };

  const handlePrevClick = () => {
    const newScrollAmount = scrollAmount - 360;
    wrapperRef.current.scrollLeft = newScrollAmount;
    setScrollAmount(newScrollAmount);
    setIsLastVisible(isLastChildVisible()); // Check if last child is visible after scrolling
  };


  const cardsList = [
    {
      cardImg: Phone1,
      subTitle: "Create public board.",
      likes: "52k",
      messages: "1.3k",
      shares: "463",
      heart: true,
    },
    {
      cardImg: Phone2,
      subTitle: "Create private boards.",
      likes: "200",
      messages: "135",
      shares: "22",
      heart: false,
    },
    {
      cardImg: Phone3,
      subTitle:
        "Have timeline board interactions private to only friends and family.",
      likes: "200",
      messages: "153",
      shares: "22",
      heart: true,
    },
    {
      cardImg: Phone4,
      subTitle: "Share your favorite boards, get superliked.",
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
            <h1>The Social Sharing.</h1>
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
              <span>Get it now</span>
              <img src={AppStore} alt="appstore" />
              <img src={PlayStore} alt="playstore" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
 
export default App;