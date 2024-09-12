import React from 'react';
import '../CSS/TechOribit.css';

const TechOrbit = () => {

    return (
        <div className="tech-orbit-container">
            <div className="orbit-container">
                <div className="orbit" id="Java">
                    <div className="pos" id="Java">
                        <div className="pos-tech">
                            <img src={`${process.env.PUBLIC_URL}/java.svg`} alt="java pic"/>
                        </div>
                    </div>
                </div>
                <div className="orbit" id="React">
                    <div className="pos" id="React">
                        <div className="pos-tech">
                            <img src={`${process.env.PUBLIC_URL}/react.png`} alt="react pic"/>
                        </div>
                    </div>
                </div>
                <div className="orbit" id="Javascript">
                    <div className="pos" id="Javascript">
                        <div className="pos-tech">
                            <img src={`${process.env.PUBLIC_URL}/javascript.png`} alt="js pic"/>
                        </div>
                    </div>
                </div>
                <div className="orbit" id="AWS">
                    <div className="pos" id="AWS">
                        <div className="pos-tech">
                            <img src={`${process.env.PUBLIC_URL}/aws.png`} alt="aws pic"/>
                        </div>
                    </div>
                </div>
                <div className="orbit" id="Python">
                    <div className="pos" id="Python">
                        <div className="pos-tech">
                            <img src={`${process.env.PUBLIC_URL}/python.png`} alt="python pic"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechOrbit;