import React, { Component } from "react";
import { Scene } from "react-arcgis";

import LocationPoint from "../../components/LocationPoint/LocationPoint";
import UserGuide from "../../components/UserGuide/UserGuide";
import "./ArcAge.css";

import { fadeIn } from "react-animations";
import { StyleSheet, css } from "aphrodite";

// Local data solution
import people from "../../store/people.json";

// Animated styles using Aphrodite and React Animations.
const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "1s"
  }
});

/*======================================================================
// This container will perform high level operations for the project
// including setting the data file to state, providing an input filter
// by the user, and rendering the map along with visible points.
======================================================================*/
class ArcAge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: "",
      ageFilter: "30",
      data: people,
      dataFilteredByAge: [],
      showGuide: false
    };
  }

  // Once the user presses enter after typing in an age, this will filter
  // all data to only include people who match the input age. We will
  // display a filtering alert and total matches during the process.
  handleFilterByAge = e => {
    e.preventDefault();
    const filteredArray = this.state.data.filter(person => {
      if (person.age.toString() === this.state.ageFilter) return person;
      else return false;
    });
    const matchesFoundText = `${filteredArray.length} matches found.`;

    this.handleDisplayAlert("Filtering...");
    this.setState({
      dataFilteredByAge: []
    });
    setTimeout(() => {
      this.handleDisplayAlert(matchesFoundText);
    }, 1500);

    this.setState({
      dataFilteredByAge: [...filteredArray]
    });
  };

  // Show alert text for 1.5 seconds in middle of map.
  handleDisplayAlert = alertText => {
    this.setState({
      alert: alertText
    });

    setTimeout(() => {
      this.setState({
        alert: ""
      });
    }, 1500);
  };

  // Pop up user guide
  handleDisplayUserGuide = () => {
    this.setState({
      showGuide: true
    });
  };

  // Close user guide upon pressing X on the top right
  handleCloseUserGuide = () => {
    this.setState({
      showGuide: false
    });
  };

  // Render the ArcMap, age filter input box, and any location points
  // that match the user's filter. A user guide or alerts will display
  // during certain state changes.
  render() {
    return (
      <div className="arc-map-container">
        <div className={["arc-map", css(styles.fadeIn)].join(" ")}>
          <form onSubmit={this.handleFilterByAge}>
            <input
              className="arc-map-input-filter"
              type="text"
              name="age"
              label="Age"
              value={this.state.ageFilter}
              placeholder="Filter by age"
              onChange={e => this.setState({ ageFilter: e.target.value })}
            />
          </form>
          <button
            className="arc-user-guide-button"
            onClick={this.handleDisplayUserGuide}
          >
            User Guide
          </button>
          {this.state.showGuide && (
            <UserGuide closeGuide={this.handleCloseUserGuide} />
          )}
          {this.state.alert && (
            <div className="arc-map-alert">{this.state.alert}</div>
          )}
          <Scene>
            {this.state.dataFilteredByAge &&
              this.state.dataFilteredByAge.map(person => {
                return (
                  <LocationPoint
                    key={person._id}
                    personName={person.name}
                    personAge={person.age}
                    personLatitude={person.latitude}
                    personLongitude={person.longitude}
                  />
                );
              })}
          </Scene>
        </div>
      </div>
    );
  }
}

export default ArcAge;
