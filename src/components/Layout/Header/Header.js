import React from 'react';
import './Header.css';

import arcGISLogo from '../../../assets/img/arcgis-logo.png';
import linkedinLogo from '../../../assets/img/linkedin-logo.png';
import githubLogo from '../../../assets/img/github-logo.png';

/*======================================================================
// This stateless functional component will display the header.
======================================================================*/
const Header = () => {
    return (
        <header className="header">
            <div className="header-title">
                <a href="https://www.arcgis.com/index.html" target="_blank" rel="noopener noreferrer">
                    <img src={arcGISLogo} alt="ArcGIS Logo" className="header-logo"></img>
                </a>
            </div>
            <div className="header-links">
                <a href="https://www.linkedin.com/in/jleack/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} className="header-link" alt="LinkedIn logo PNG" /></a>
                <a href="https://github.com/JonnyBeoulve/ArcGIS-Challenge" target="_blank" rel="noopener noreferrer"><img src={githubLogo} className="header-link" alt="GitHub logo PNG" /></a>
            </div>
        </header>
    )
}

export default Header;