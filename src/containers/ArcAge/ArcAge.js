import React, { Component } from 'react';
import { Scene } from 'react-arcgis';

import LocationPoint from  '../../components/LocationPoint/LocationPoint';
import './ArcAge.css';

// Temporary data solution
import people from '../../store/people.json';

/*======================================================================
// This container will perform high level operations for the project
// including handling GET request to the API, in addition to mapping
// renders for the display of location marks on the map.
======================================================================*/
class ArcAge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: people
        };
    }

    render() {
        return (
            <div className="arc-map-container">
                <div className="arc-map">
                    <Scene>
                        {(this.state.data)
                            ? this.state.data.map((person, index) => {
                                return (
                                    <LocationPoint
                                        key={person._id}
                                        personName={this.state.data[index].name} 
                                        personAge={this.state.data[index].age} 
                                        personLatitude={this.state.data[index].latitude} 
                                        personLongitude={this.state.data[index].longitude} 
                                    />
                                )
                            })
                            : null}
                    </Scene>
                </div>
            </div>
        )
    }
}

export default ArcAge;