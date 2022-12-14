import React from 'react';
import './CSS/Skills.css';

class Skills extends React.Component {
    render() {
      return   <div className='skills-main-container'>
      <div className='skills-header'>Skills & Experience</div>
      <p className='skills-details'>Since beginning my journey as a web developer over three years ago, I have connected to multiple API's, one of which was Azure Devops. I've created successful responsive web pages that are easy to use and built with best practices. The main areas of my expertise is:</p>
        <li>Front-end development</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>SQL</li>
        <li>React</li>

        <p className='skills-details'>I've been having fun creating a little React.js application. Using Github pages, I hosted a small API. I deployed my application using Netlify. Some new NPM packages I used were react-burger-menu and react-modal. Check out my code <a className='udemy' href="https://github.com/kristinahales/RecipeApp">here</a>.</p>
        <div className='skills-image-container'>
          <img className='skills-image' src={require('./Images/desserts.png')} />
          <img className='skills-image' src={require('./Images/dessertinfo.png')} />
          <img className='skills-image' src={require('./Images/menu.png')} />
        </div>
        <p className='skills-details'>I am also a firm believer that it is important to keep learning. Recently I finished the course <a className='udemy' href="https://www.udemy.com/course/the-complete-sql-bootcamp/">The Complete SQL Bootcamp 2022</a> and have started the course <a className='udemy' href="https://www.udemy.com/course/java-programming-tutorial-for-beginners/">Java Programming for Complete Beginners</a>.</p>
        <p className='skills-details'>Visit my <a href="https://www.linkedin.com/in/kristina-h-873311184/">LinkedIn</a> profile for more details.</p>
    </div>
    }
  }

export default Skills;  