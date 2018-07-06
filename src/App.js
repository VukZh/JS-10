import React, { Component } from 'react';
import './App.css';

import Cities from './containers/cities';
import CityInfo from './containers/cityinfo';
import FavorCity from './containers/favorcity';
import FindCity from './containers/findcity';



class App extends Component {
  render() {
    return (
      <div className="App">
      <table width="100%" border="1">
        <tr>
          <td>
            <header className="App-header">
              <title>Weather Site</title>
              <h1>Погода</h1>
              <FindCity/>

             <p><Cities/></p>
             
            </header>
          </td>
        </tr>
        <tr>
          <td>
            <h2>Прогноз погоды</h2>
            <h3>
              
            <CityInfo/>

            </h3>

              <FavorCity/>
            
          </td>
        </tr>
      </table>
      

    </div>

        

    );
  }
}

export default App;
