import React from 'react';
import './CSS/Home.css';


class Home extends React.Component {
    render() {
      return   <div className='main-container'>
      <div className='home-header'>Hi. <br/> I'm <span className='first-name'>Kristina</span>,<br/> web developer.</div>
      <img className='home-image' src={require('./Images/portfolioCollage.png')} />
      <p></p>
    </div>
    }
  }

export default Home;  