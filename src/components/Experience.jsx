import React from 'react';

const ExperiencePage = () => {
    

    return (
        <>
        <div name='Experience' className="max-w-screen-xl mx-auto px-6 py-12 text-white">
            {/* Introduction */}
            <div className="text-center mb-12 space-x-6 space-y-6">
                <h1 className="text-4xl font-bold mb-10">My Professional Experience</h1>
                <p className="text-xl">
                    With two years of experience as a software developer, I've had the privilege of working on innovative projects and contributing to various technical solutions. Here's a summary of my journey and the skills I've developed.
                </p>
            </div>

            {/* Experience Section */}
            <div className="flex flex-col lg:flex-row lg:space-x-8 mb-12 text-black">
                {/* Delhivery Experience Card */}
                <div className="bg-gradient-to-r from-white to-stone-400 p-6 rounded-lg shadow-lg flex-1 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <img src="/delhivery-logo.png" alt="Delhivery Logo" className="w-16 h-16 rounded-full shadow-md" />
                        <div className="ml-4">
                            <h2 className="text-2xl font-semibold">Delhivery</h2>
                            <p className="text-xl font-medium">Software Developer</p>
                            <p className="text-sm text-gray-800">Apr 2021 - Jul 2023</p>
                        </div>
                    </div>
                    <p className=" mb-4 text-gray-800 text-lg">
                        At Delhivery, I developed various microservices and worked on optimizing performance and scalability. I collaborated with cross-functional teams to deliver high-quality solutions and integrated with multiple technologies.
                    </p>
                    <ul className="list-disc pl-5  text-gray-800 text-lg">
                        <li>Built and maintained microservices using Python and DynamoDB.</li>
                        <li>Implemented RESTful APIs and integrated with AWS Lambda and Serverless Framework.</li>
                        <li>Worked with Apache Kafka for data streaming and messaging.</li>
                        <li>Conducted code reviews and resolved software defects.</li>
                        <li>Trained on AWS Lambda, Serverless Framework, and Azure services.</li>
                    </ul>
                </div>

                
            </div>
        </div>
        <hr />
        </>
    );
};

export default ExperiencePage;
