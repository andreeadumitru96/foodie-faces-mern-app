import React, {Component} from 'react';

// import Body from '../BodyContainer/Body/Body';
import MostRatedLocationsContainer from '../MostRatedLocationsContainer/MostRatedLocationsContainer';
import LocationSearchContainer from '../LocationSearchContainer/LocationSearchContainer';
import LocationDetailsContainer from '../../shared/LocationDetailsContainer/LocationDetailsContainer';

import './Body.css';

class BodyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMostRatedLocationsMount: this.props.componentToMount === 'MostRatedLocationsComponent' ? true : false,
            isLocationSearchMount: this.props.componentToMount === 'LocationSearchComponent' ? true : false,
            isLocationDetailsMount: this.props.componentToMount === 'LocationDetailsComponent' ? true : false
        };
        this._triggeredBody = this._triggeredBody.bind(this);
        this.locationDetails = []
    }

    render() {
        return(
            <div className="body-container">
                {this.state.isMostRatedLocationsMount ? 
                    <MostRatedLocationsContainer
                        triggeredBody = {this._triggeredBody}
                    />
                    : null}
                {this.state.isLocationSearchMount ? 
                    <LocationSearchContainer
                        city = {this.props.receivedLocationsFromHeader[0].city}  
                        locationsList = {this.props.receivedLocationsFromHeader}
                        triggeredBody = {this._triggeredBody}
                    /> 
                    : null
                }
                {this.state.isLocationDetailsMount ? 
                    <LocationDetailsContainer
                        locationDetails = {this.locationDetails}
                     /> 
                     : null}
            </div>
        )
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            isMostRatedLocationsMount: newProps.componentToMount === 'MostRatedLocationsComponent' ? true : false,
            isLocationSearchMount: newProps.componentToMount === 'LocationSearchComponent' ? true : false,
            isLocationDetailsMount: newProps.componentToMount === 'LocationDetailsComponent' ? true : false
        })
    }

    _triggeredBody(componentToMount, data) {
        this.locationDetails = data;
        this.setState({
            isLocationDetailsMount: componentToMount === 'LocationDetailsComponent' ? true : false,
            isMostRatedLocationsMount: false,
            isLocationSearchMount: false
        })
    }

    

    



}

export default BodyContainer;