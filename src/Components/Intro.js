import "../CSS/Intro.css";
import {RiComputerLine} from "react-icons/ri";
import {FaGithubSquare, FaLinkedin, FaServer, FaUser } from "react-icons/fa";
import { PiToolboxFill, PiGearFill  } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import TechOrbit from "./TechOribit";
import projectsData from '../Data/projectInfo.json';
import ProjectCard from './Project';
import {useRef, useState} from "react";



function IntroPage() {
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isFunMode, setIsFunMode] = useState(false);

    const audioRef = useRef(new Audio('badRomance.MP3'));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const toggleFunMode = () => {
        setIsFunMode(!isFunMode);

        if (!isFunMode) {
            setIsFunMode(true);
            audioRef.current.play();
            audioRef.currentTime = 0;

            setTimeout(() => {
                setIsFunMode(false);
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }, 8500);
        } else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = contactData;
        window.location.href = `mailto:y031125k@gmail.com?subject=New Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
        setTimeout(() => {
            if (document.hasFocus()) {
                alert("It seems your email client didn't open automatically. Please send an email to y031125k@gmail.com with your message.");
            }
        }, 500);
    };

    const scrollToSection = (sectionName) => {
        const sections = document.getElementsByClassName(sectionName);
        if (sections.length > 0) {
            sections[0].scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`Intro-page ${isFunMode ? 'fun-mode' : ''}`}>
            <div className="Intro-basic-info">
                <div className="Intro-basic-info-content">
                    <img className="profile-image" src={'profile.jpg'} alt="profile pic" onClick={toggleFunMode}/>
                    <h1>Randolph Jenkins</h1>
                    <h3>Software Engineer</h3>
                    <a href="https://www.washington.edu/" target="_blank" rel="noopener noreferrer"
                       className="Intro-basic-info-content-link">University of Washington</a>
                    <div className="Intro-basic-info-content-social">
                        <a href="https://www.linkedin.com/in/randolph-jenkins-tang/" target="_blank"
                           rel="noopener noreferrer">
                            <FaLinkedin/>
                        </a>
                        <a href="https://github.com/RandolphTang?tab=repositories" target="_blank"
                           rel="noopener noreferrer">
                            <FaGithubSquare/>
                        </a>
                    </div>
                </div>
                <div className="Intro-basic-info-navigation">
                    <button onClick={() => scrollToSection('Intro-about-me-info')}><FaUser/></button>
                    <button onClick={() => scrollToSection('Intro-detailed-technical-info')}><PiGearFill/></button>
                    <button onClick={() => scrollToSection('Intro-projects-info')}><PiToolboxFill/></button>
                    <button onClick={() => scrollToSection('Intro-contact-info')}><MdEmail/></button>
                </div>
            </div>
            <div className="Intro-detailed-info">
                <div className="Intro-about-me-info">
                    <h3>About Me</h3>
                    <p>"I'm a Software Engineering student currently studying at the
                        <a href="https://ischool.uw.edu/" target="_blank" rel="noopener noreferrer"
                           className="Intro-about-me-info-link">Information School</a>, University of Washington at
                        Seattle,<br/>
                        set to graduate in 2026. Specializing in software development and Machine Learning. My expertise
                        lies in full-stack development <br/>
                        with a focus on Java, JavaScript, Python, and SQL. I've worked on projects involving
                        microservices architecture, API development, <br/>
                        and cloud technologies like AWS and Google Cloud. As a Software Development Engineer at
                        <a href="https://udubimpact.weebly.com/" target="_blank" rel="noopener noreferrer"
                           className="Intro-about-me-info-link">UW Impact++</a> and
                        <a href="https://swecc.org/" target="_blank" rel="noopener noreferrer"
                           className="Intro-about-me-info-link">UW SWECC</a>, <br/>
                        I've gained practical experience in building platforms with IoT integration and
                        team-coordination skills. <br/>
                        Beyond academic pursuits, My career goal is to build and develop high-quality applications by
                        utilizing best-fit technologies <br/>
                        to deliver sustainable solutions and reliable products that meet customer needs and bring
                        business value."</p>

                </div>
                <div className="Intro-detailed-technical-info">
                    <div className="Intro-skill-info">
                        <div className="Intro-skill-info-section">
                            <RiComputerLine/>
                            <div className="Intro-skill-info-section-description">
                                <h3>Front end</h3>
                                <p>I like to design and showcase my creative vision <br/>
                                    while optimizing user experience, <br/>
                                    with the benefit of instant feedback</p>
                            </div>
                            <div className="Intro-skill-info-section-language">
                                <h3>Language</h3>
                                <p>JavaScript, TypeScript, CSS3, Bootstrap</p>
                                <h3>Frameworks / Libraries / Tools</h3>
                                <p>Node.js, React.js, Jest, Firebase</p>
                            </div>
                        </div>
                        <div className="Intro-skill-info-section-br-line"></div>
                        <div className="Intro-skill-info-section">
                            <FaServer/>
                            <div className="Intro-skill-info-section-description">
                                <h3>Back end</h3>
                                <p>I enjoy finding new and interesting <br/>
                                    problems to solve while designing flexible, <br/>
                                    and secure APIs / database models</p>
                            </div>
                            <div className="Intro-skill-info-section-language">
                                <h3>Language</h3>
                                <p>Java, Python, C#, Swift, R, SQL</p>
                                <h3>Frameworks / Libraries / Tools</h3>
                                <p>Spring Boot, PostgreSQL, Firebase, <br/>
                                    CI-CD, AWS, GCP, Azure</p>
                            </div>
                        </div>
                    </div>
                    <div className="Intro-tech-orbit-info-intro">
                        <h3>Main Stack</h3>
                    </div>
                    <div className="Intro-tech-orbit-info"><TechOrbit/></div>
                </div>
                <div className="Intro-profession-experience-info">
                    <div className="Intro-profession-experience-info-title">
                        <h3>Work Experience</h3>
                    </div>
                    <div className="profession-experience">
                        <div className="experience-item">
                            <div className="experience-header">
                                <h4>UW Impact++ | Software Development Engineer</h4>
                                <span className="experience-date">Aug 2023 - March 2024</span>
                            </div>
                            <ul className="experience-details">
                                <li>Collaborated with Adelante Story Foundation to develop Python-based API services
                                    and <br/>
                                    React.js-based front-end for an education website with IoT integration for real-time
                                    data processing.
                                </li>
                                <li>Used Raspberry Pi to collect and process raw agricultural data, integrating
                                    Google <br/>
                                    Cloud service for back-end data storage and analysis which improved data
                                    processing<br/>
                                    efficiency by 20% compared to manual collection.
                                </li>
                            </ul>
                        </div>
                        <div className="experience-item">
                            <div className="experience-header">
                                <h4>Teaching Assistant | IntroToCS from CMU @ Microsoft TEALS</h4>
                                <span className="experience-date">Aug 2023 - June 2024</span>
                            </div>
                            <ul className="experience-details">
                                <li>Assisted in grading over 70 programming assignments and conducted 3 weekly
                                    office <br/>
                                    hours with over 50 K-12 students, addressing questions on data structures
                                    which <br/>
                                    improved the course's progress by 40%.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Intro-projects-info">
                    <h2 id="Intro-projects-info-title">Projects</h2>
                    <div className="projects-container">
                        {projectsData.map((project, index) => (
                            <ProjectCard
                                key={index}
                                name={project.name}
                                stacks={project.stacks}
                                description={project.description}
                                summary={project.summary}
                                imageUrl={project.imageUrl}
                                link={project.link}
                                githubLink={project.githubLink}
                            />
                        ))}
                    </div>
                </div>
                <hr/>
                <div className="Intro-contact-info">
                    <h2 id="Intro-contact-info-title">LET'S CHAT 😙</h2>
                    <div className="Intro-contact-info-socials">
                        <a href="https://www.linkedin.com/in/randolph-jenkins-tang/" target="_blank"
                           rel="noopener noreferrer">
                            <FaLinkedin/>
                        </a>
                        <a href="https://github.com/RandolphTang?tab=repositories" target="_blank"
                           rel="noopener noreferrer">
                            <FaGithubSquare/>
                        </a>
                    </div>
                    <form onSubmit={handleSubmit} className="Intro-contact-form">
                        <input
                            type="text"
                            name="name"
                            value={contactData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={contactData.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            required
                        />
                        <textarea
                            name="message"
                            value={contactData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            required
                        ></textarea>
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
                <div className="Intro-footer">
                </div>
            </div>
        </div>
    )
}

export default IntroPage;