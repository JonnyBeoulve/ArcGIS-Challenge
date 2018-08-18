import React, { Component } from 'react';
import { loadModules } from 'react-arcgis';
 
/*======================================================================
// This component will create an object containing a graphic point
// and attributes for each person result age filtered during the
// GET request.
======================================================================*/
class LocationPoint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graphic: null
        };
    }
 
    render() {
        return null;
    }
 
    componentWillMount() {
        loadModules(['esri/Graphic']).then(([ Graphic ]) => {
            // Create a polygon geometry
            const point = {
                type: "point", // autocasts as new Point()
                longitude: -22.168051,
                latitude: 87.485721
            };
 
            // Create a symbol for rendering the graphic
            const pointSymbol = {
                type: "simple-marker", // autocasts as new SimpleFillSymbol()
                color: [255, 0, 0, 0.8],
                height: 15,
                width: 15,
                outline: { // autocasts as new SimpleLineSymbol()
                    color: [0, 0, 0],
                    width: 1
                }
            };

            const pointAtt = {
                Name: 'Salinas Reyes',
                Age: '27',
                Latitude: '-22.168051',
                Longitude: '87.485721'
            }


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
 
            this.setState({ graphic });
            this.props.view.graphics.add(graphic);
        })
    }
}

export default LocationPoint;