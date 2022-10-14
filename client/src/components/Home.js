import React from 'react';
import {Link} from 'react-router-dom';
// import 'animate.css';
import highlightImg from '../assets/highlight-img.jpeg'

const Home=()=>{
    
    return(
        <>
            <div className='header-section'>
                <div className='header-section-inner'>
                    <h1>Test Taking Website</h1>
                    <p>Hire beside us</p>
                </div>
            </div>
            <div className='highlight-section'>
                <div className='highlight-img'>
                    <img src={highlightImg} alt='highlight'/>
                </div>
                <div className='highlight-info'>
                    <p className='heading'>Lorem Ipsum</p>
                    <p className='content'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <div className='test-list-section'>
                <div className="test-card">
                    <div className="contentBx">
                        <h2>Javascript Test</h2>
                        <Link className='size' to='/dataForm/javascript'>Get Started</Link>
                    </div>
                </div>
                <div className="test-card">
                    <div className="contentBx">
                        <h2>SQL Test</h2>
                        <Link className='size' to='/dataForm/sql'>Get Started</Link>
                    </div>
                </div>
                <div className="test-card">
                    <div className="contentBx">
                        <h2>Dummy Test</h2>
                        <Link className='size' to='/'>Dummy</Link>
                    </div>
                </div>
                <div className="test-card">
                    <div className="contentBx">
                        <h2>Dummy Test</h2>
                        <Link className='size' to='/'>Dummy</Link>
                    </div>
                </div>
            </div>
            <div className='highlight2-section'>
                <div className='highlight2-info'>
                    <p className='heading'>Lorem Ipsum</p>
                    <p className='content'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className='highlight2-img'>
                    <img src={highlightImg} alt='highlight'/>
                </div>
            </div>
            <div className='contact-section'>
                <p className='heading'>Contact Us</p>
                <div className='contact-info'>
                    <p className='content'>info@abc.com</p>
                    <p className='content'>+1 123-456-7890</p>
                </div>
            </div>
        </>
    )
}

export default Home;