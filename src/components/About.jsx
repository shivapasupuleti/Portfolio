import React from 'react';

function About ()  {
    const skills = [
        { name: "Python", level: 9 },
        { name: "React", level: 8 },
        { name: "Node.js", level: 7 },
        { name: "MongoDB", level: 6 },
        { name: "JavaScript", level: 9 },
        { name: "Java", level: 7 },
        { name: "C++", level: 6 },
        { name: "MySQL", level: 8 },
        { name: "Tailwind CSS", level: 7 }
    ];

    return (
        <>
        <div name="About" className="max-w-screen-2xl container text-white py-12 px-6 lg:px-20 flex flex-col items-center">
            <h1 className="text-4xl font-bold ">About Me</h1>
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12">
                <div className="h-[200px] w-[200px] lg:h-[400px] lg:w-[400px] mb-6 lg:mb-0 flex-shrink-0">
                    <img src="/pic5.jpg" alt="Profile" className="w-full h-full object-cover rounded-lg shadow-lg" />
                </div>
                <div className="flex flex-col text-center lg:text-left lg:w-2/3 space-y-6">
                    <p className="text-lg text-center leading-relaxed">
                        I'm a passionate software developer currently pursuing a Master's degree in Advance Computer Science at the University of Liverpool.
                        With 2 years of experience in the industry, I've developed a knack for creating innovative solutions and tackling complex challenges.
                    </p>
                    <p className="text-lg text-center leading-relaxed">
                        I hold a Bachelor's degree in Computer Science from BVRIT, Hyderabad, where I achieved a CGPA of 9.59/10.
                        This academic foundation has equipped me with a strong skill set in languages like Python, React, and Java. I'm always excited about learning new things and applying my skills to new challenges.
                    </p>
                </div>
            </div>
            {/* <div className="container mx-auto mt-12 relative p-4 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
                    {skills.map(skill => (
                        <div key={skill.name} className="relative group">
                            <span className="w-30 h-10 bg-gradient-to-r text-white font-bold from-purple-600 to-pink-600 py-2 px-3 rounded-full text-center cursor-pointer">
                                {skill.name}
                            </span>
                            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-44 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-lg p-2">
                                <div className="flex items-center justify-between">
                                    <span>{skill.name}</span>
                                    <span>{skill.level}/10</span>
                                </div>
                                <div className="mt-1 bg-white h-2 rounded-lg w-full relative">
                                    <div
                                        className="h-full rounded-lg absolute bg-gradient-to-r from-red-600 via-red-300 to-green-700"
                                        style={{
                                            width: `${(skill.level / 10) * 100}%`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
            <div className="container mx-auto mt-12">
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
                    <div className="bg-gradient-to-r from-white to-neutral-400 p-6 rounded-lg shadow-lg text-black flex-1">
                        <h2 className="text-2xl font-bold mb-2">Master of Science in Advance Computer Science</h2>
                        <p>University of Liverpool</p>
                        <p>Expected Graduation: Nov, 2024</p>
                        <p>Grade: 2:1</p>
                    </div>
                    <div className="bg-gradient-to-r from-white to-stone-400 p-6 rounded-lg shadow-lg text-black flex-1">
                        <h2 className="text-2xl font-bold mb-2">Bachelor of Technology in Computer Science</h2>
                        <p>BVRIT, Hyderabad</p>
                        <p>Gradution year: 2021</p>
                        <p>CGPA: 9.59/10</p>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        </>
        
    );
};

export default About;

