import React, {Component} from 'react';

import Cities from './cities';
import CityInfo from './cityinfo';
import FavorCity from './favorcity';
import FindCity from './findcity';

const Weather = () => {     
        return(
            <div width="100%">

            <div className="App-header" >
                <title>Weather Site</title>
                <h1>Погода</h1>
                <FindCity/>
                <p><Cities/></p>
            </div>
            <div className="App">
            <h2>Прогноз погоды</h2>
                <h3>
                    <CityInfo/>
                </h3>
                    <FavorCity/>
              </div>
            </div> 
        )
}

export default Weather;