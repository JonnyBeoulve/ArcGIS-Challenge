import { Component } from 'react';
import { loadModules } from 'react-arcgis';
 
/*======================================================================
// This component will create an object containing a graphic point
// and attributes for each person result age filtered by user input.
======================================================================*/
class LocationPoint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graphic: null,
        };
    }
 
    // Upon an instance of this component being mounted, define the values
    // for presentation and integration of a point on the map before pushing
    // it to state.
    componentDidMount = () => {
        loadModules(['esri/Graphic']).then(([ Graphic ]) => {
            
            // Create a point located based on the person's long/lat
            const point = {
                type: "point", // autocasts as new Point()
                latitude: this.props.personLatitude,
                longitude: this.props.personLongitude
            };
 
            // Define the symbol for the point
            const pointSymbol = {
                type: "simple-marker", // Autocasts as new SimpleFillSymbol()
                color: [255, 0, 0, 0.8],
                height: 15,
                width: 15,
                cursor: "pointer",
                outline: { // autocasts as new SimpleLineSymbol()
                    color: [0, 0, 0],
                    width: 1
                }
            };

            // Define attributes for the point, which will be displayed to the user
            const pointAtt = {
                Name: this.props.personName,
                Age: this.props.personAge,
                Latitude: this.props.personLatitude,
                Longitude: this.props.personLongitude
            }

            // Intantiate object from class to be pushed to state.
            const graphic = new Graphic({
                geometry: point,
                symbol: pointSymbol,
                attributes: pointAtt,
                popupTemplate: {  // autocasts as new PopupTemplate()
                  title: "{Name}",
                  content: [{
                    type: "fields",
                    fieldInfos: [{
                      fieldName: "Age"
                    }, {
                      fieldName: "Latitude"
                    }, {
                      fieldName: "Longitude"
                    }]
                  }]
                }
              });
 
            // Instantiate graphic
            this.setState({ 
                graphic 
            });
            this.props.view.graphics.add(graphic);
        })
    }

    // When a new filtered array populates the map, remove previous graphics
    // to unrender unapplicable data.
    componentWillUnmount() {
        this.props.view.graphics.remove(this.state.graphic);
    }
     
    render() {
        return null;
    }
}

export default LocationPoint;