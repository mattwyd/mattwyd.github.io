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
          <h1 className='text-sm '> page up button, fade from a blue texture to just deep sea blue </h1>
         
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
          a software developer based in Toronto, 
          <span className = 'text-cyan-400'> passionate </span> 
          about continuous learning and 
          <span className = 'text-cyan-400'> problem-solving. </span> 
          I approach new challenges with 
          <span className = 'text-cyan-400'> enthusiasm </span>           
          always eager to improve systems and create effective solutions.
          </p>
        </div>
        <div className='text-6xl flex justify-center gap-16'>
          <AiFillMail />
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
      </section>

    <section style={{backgroundColor: "pink"}}>
        <h3 className ='text-3xl py-1'>My Skillset  </h3>
        <div className='text-center justify-center items-center bg-slate-700 shadow-lg p-10 rounded-lg'>
          <AiFillCode className = 'justify-center text-9xl' /> 
          <h3 className='text-l font-medium pt-8 '>Languages</h3>
          <h1 className=''>that I have used!</h1>

          <p className='py-1 text-cyan-200'>C++</p>
          <p className='py-1 text-cyan-300'>Java</p>
          <p className='py-1 text-cyan-400'>JavaScript</p>
          <p className='py-1 text-cyan-500'>SQL</p>
          <p className='py-1 text-cyan-600'>Python3</p>
          <p className='py-1 text-cyan-600'>    </p>
        </div>
        <div className='text-center justify-center items-center bg-slate-700 shadow-lg p-10 rounded-lg'>
          <p>      </p>
          <GoServer className = 'justify-center text-9xl' /> 
          <h3 className='text-l font-medium pt-8 '>Languages</h3>
          <h1 className=''>that I have used!</h1>

          <p className='py-1 text-cyan-200'>C++</p>
          <p className='py-1 text-cyan-300'>Java</p>
          <p className='py-1 text-cyan-400'>JavaScript</p>
          <p className='py-1 text-cyan-500'>SQL</p>
          <p className='py-1 text-cyan-600'>Python3</p>
        </div>
        <div className='text-center justify-center items-center bg-slate-700 shadow-lg p-10 rounded-lg'>
          <BiGitBranch className = 'justify-center text-9xl' /> 
          <h3 className='text-l font-medium pt-8 '>Languages</h3>
          <h1 className=''>that I have used!</h1>

          <p className='py-1 text-cyan-200'>C++</p>
          <p className='py-1 text-cyan-300'>Java</p>
          <p className='py-1 text-cyan-400'>JavaScript</p>
          <p className='py-1 text-cyan-500'>SQL</p>
          <p className='py-1 text-cyan-600'>Python3</p>
        </div>
    </section>






      <section className = 'm-4 max-w-xl mx-80 justify-center  '>
        <div> 
          <h3 className ='text-3xl py-1'> Projects </h3>        
        </div>

        <div>
          <h3 className='text-3xl py-1 text-color'>Projects</h3>
          <p className='text-md py-2 leading-6'> 
            Over the past five years, I've developed a diverse range of projects using various languages and technologies. I'm excited to be able to showcase some of these here for you.
          </p>
        </div>
      


      <div className = 'm-0 p-0'>
        <h3 className='text-2xl py-1'> HewBot </h3>
          <div className='rounded-full h-128 w-32 overflow-hidden border-white border'>
                <Image src={hewbotImg} alt='hewbot' height={128} width={128} />
          </div>
          <p className='text-md py-2 leading-6'> 
            Over the past five years, I've developed a diverse range of projects using various languages and technologies. I'm excited to be able to showcase some of these here for you.
          </p>
      </div>
      </section>
    </main>
    </div>
  );
}
