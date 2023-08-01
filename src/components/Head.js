import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Head.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

function Head() {
  return (
    <div className='head-container'>
      <h1>Murmuczok Állatgyógyászati Centrum és Patika</h1>
      <div className='head-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Információ
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Időpontfoglalás <FontAwesomeIcon icon={faCalendarDays} />
        </Button>
      </div>
    </div>
  );
}

export default Head;
