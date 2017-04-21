import React from 'react';
import {changeMap, changeMapOptions, changeMapScale, getGameState} from "../Game";



export default class MapOptionWidget extends React.Component {
    constructor(props){
        super();

        this.handleTileSizeChange = this.handleTileSizeChange.bind(this);
        this.handleRowCountChange = this.handleRowCountChange.bind(this);

        this.handleMapUrlChange = this.handleMapUrlChange.bind(this);
        this.handleFogOfWarChange = this.handleFogOfWarChange.bind(this);
        this.handleGridLabelsChange = this.handleGridLabelsChange.bind(this);
        this.handleGridLinesChange = this.handleGridLinesChange.bind(this);
        
        this.state = {
            tileSize : getGameState().mapScale.tileSize,
            rowCount : Math.floor(getGameState().mapScale.height/getGameState().mapScale.tileSize)
        };
        
    }
    
    handleTileSizeChange(event){
        this.setState({tileSize:event.target.value});
        
        if (event.target.value >= 50 && event.target.value <= 1700){
            
            var newHeight = this.state.rowCount*event.target.value;
            
            changeMapScale({
                tileSize: Number(event.target.value),
                height: newHeight,
            });
        }
    }
    
    handleRowCountChange(event){
        this.setState({rowCount: event.target.value});
        
        if (event.target.value >= 1 && event.target.value <= 100){
            
            changeMapScale({
                height: event.target.value*getGameState().mapScale.tileSize,
            });
        }
    }
    
    //Map changes
    handleMapUrlChange(event){
        this.setState({mapUrl: event.target.value});
        changeMap(event.target.value);
        console.log('changing the map url');
    }
    
    handleFogOfWarChange(event){
        changeMapOptions({
            fogOfWar: event.target.checked,
            gridLines: this.props.mapOptions.gridLines,
            gridLabels: this.props.mapOptions.gridLabels
        });
    }
    
    handleGridLinesChange(event){
        changeMapOptions({
            fogOfWar: this.props.mapOptions.fogOfWar,
            gridLines: event.target.checked,
            gridLabels: this.props.mapOptions.gridLabels
        });
    }
    
    handleGridLabelsChange(event){
        changeMapOptions({
            fogOfWar: this.props.mapOptions.fogOfWar,
            gridLines: this.props.mapOptions.gridLines,
            gridLabels: event.target.checked
        });
    } 

    render(){
        return (
            <div>
                <h2>Map</h2>
                <div>
                    <h3>Image Url</h3>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Map URL" value={this.props.mapUrl} onChange={this.handleMapUrlChange}/>
                    </div>
                    
                    {/*<h3>Tile Size</h3>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="100" value={this.state.tileSize} onChange={this.handleTileSizeChange}/>
                    </div>
                    
                    <h3>Row Count</h3>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="10" value={this.state.rowCount} onChange={this.handleRowCountChange}/>
                    </div>*/}
                    
                    <h3>Extras</h3>
                    <div className="checkbox"> 
                        <label>
                            <input type="checkbox" checked={this.props.mapOptions.fogOfWar} onChange={this.handleFogOfWarChange}/> Fog of war
                        </label>
                    </div>
                    
                    <div className="checkbox"> 
                        <label>
                            <input type="checkbox" checked={this.props.mapOptions.gridLines} onChange={this.handleGridLinesChange}/> Grid Lines
                        </label>
                    </div>
                    
                    <div className="checkbox"> 
                        <label>
                            <input type="checkbox" checked={this.props.mapOptions.gridLabels} onChange={this.handleGridLabelsChange}/> Grid labels
                        </label>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}