import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
        <h1>Tudj meg többet a szolgáltatásainkról!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__item'>
                    <CardItem 
                    src='images/ortopedia.png'
                    text='Dr. Papp Zalán kisállatgyógyász szakállatorvos, ortopédus rendelése, ahol a szakvizsgálattól a műtétig kíséri végig négylábú pácienseit.'
                    label='KISÁLLAT ORTOPÉDIAI SZAKRENDELÉS'
                    path='/services'
                    />
                    <CardItem 
                    src='images/borgyogyaszat.png'
                    text='Dr. Sike Nikolett, klinikus állatorvos rendelése, ahol a bőrbetegségek alapos diagnosztizálása után a kezelési módok kiválasztása is megtörténik.'
                    label='BŐRGYÓGYÁSZATI SZAKRENDELÉS'
                    path='/services'
                    />
                    <CardItem 
                    src='images/kardiologia.png'
                    text='Kutyák és macskák veleszületett és szerzett szívbetegségeinek teljes körű kivizsgálása és gyógyszeres terápiája, valamint hasi ultrahang vizsgálat.'
                    label='KARDIOLÓGIAI SZAKRENDELÉS'
                    path='/services'
                    />
                    <CardItem 
                    src='images/szobatiszta.png'
                    text='Exkluzív szocializációs tanfolyam a legkisebb kölyökkutyáknak, még a kutyasuli előtt, Gyulainé Szak Enikő kutyaviselkedés-terapeuta szakmai vezetésével.'
                    label='SZOBATISZTA PAMACSOK'
                    path='/services'
                    />
                </ul>
                <ul className='cards__item'>
                    <CardItem 
                    src='images/ortopedia.png'
                    text='Dr. Papp Zalán kisállatgyógyász szakállatorvos, ortopédus rendelése, ahol a szakvizsgálattól a műtétig kíséri végig négylábú pácienseit.'
                    label='KISÁLLAT ORTOPÉDIAI SZAKRENDELÉS'
                    path='/services'
                    />
                    <CardItem 
                    src='images/borgyogyaszat.png'
                    text='Dr. Sike Nikolett, klinikus állatorvos rendelése, ahol a bőrbetegségek alapos diagnosztizálása után a kezelési módok kiválasztása is megtörténik.'
                    label='BŐRGYÓGYÁSZATI SZAKRENDELÉS'
                    path='/services'
                    />
                    <CardItem 
                    src='images/kardiologia.png'
                    text='Kutyák és macskák veleszületett és szerzett szívbetegségeinek teljes körű kivizsgálása és gyógyszeres terápiája, valamint hasi ultrahang vizsgálat.'
                    label='KARDIOLÓGIAI SZAKRENDELÉS'
                    path='/services'
                    />
                    <CardItem 
                    src='images/szobatiszta.png'
                    text='Exkluzív szocializációs tanfolyam a legkisebb kölyökkutyáknak, még a kutyasuli előtt, Gyulainé Szak Enikő kutyaviselkedés-terapeuta szakmai vezetésével.'
                    label='SZOBATISZTA PAMACSOK'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards