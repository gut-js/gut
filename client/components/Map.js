import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import Marker from './Marker';

export default class Map extends Component {

  // shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    console.log("simplemappage this.props: ", this.props)
    return (
       <GoogleMap
        center={[this.props.lat, this.props.lng]}
        defaultZoom={14}>
        <Marker lat={this.props.lat} lng={this.props.lng} text={''} />

      </GoogleMap>
    );
  }
}