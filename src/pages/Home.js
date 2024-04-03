import React from 'react';
import '../pages/stylings.css';
import rngif from './../assets/rnlogo.gif';
import nodejsLogo from './../assets/node.png';
import reactjsLogo from './../assets/react.gif';
import sequelizeLogo from './../assets/sequelize.gif';
import gitLogo from './../assets/github.webp';
import awsLogo from './../assets/aws.png';
import mongodbLogo from './../assets/MIgBtJS610.gif';
import Angular from './../assets/angular.png';
import html from './../assets/htmlcss.png';
import express from './../assets/express-logo.png';
import js from './../assets/js-logo.webp';
import bit from './../assets/bitbucket.png';

//social media
import fb from './../assets/fb.webp'
import x from './../assets/x.png'
import insta from './../assets/insta.png'
import lin from './../assets/ee.webp'
import gmail from './../assets/gmail.png'
import phone from './../assets/phone.jpeg'

import Navigation from './../components/Navigation'
const Home = () => {
    return (
        <div className='main-container'>
        <Navigation/>
            <div className="background-image">
                <div className="scrolling-name-container">
                    <h1 className="name">Doure Shravan Kumar</h1>
                    <h2 className="sub-name">Software Developer</h2>
                </div>
            </div>
            <h1 className='title1'>TECH STACK</h1>
            <div class="table">
                <div class="row header">
                    <div class="cell">
                        <h1 className='table-title'>Frontend Technologies</h1></div>
                    <div class="cell">  <h1 className='table-title'>Backend Technologies</h1></div>
                    <div class="cell">  <h1 className='table-title'>DevOps</h1></div>
                    <div class="cell">  <h1 className='table-title'>Databases</h1></div>
                    <div class="cell">  <h1 className='table-title'>Version Controls</h1></div>
                </div>
                <div class="row">
                    <div class="cell">
                        <img
                            src={html}
                            alt="React Native Logo"
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                                borderRadius: '400px'
                            }}
                        /> HTML,CSS</div>

                    <div class="cell">
                        <img
                            src={js}
                            alt="React Native Logo"
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                                borderRadius: '400px'
                            }}
                        /> JavaScript</div>
                    <div class="cell">
                        <img
                            src={awsLogo}
                            alt="React Native Logo"
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                                borderRadius: '400px'
                            }}
                        />AWS</div>
                    <div class="cell">
                        <img
                            src={mongodbLogo}
                            alt="React Native Logo"
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                                borderRadius: '400px'
                            }}
                        />MongoDB(Mongoose)</div>
                    <div class="cell">
                        <img
                            src={gitLogo}
                            alt="React Native Logo"
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                                borderRadius: '400px'
                            }}
                        /> Github</div>


                </div>
                <div class="row">
                    <div class="cell">
                        <img
                            src={reactjsLogo}
                            alt="React Native Logo"
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                                borderRadius: '400px'
                            }}
                        />
                        React Js</div>

                    <div class="cell">
                        <img
                            src={nodejsLogo}
                            alt="React Native Logo"
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                                borderRadius: '400px'
                            }}
                        /> Node Js</div>
                    <div class="cell"> </div>
                    <div class="cell">
                        <img
                            src={sequelizeLogo}
                            alt="React Native Logo"
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                                borderRadius: '400px'
                            }}
                        /> MySql(Sequelize)</div>
                    <div class="cell">
                        <img
                            src={bit}
                            alt="React Native Logo"
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                                borderRadius: '400px'
                            }}
                        />Bit Bucket</div>


                </div>
                <div class="row">

                    <div class="cell">
                        <img
                            src={rngif}
                            alt="React Native Logo"
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                                borderRadius: '400px'
                            }}
                        />React Native</div>
                    <div class="cell">
                        <img
                            src={express}
                            alt="React Native Logo"
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                                borderRadius: '400px'
                            }}
                        />Express Js</div>
                    <div class="cell"> </div>
                    <div class="cell"></div>

                    <div class="cell"> </div>


                </div>
                <div class="row">
                    <div class="cell">
                        <img
                            src={Angular}
                            alt="React Native Logo"
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                                borderRadius: '400px'
                            }}
                        />Angular Js</div>
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell"> </div>

                </div>
            </div>
            <div className='container'>
                <div className="projects-page">
                    <h1 className='title'> Major  Projects</h1>
                    <div className="projects-container">
                        <div className="project-conatiner">
                            <h2 className='project'>Online Earning App</h2>
                            <h1 className='data'>The Online Earning App is a mobile application designed and developed by me.
                                Utilizing React Native for the frontend and Node.js for the backend,
                                the application offers users the opportunity to earn money through various activities.
                                The backend is deployed on AWS EC2 instances to ensure scalability and reliability.
                                This project demonstrates the integration of frontend and backend technologies to create a dynamic
                                and engaging mobile application for earning money through tasks and activities.</h1>
                        </div>
                        <h2 className='teckstack'>Teck stack:React-Native,Nodejs,MysqlDb,Sequelize,Aws,BitBucket</h2>
                        <hr></hr>

                        <div className="projects-container">
                            <h2 className='project'>Loansride</h2>
                            <h1 className='data'>I have developed a mobile application, available on both Android and iOS platforms,
                                called Application A. This user-centric platform offers individuals the ability to review their CIBIL scores,
                                facilitating loan applications, and serving as an interface for both business-to-consumer (B2C) and business-to-business (B2B) interactions.
                                Application A specializes in orchestrating seamless interactions between users and financial institutions. Leveraging advanced Node.js skills,
                                I am focused on optimizing backend operations to ensure secure and efficient customer journeys to banks and Non-Banking Financial Companies (NBFCs).
                                Committed to driving innovation in the fintech sector, I contribute to the development of robust and scalable solutions aimed at enhancing the user experience.
                                Through these efforts, I aim to solidify LoansRide's position as a leader in revolutionizing financial services.</h1>

                        </div>
                        <h2 className='teckstack'>Teck stack:React-Native,Nodejs,MysqlDb,Sequelize</h2>

                    </div>

                </div>



            </div>

            <div className='container-education'>
    <div>
        <h2>Connect with me:</h2>
        <ul class="social-icons">

            <h1><a href="https://x.com/ShravanKumarD9?t=cyLhAHXLzy8fp4Expc7yUw&s=09"  class="social-link"><img className='sociallogo' src={x} alt="Twitter" />Twitter</a></h1>
            <h1><a href="https://www.linkedin.com/in/shravan-kumar-a8525b22b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  class="social-link"><img className='sociallogo' src={lin} alt="LinkedIn" />LinkedIn</a></h1>
            <h1><a href="https://www.instagram.com/shravankumardoure?igsh=Zm1nMXV0N3RzMm8="  class="social-link"><img className='sociallogo' src={insta} alt="Instagram" />Instagram</a></h1>
            <h1><a href="https://www.facebook.com/share/wxwBMqwrxDB3Kst4/?mibextid=qi2Omg"  class="social-link"><img className='sociallogo' src={fb} alt="Facebook" />Facebook</a></h1>
        </ul>
    </div>

    <div>
        <h2>Contact Details:</h2>
        <ul class="contact-details">
            <h1><a href='shravankumardoure@gmail.com'className='social-link'><img src={gmail} className='sociallogo' alt="Gmail" />shravankumardoure@gmail.com</a></h1>
            <h1><a href='' className='social-link'><img src={phone} className='sociallogo' alt="Phone" />+91 8008248021</a></h1>
        </ul>
    </div>
</div>

        </div>
    );
}

export default Home;
