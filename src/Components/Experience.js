import React from 'react';
import './CSS/Experience.css';

class Experience extends React.Component {
    render() {
      return   <div className='experience-main-container'>
      <div className='experience-header'>Me, Myself, & I</div>
      <div className='experience-container'>

      <div className='experience-small-container'>
        <p className='job-title'>Spiff Inc.</p>
        <p>Remote – Solutions Engineer (May 2022 - Present)</p>
        <li>Build and maintain clean source code.</li>
        <li>Educate and provide resources to clients to increase their technical understanding of the Spiff software. </li>
        <li>Troubleshoot and fix issues impacting customers.</li>
        <li>Discuss new product functionality and features with the engineering teams based on customer feedback.</li>
        <li>Work closely with the Customer Success Manager and Integration Consultant throughout the implementation process.</li>
        
      </div>

      <div className='experience-small-container'>
        <p className='job-title'>Church of Jesus Christ of Latter Day Saints </p>
        <p>Riverton, Utah – Software Engineer (October 2019- April 2022) </p>
        <li>Integrate existing software programs with cloud based service to increase efficiency.</li>
        <li>Work directly with client stakeholders to develop technical solutions for business cases.</li>
        <li>Participate in team meetings to discuss usability and user experience, to resolve technical issues.</li>
        <li>Modify and update existing code. </li>
        <li>Create and update technical documentation. </li>
        <li>Test API endpoints using SoapUI. </li>
      </div>

      <div className='experience-small-container'>
        <p className='job-title'>DevMountain </p>
        <p>Lehi, Utah - Student (June 2019-August 2019)</p>
        <li>Collaborated with other team members to plan, design, and develop small web applications. </li>
        <li>Designed the user interface for web applications using CSS techniques and Javascript libraries. </li>
        <li>Performed bug fixes and code reviews.</li>
        <li>Applied version controlled software (Git) to track, test, and update pre-existing code.</li>
        <li>Researched new web technologies to expand personal knowledge base.</li>
      </div>
      </div>
    </div>
    }
  }

export default Experience;  