import React from 'react'
// import { DarkAppStore, DarkPlayStore } from '../../assets/svg';
// import style from './Footer.module.css'

const index = () => {
  return (
    <footer className='container'>
      <p>COPYRIGHT © 2023 ZEROVERSE</p>
      <nav>
        <ul>
          <li>
            <a href="https://www.example.com">privacy policy</a>
          </li>
          <li>
            <a href="https://www.example.com">terms of use</a>
          </li>
          <li>
            <a href="https://www.example.com">contact us</a>
          </li>
        </ul>
      </nav>
      {/* <div className={style.storesLinkWrapper}>
        <img src={DarkPlayStore} alt="playstore" />
        <img src={DarkAppStore} alt="appstore" />
      </div> */}
    </footer>
  );
}

export default index
