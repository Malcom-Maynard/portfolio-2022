import './index.scss'
import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import Logo from './Logo';

const Home =() =>{
    //defining state of class using statehook
    const [letterClass,setletterClass] = useState('text-animate')
    const nameArray = [' ','A' ,'m','a','r','i']
    return (

        <>
        <div className="container home-page">

            <div className="text-zone">
            <h1> Hi, <br /> I'm  
            
            <AnimatedLetters letterClass={letterClass}  strArray={nameArray} idx={15}/>
           
            <br /> 
            Hello my name is Amari.
            A recent Graduate looking for new and exciting employment opportunities
            </h1>
            
            <h2></h2>
            <Link to="/contact" className='flat-button'>Contact me</Link>
            

            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
        
    )


}

export default Home