import React, { Component } from 'react';
import { Map } from 'react-arcgis';

import './ArcAgeSearch.css';

/*======================================================================
// This container will house the map for the project.
======================================================================*/
class ArcAgeSearch extends Component {

    render() {
        return (
            <div className="arc-map-container">
                <div className="arc-map">
                    <Map />
                </div>
            </div>
        )
    }
}

export default ArcAgeSearch;