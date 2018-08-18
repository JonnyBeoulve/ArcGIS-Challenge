import React, { Component } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import { Scene } from 'react-arcgis';

import LocationMark from  '../../components/LocationMark/LocationMark';
import './ArcAgeSearch.css';

/*======================================================================
// This container will perform high level operations for the project
// including handling GET request to the API, in addition to mapping
// renders for the display of location marks on the map.
======================================================================*/
class ArcAgeSearch extends Component {

    render() {
        return (
            <div className="arc-map-container">
                <div className="arc-map">
                    <Scene>
                        <Locations />
                    </Scene>
                </div>
            </div>
        )
    }
}

export default ArcAgeSearch;