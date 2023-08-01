import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faImage, faUser } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Hello</h2>
            <Link to='/'>Bemutatkozunk</Link>
            <Link to='/'>Rólunk</Link>
            <Link to='/'>Munkatársak</Link>
            <Link to='/'>Házirend</Link>
            <Link to='/'>Vélemények</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Gyors linkek</h2>
            <Link to='/'>Szolgáltatások</Link>
            <Link to='/'>Fizetési lehetőségek</Link>
            <Link to='/'>Bemer</Link>
            <Link to='/'>Fényterápia</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Szolgáltatások</h2>
            <Link to='/'>Szobatiszta Pamacsok</Link>
            <Link to='/'>Kardiológia</Link>
            <Link to='/'>Bőrgyógyászat</Link>
            <Link to='/'>Kisállat-ortopédia</Link>
          </div>
          <div class='footer-link-items'>
              <img src='https://murmuczok.hu/wp-content/uploads/murmuczok-logo.png' alt='murmuczok-logo'></img>
              <Link to='/'><FontAwesomeIcon icon={faUser} /> Facebook</Link>
              <Link to='/'><FontAwesomeIcon icon={faImage} /> Instagram</Link>
              <Link to='/'><FontAwesomeIcon icon={faFilm} /> Youtube</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Murmuczok © 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;