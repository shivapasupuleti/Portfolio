
import React from 'react';

function Skills() {
    const skills = [
        { name: "Python", level: 9 },
        { name: "React", level: 8 },
        { name: "Node.js", level: 7 },
        { name: "MongoDB", level: 6 },
        { name: "JavaScript", level: 9 },
        { name: "Java", level: 7 },
        { name: "C++", level: 6 },
        { name: "MySQL", level: 8 },
        { name: "Tailwind CSS", level: 7 },
        { name: "DynamoDB", level: 7 },
        { name: "ElasticSearch", level: 5 },
        { name: "Redis", level: 6 },
        { name: "AWS Lambda", level: 7 },
        { name: "Apache Kafka", level: 6 },
        { name: "Postman", level: 8 },
    ];

    return (
        <>
            <div name="Skills" className="text-center mb-12 pt-10 px-4 py-4">
                <h2 className="text-4xl font-semibold mb-4 text-white">Skills & Technologies</h2>
                <p className="text-lg text-gray-100 mb-6">
                    These are the technologies and skills I've acquired over the years:
                </p>
                <div className="mx-auto max-w-3xl px-2">
                    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-8">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="relative group bg-gradient-to-r from-white to-stone-300 p-3 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-300 overflow-hidden"
                            >
                                <div className="flex items-center justify-center mb-2">
                                    <img
                                        src={`/${skill.name.toLowerCase().replace(/\s+/g, '-')}-logo.png`}
                                        alt={skill.name}
                                        className="w-10 h-10 object-contain mb-2"
                                    />
                                </div>
                                <h3 className="text-sm font-semibold text-center mb-1">{skill.name}</h3>
                                <div className="relative">
                                    <div className="bg-gray-300 h-1.5 rounded-full overflow-hidden">
                                        <div
                                            className="bg-gradient-to-r from-red-500 to-yellow-500 h-full"
                                            style={{ width: `${(skill.level / 10) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center p-4">
                                    <p className="text-white text-center text-xs">{skill.name} - {skill.level}/10</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        <hr />
        </>
    );
}

export default Skills;
