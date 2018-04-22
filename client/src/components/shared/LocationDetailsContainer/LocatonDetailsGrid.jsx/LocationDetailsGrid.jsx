import React, { Component } from 'react';
import ReactStars from 'react-stars';
import { GridList, GridTile } from 'material-ui/GridList';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

class LocationDetailsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <GridList
                cols={2}
                cellHeight={200}
                padding={1}
                style={styles.gridList}
            >
                {this.props.locationDetails.images.map((image) => (
                    <GridTile
                        actionPosition="left"
                        titlePosition="top"
                        titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                    >
                        <img src={image} />
                    </GridTile>
                ))}

            </GridList>

        );
    }

}

export default LocationDetailsGrid;