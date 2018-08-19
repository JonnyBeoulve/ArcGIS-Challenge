import React, { Component } from 'react';
import { Scene } from 'react-arcgis';

import LocationPoint from  '../../components/LocationPoint/LocationPoint';
import './ArcAge.css';

// Temporary data solution
import people from '../../store/people.json';

/*======================================================================
// This container will perform high level operations for the project
// including setting the data file to state, providing an input filter
// by the user, and rendering the map along with visible points.
======================================================================*/
class ArcAge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alert: '',
            ageFilter: '',
            data: people,
            dataFilteredByAge: [],
        };
    }

    // Once the user presses enter after typing in an age, this
    // will filter all data to only include people who match
    // the input age.
    handleFilterByAge = (e) => {
        e.preventDefault();

        this.handleDisplayAlert('Filtering...');
        this.setState({
            dataFilteredByAge: []
        })

        const filteredArray = this.state.data.filter((person) => {
            if (person.age.toString() === this.state.ageFilter) return person;
        })
        const matchesFoundText = `${filteredArray.length} matches found.`;
        setTimeout(() => {
            this.handleDisplayAlert(matchesFoundText);
        }, 1500);

        this.setState({
            dataFilteredByAge: [...filteredArray]
        })


    }

    // Show alert text for 1.5 seconds in middle of map.
    handleDisplayAlert = (alertText) => {
        this.setState({
            alert: alertText
        })

        setTimeout(() => {
            this.setState({
                alert: ''
            });
        }, 1500);
    }

    // Render the ArcMap, age filter input box, and any location points
    // that match the user's filter.
    render() {
        return (
            <div className="arc-map-container">
                <div className="arc-map">
                    <form onSubmit={this.handleFilterByAge}>
                        <input className="arc-map-input-filter" type="text" name="age" label="Age" placeholder="Filter by age" onChange={e => this.setState({ ageFilter: e.target.value })} />
                    </form>
                    {(this.state.alert)
                        ? <div className="arc-map-alert">{this.state.alert}</div>
                        : null }
                    <Scene>
                        {(this.state.dataFilteredByAge)
                            ? this.state.dataFilteredByAge.map((person) => {
                                return (
                                    <LocationPoint
                                        key={person._id}
                                        personName={person.name} 
                                        personAge={person.age} 
                                        personLatitude={person.latitude} 
                                        personLongitude={person.longitude} 
                                    />
                                )
                            })
                            : null }
                    </Scene>
                </div>
            </div>
        )
    }
}

export default ArcAge;