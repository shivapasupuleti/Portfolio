import React, { useState } from 'react';

function ProjectCard({ title, description, techStack, imageUrl, projectUrl, githubUrl }) {
    const [isReadMore, setIsReadMore] = useState(false);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };


    const MAX_WORDS = 25;
    const words = description.split(' ');
    const truncatedDescription = words.slice(0, MAX_WORDS).join(' ');
    const shouldShowReadMore = words.length > MAX_WORDS;

    return (
        <div className="mx-auto mt-3 w-full px-4 py-4">
            <div className="border-4 border-l-stone-400  rounded-lg shadow-md overflow-hidden h-auto w-auto flex flex-col hover:scale-105 transition-transform">
                <div className="flex justify-center   w-30 h-40 mt-4">
                    <img src={imageUrl} alt={title} className="w-auto h-full rounded-lg" />
                </div>
                <div className="flex flex-col flex-grow p-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    </div>
                    <p className={`text-gray-500 mb-4 flex-grow overflow-hidden`}>
                        {isReadMore ? description : truncatedDescription}
                        {shouldShowReadMore && (
                            <button onClick={toggleReadMore} className="text-blue-500 hover:underline ml-2">
                                {isReadMore ? 'Read Less' : 'Read More'}
                            </button>
                        )}
                    </p>
                    <div className="flex flex-wrap mb-4">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full mr-2 mb-2"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-center space-x-6 mt-2">
                        {projectUrl &&(<a
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r h-10 text-center from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full shadow-md hover:scale-110 hover:from-pink-500 hover:to-purple-500 transition-colors"
                        >
                            Live Demo
                        </a>)}
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 text-white h-10 px-4 py-2 rounded-full shadow-md hover:scale-110 cursor-pointer hover:bg-gray-900 transition-colors flex items-center justify-center"
                        >
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
