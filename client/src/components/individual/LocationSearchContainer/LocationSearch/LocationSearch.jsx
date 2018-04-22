import React, { Component } from 'react';
import LocationTileListContainer from '../../../shared/LocationTileListContainer/LocationTileListContainer';
import GoogleMapContainer from '../GoogleMapContainer/GoogleMapContainer';

import './LocationSearch.css';

class LocationSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render() {
		return (
			<div className="location-search">
               <LocationTileListContainer 
                    locationsList = {this.props.locationsList} 
                    className="location-search__location-tile-list"
                    triggeredBody = {this.props.triggeredBody}
                    
                />
               <GoogleMapContainer 
                    className="location-search__google-map"
                    locationsList = {this.props.locationsList}            
                /> 
               
			</div>
		);
	}
}

export default LocationSearch;