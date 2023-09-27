import React from 'react';
import '../Assets/css/Poll.css';
import GitHub from '../Assets/images/Footer/github.png';
import { useState,useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Bugatti_Veyron from '../Assets/images/Poll/bugatti_veyron.png';
import Ferrari_F40 from '../Assets/images/Poll/ferrari_f40.jpg';
import Jaguar_XJ220 from '../Assets/images/Poll/jaguar_xj220.jpg';
import Porsche_Carrera_GT from '../Assets/images/Poll/porsche_carrera_gt.jpg';

function Poll () {
  
  const [bugattiVotes, setBugattiVotes] = useState(0);
  const [ferrariVotes, setFerrariVotes] = useState(0);
  const [jaguarVotes, setJaguarVotes] = useState(0);
  const [porscheVotes, setPorscheVotes] = useState(0);

  const handleVote = (carName) => {
    // Update the vote count based on the car name
    switch (carName) {
      case 'Bugatti Veyron':
        setBugattiVotes(bugattiVotes + 1);
        break;
      case 'Ferrari F40':
        setFerrariVotes(ferrariVotes + 1);
        break;
      case 'Jaguar XJ220':
        setJaguarVotes(jaguarVotes + 1);
        break;
      case 'Porsche Carrera GT':
        setPorscheVotes(porscheVotes + 1);
        break;
      default:
        break;
    }
    alert(`Thank you for voting for ${carName}!`);
  };


  return (
    <>
    <Navbar/>
    <div className='main'>
    <Sidebar/>
    <div className="vote-container">
      <div className="poll-container mt-5 mb-5 mx-5">
      <h1 className='text-info'>Poll</h1>
      <div className="row pb-5 mx-5">
        <div className='c1'>
            <div className='car-name pt-2 pb-2 text-primary fw-bold'>Bugatti Veyron</div>
            <img src={Bugatti_Veyron}/>
            <button className='vote'><div className='pt-2 pb-2' onClick={()=>handleVote('Bugatti Veyron')}>Vote ({bugattiVotes})</div></button>
        </div>
        <div className='c2'>
            <div className='car-name pt-2 pb-2 text-primary fw-bold'>Ferrari F40</div>
            <img src={Ferrari_F40}/>
            <button className='vote'><div className='pt-2 pb-2' onClick={()=>handleVote('Ferrari F40')}>Vote ({ferrariVotes})</div></button>
        </div>
      </div>
      <div className='row pb-5 mx-5'>
        <div className='c3'>
            <div className='car-name pt-2 pb-2 text-primary fw-bold'>Jaguar XJ220</div>
            <img src={Jaguar_XJ220}/>
            <button className='vote'><div className='pt-2 pb-2' onClick={()=>handleVote('Jaguar XJ220')}>Vote ({jaguarVotes})</div></button>
        </div>
        <div className='c4'>
            <div className='car-name pt-2 pb-2 text-primary fw-bold'>Porsche Carrera GT</div>
            <img src={Porsche_Carrera_GT}/>
            <button className='vote'><div className='pt-2 pb-2' onClick={()=>handleVote('Porsche Carrera GT')}>Vote ({porscheVotes})</div></button>
        </div>
      </div>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default Poll;