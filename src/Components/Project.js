import React from 'react';
import { FaLink, FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import '../CSS/ProjectCard.css'
const ProjectCard = ({ name, link, githubLink, stacks, description, summary, imageUrl }) => {
    return (
        <div className="project-container">
            <img className="project-image" src={`${process.env.PUBLIC_URL}/${imageUrl}`} alt={name}/>
            <div className="project-information">
                <div className="project-information-name-link">
                    <h2>{name}</h2>
                    <div className="project-links">
                        {link && (
                            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link"><FaLink/></a>
                        )}
                        {githubLink && (
                            <a href={githubLink} target="_blank" rel="noopener noreferrer"
                               className="project-github-link">
                                <FaGithub/>
                            </a>
                        )}
                    </div>
                    <p className="project-summary">{summary}</p>
                    <p className="project-stacks">{stacks.join(' | ')}</p>
                    <p className="project-description">{description}</p>
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
    githubLink: PropTypes.string,
    stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};

ProjectCard.defaultProps = {
    link: '',
    githubLink: ''
};

export default ProjectCard;