import React, { Component } from 'react';
import { Scene } from 'react-arcgis';

import LocationPoint from  '../../components/LocationPoint/LocationPoint';
import './ArcAge.css';

/*======================================================================
// This container will perform high level operations for the project
// including handling GET request to the API, in addition to mapping
// renders for the display of location marks on the map.
======================================================================*/
class ArcAge extends Component {

    render() {
        return (
            <div className="arc-map-container">
                <div className="arc-map">
                    <Scene>
                        <LocationPoint />
                    </Scene>
                </div>
            </div>
        )
    }
}

export default ArcAge;