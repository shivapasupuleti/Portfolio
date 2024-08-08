import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ReactTyped } from "react-typed";
import { Link } from 'react-scroll';

function Home() {
    return (
        <>
            <div name="Home"
                className='max-w-screen-2xl container mx-auto px-4 md:px-40 my-20 py-16 text-white'>
                <div className='flex flex-col md:flex-row items-center md:items-start'>
                    <div className='w-full md:w-1/2 flex justify-center md:justify-center md:pr-10 md:mt-20'>
                        <img src="/pic1.jpg" className='rounded-full h-[200px] w-[200px] lg:h-[360px] lg:w-[360px] flex-shrink-0' alt="Profile" />
                    </div>
                    <div className='w-full md:w-1/2 mt-12 md:mt-20 space-y-3 text-center md:text-left'>
                        <div className='text-2xl md:text-4xl'>
                            <span>Hello, it's me</span>
                            <h1 className='font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent mt-1'>Shiva Pasupuleti</h1>
                        </div>
                        <div className='flex justify-center md:justify-start space-x-2 text-2xl md:text-4xl'>
                            <h1 className='font-bold'>I'm a</h1>
                            <ReactTyped
                                className='text-violet-300 font-bold'
                                strings={["Software Developer", "Programmer"]}
                                typeSpeed={50}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-xl text-justify'>I'm a Master's student in Advance Computer Science at the University of Liverpool,
                            with two years of experience as a software developer. I love tackling challenges
                            and turning ideas into reality, always ready to dive into new tech adventures!
                        </p>
                        <br />
                        <div className="flex flex-col items-center space-y-4">
                            {/* <!-- Buttons --> */}
                            <div className="flex space-x-4">
                                <button className="w-25 md:w-48 h-15 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-pink-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300">
                                    <Link to="Contact"
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass='active'>
                                        Contact Me
                                    </Link>
                                </button>
                                <a href="/VenkataShiva_Resume.pdf" target="_blank" rel="noopener noreferrer" className="w-25 md:w-48 h-15 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-pink-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 flex items-center justify-center">
                                    My Resume
                                </a>
                            </div>
                            {/* <!-- Icons --> */}
                            <div className="flex space-x-6">
                                <a href="https://www.linkedin.com/in/venkata-shiva-pasupuleti-5a6276187/" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-125 transition-colors">
                                    <i className="fab fa-linkedin fa-2x"></i>
                                </a>
                                <a href="https://github.com/shivapasupuleti" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-125 transition-colors">
                                    <i className="fab fa-github fa-2x"></i>
                                </a>
                                <a href="https://leetcode.com/u/shivapasupuleti1619/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    <i className="fas fa-code fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Home

