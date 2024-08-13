import React from 'react';
import ProjectCard from './Projectcard.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


function Projects() {
    const projects = [
        {
            title: "Book Store",
            description: "A responsive bookstore web application where users can find multiple books for free and for paid. This web application features secure user authentication, including signup and login, to access premium content. Users can browse free books without logging in, while paid books require authentication to view and purchase. The website is designed to provide a seamless user experience across various devices through responsive design principles.",
            techStack: ["MongoDB", "Express.js", "React", "Node.js", "TailwindCss"],
            imageUrl: "/project_pics/bookstore.jpg",
            projectUrl:"",
            githubUrl: "https://github.com/shivapasupuleti/Book_Store",
        },
        {
            title: "Face Recognition Attendance System",
            description: "This System uses facial recognition technology to record the attendance through a high resolution digital camera/webcam that detects and recognizes faces and compare the recognize faces with students/known faces images stored in faces database(CSV).",
            techStack: ["Python", "OpenCV", "FacialRecogniton", "MachineLearning"],
            imageUrl: "/project_pics/Miniproject.png",
            projectUrl: "",
            githubUrl:"https://github.com/shivapasupuleti/FaceRecognition_Attendance_System"
        },
        {
            title: "Text Summarizer",
            description: "Developed a Text Summarizer application utilizing machine learning and natural language processing (NLP) techniques. This application helps gather summarized versions of text by allowing users to upload their data and receive concise summaries in a specified number of lines. The primary purpose is to provide reliable summaries of web pages or uploaded files based on user preferences, effectively discarding unnecessary sentences to highlight the most important information.",
            techStack: ["Python", "MachineLearning", "NLP", "BeautifulSoap", "NLTK"],
            imageUrl: "/project_pics/textsummarizer.jpeg",
            projectUrl: "",
            githubUrl:""
        }
        // Add more projects here...
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    return (
        <>
            <div name="Projects" className="py-12 text-white">
                <div className="container mx-auto px-5">
                    <h2 className="text-4xl font-semibold text-center mb-8">My Projects</h2>
                    <Slider {...settings}>
                        {projects.map((project) => (
                            <div key={project.title} className="px-2">
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    techStack={project.techStack}
                                    imageUrl={project.imageUrl}
                                    projectUrl={project.projectUrl}
                                    githubUrl={project.githubUrl}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div >
            <hr />
        </>
    );
}

export default Projects;
