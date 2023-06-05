"use client";
import React from 'react';
import {BsWindowFullscreen} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai';
import Image from "next/image";
import headshot from '../../public/headshot.png';
import Head from 'next/head';
import favicon from '../../public/favicon.ico';
import hewbotImg from '../../public/hewbot.png';
import clouds from '../../public/clouds.png';
import kiji from '../../public/kiji.jpg';
import {AiFillCode} from 'react-icons/ai';
import {GoServer} from 'react-icons/go';
import {BiGitBranch} from 'react-icons/bi';

export default function Home() {
  return (
    <div>
      <title>Hello!</title>
    <main className='bg-gradient-to-t from-slate-800 to-slate-700 px-10 '>
      <section className="">
        <nav className="py-10 mb-14 flex justify-left ">
          <h1 className='text-sm '> </h1>
         
          <ul className='flex items-center'>
            <li>
            </li>
            <li className='px-3'>
            <a href="https://github.com/mattwyd/mattwyd.github.io/blob/main/Matthew_Proctor_Resume.pdf" download="Matthew_Proctor_Resume.pdf" className='lg:fixed top-4 right-4 lg:top-8 lg:right-8 bg-gradient-to-r hover:bg-slate-600 hover:border  from-cyan-600 to-teal-600 text-2xl text-white px-4
             py-2 rounded-md'>Resume</a>
            </li>
          </ul>
        </nav>
        
        <div className='text-center p-10 py-10'>
          <h2 className='text-5xl py-2 text-cyan-500'>
          Matthew Proctor
          </h2>
          <h3 className='text-2xl py-2'> 
          Software Developer
          </h3>
          <p className='text-md py-5 leading-8 max-w-xl mx-auto md:text-xl '>
          I am a developer based in Toronto, 
          <span className = 'text-cyan-400'> passionate </span> 
          about continuous learning and 
          <span className = 'text-cyan-400'> problem-solving. </span> 
          I approach new challenges with 
          <span className = 'text-cyan-400'> enthusiasm </span>           
          always eager to improve systems and create effective solutions.
          </p>
        </div>
        <div className='text-6xl flex justify-center gap-16'>
          <a href='mailto:mattproct@gmail.com'><AiFillMail /></a>
          <a href='http://www.github.com/mattwyd'><AiFillGithub /></a>
          <a href='https://www.linkedin.com/in/matt-proctor-138bbb252/'><AiFillLinkedin /></a>
        </div>
      </section>

<div className="flex justify-center mt--6">

  <Image src={clouds} alt="clouds" className="w-full h-full object-cover " />
</div>


    <section className="flex flex-col justify-center items-center mt-[-400px]">
        <h3 className ='text-3xl pb-8'>My Skillset  </h3>
        <div className='md:flex justify-center gap-8'>
          <div className='text-center justify-center items-center bg-slate-700 shadow-lg p-10 rounded-lg'>
            <AiFillCode className = 'justify-center text-9xl' /> 
            <h3 className='text-l font-medium pt-8 py-3'>Languages</h3>

            <p className='py-1 text-cyan-300'>Python3</p>
            <p className='py-1 text-cyan-400'>JavaScript</p>
            <p className='py-1 text-cyan-400'>TypeScript</p>
            <p className='py-1 text-cyan-500'>C++</p>
            <p className='py-1 text-cyan-500'>C#</p>
            <p className='py-1 text-cyan-300'>Java</p>
          </div>

          <div className='text-center justify-center items-center bg-slate-700 shadow-lg p-10 rounded-lg'>
            <BsWindowFullscreen className = 'justify-center text-9xl' /> 
            <h3 className='text-l font-medium pt-8 py-3'>Front End</h3>

            <p className='py-1 text-cyan-300'>React</p>
            <p className='py-1 text-cyan-300'>Tailwind</p>
            <p className='py-1 text-cyan-400'>Pug</p>
            <p className='py-1 text-cyan-400'>HTML5</p>
            <p className='py-1 text-cyan-400'>CSS3</p>

          </div>
          <div className='text-center justify-center items-center bg-slate-700 shadow-lg p-10 rounded-lg'>
            <GoServer className = 'justify-center text-9xl' /> 
            <h3 className='text-l font-medium pt-8 py-3'>Backend & Tools</h3>

            <p className='py-1 text-cyan-300'>SQL</p>
            <p className='py-1 text-cyan-300'>MongoDB</p>
            <p className='py-1 text-cyan-400'>Node</p>
            <p className='py-1 text-cyan-400'>Express</p>
            <p className='py-1 text-cyan-400'>Docker</p>
          </div>
        </div>
    </section>




    <section className="flex flex-col justify-center items-center lg:m-40 sm:m-0">
  <h3 className="text-3xl sm:pt-4">Projects</h3>
  <p className="text-md py-6 leading-6">
    Over the past five years, I&apos;ve developed a diverse range of projects using various languages and technologies.
  </p>


  <div className="relative bg-slate-700 rounded-lg shadow-lg p-6 ">
  <div className="flex flex-col flex-grow">
    <div className="flex items-center">
      <div className="mr-6">
        <Image src={hewbotImg} alt="hewbot" height={128} width={128} />
      </div>
      <div>
        <h3 className="text-2xl py-1 text-cyan-400">HewBot</h3>
        <h3 className="text-1">
          A Discord bot service written in Python using Discord API
        </h3>
      </div>
    </div>
    <div className="flex  flex-col justify-center">
      <div className="py-1 ">
        <h2>Project developed using Object Oriented principles including Abstraction and Polymorphism.</h2>
      </div>
      <p>
        Functionality allowed users to add their own functionality as well as use matplotlib to run analysis on user&apos;s server.
      </p>
    </div>
    <a href="https://github.com/mattwyd/hewbot" className="absolute top-5 right-5 bg-gradient-to-r from-cyan-600 to-teal-600 text-sm text-white px-3 py-2 rounded-lg hover:border hover:bg-slate-600">Examine</a>
  </div>
</div>

<div className="relative my-6 bg-slate-700 rounded-lg shadow-lg p-6">
  <div className="flex flex-col flex-grow">
    <div className="flex items-center">
      <div className="mr-6">
        <Image src={kiji} alt="kjiji" height={128} width={128} />
      </div>
      <div>
        <h3 className="text-2xl py-1 text-cyan-400">Kijiji Listing Alerts</h3>
        <h3 className="py-1">
          A Javascript program to periodically search kiji and send out alerts based on market value
        </h3>
      </div>
    </div>
    <div className="flex flex-col justify-center">
      <div className="py-1 ">
        <h2>Integrated third-party APIs to fetch real-time market data and compare it with the listings.</h2>
      </div>
      <p>
         Implemented a notification system to send alerts via email or SMS when a listing matches the desired market value.
      </p>
    </div>
    <a href="https://github.com/mattwyd/kla" className="absolute top-5 right-5 bg-gradient-to-r from-cyan-600 to-teal-600 text-sm text-white px-3 py-2 rounded-lg hover:border hover:bg-slate-600">Examine</a>
  </div>
</div>





</section>

<footer className=" py-16">
  <div className="container mx-auto">
    <div className="flex justify-center">
      <p className="text-sm">&copy; 2023 made by matt</p>
    </div>
  </div>
</footer>

    </main>
    </div>
  );
}


