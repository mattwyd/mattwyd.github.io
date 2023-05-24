import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai';
import Image from "next/image";
import headshot from '../../public/headshot.png';
import Head from 'next/head';
import favicon from '../../public/favicon.ico';
import hewbotImg from '../../public/hewbot.png';
import {AiFillCode} from 'react-icons/ai';
import {GoServer} from 'react-icons/go';
import {BiGitBranch} from 'react-icons/bi';

export default function Home() {
  return (
    <div>
      <title>Home</title>
        
    <main className='bg-gradient-to-t from-slate-800 to-slate-700 px-10 '>
      <section className="min-h-screen">
        <nav className="py-10 mb-14 flex justify-between md:mx-10">
          <h1 className='text-sm '> br </h1>
         
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-4xl'/>
            </li>
            <li>
              <a className='bg-gradient-to-r from-cyan-600 to-teal-600 text-2xl text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a>
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
          Hi I am a developer based in Toronto, 
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

    <section className="min-h-screen flex flex-col justify-center items-center ">
        <h3 className ='text-3xl py-8'>My Skillset  </h3>
        <div className='flex justify-center gap-8'>
          <div className='text-center justify-center items-center bg-slate-700 shadow-lg p-10 rounded-lg'>
            <AiFillCode className = 'justify-center text-9xl' /> 
            <h3 className='text-l font-medium pt-8 py-3'>Languages</h3>

            <p className='py-1 text-cyan-300'>Java</p>
            <p className='py-1 text-cyan-300'>Python3</p>
            <p className='py-1 text-cyan-400'>JavaScript</p>
            <p className='py-1 text-cyan-400'>TypeScript</p>
            <p className='py-1 text-cyan-500'>C++</p>
            <p className='py-1 text-cyan-500'>C#</p>
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
          <div className='text-center justify-center items-center bg-slate-700 shadow-lg p-10 rounded-lg'>
            <BiGitBranch className = 'justify-center text-9xl' /> 
            <h3 className='text-l font-medium pt-8 py-3'>Front End</h3>

            <p className='py-1 text-cyan-300'>React</p>
            <p className='py-1 text-cyan-300'>Tailwind</p>
            <p className='py-1 text-cyan-400'>Pug</p>
            <p className='py-1 text-cyan-400'>HTML5</p>
            <p className='py-1 text-cyan-400'>CSS3</p>

          </div>
        </div>
    </section>






    <section className=" flex flex-col justify-center items-center mx-40  ">
    <h3 className="text-3xl ">Projects</h3>
      <p className="text-md py-6 leading-6">
        Over the past five years, I&apos;ve developed a diverse range of projects using various languages and technologies.
      </p>

      <div className=' bg-slate-700 rounded-lg shadow-lg p-6'>
        <h3 className='text-2xl  py-1 text-center'>HewBot</h3>
          <div>
          <div className='flex rounded-full h-128 w-32 overflow-hidden border-white shadow-lg'>
                <Image src={hewbotImg} alt='hewbot' height={128} width={128} className='mr-40'  />
                <p>hello</p>
          </div>
            <p className='text-1 '>
              Project developed using Object Oriented principles including Abstraction and Polymorphism. 
            </p>
            </div>
          <h2 className='p-2'> Discord bot service written in Python using Discord API </h2>
            <p>
              Functionality allowed users to add their own functionality as well as use matplotlib to run analysis on user's server.
            </p>
      </div>







      </section>
    </main>
    </div>
  );
}
