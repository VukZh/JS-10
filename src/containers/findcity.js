import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addcity} from '../actions/add';
import {select} from '../actions/selectcity';

Object.prototype.equalsObj = function(b) {
    var a = this;
    let i;
    for (i in a) {
      if (JSON.stringify(b) == JSON.stringify(a[i])) {
        return true;
      }
    }
    return false;
}

function getWeather(searchStr) {
    let url = "http://api.openweathermap.org/data/2.5/weather";
    let keyAPI = "c34ddd8ea7eee215842cbf7f4273e6e8";
    let textAPI;
    textAPI = searchStr;
    let data = "?q=" + textAPI + "&units=metric&lang=ru" + "&APPID=" + keyAPI;
    let xhr = url + data;
    return fetch(xhr).then(res => res.json());
}

class FindCity extends Component {

    render() {
        return (
            <div>
            <input type="text" size="40" id="myFind"/>
            <button onClick={()=>{

                let tmp;
    let find = document.getElementById("myFind").value;
    getWeather(find).then((r) => {  
      tmp = {
        name: r.name,
        temp: r.main.temp,
        humidity: r.main.humidity,
        description: r.weather[0].description
      };

      if (!this.props.listcities.equalsObj(tmp)) {
          console.log ('added ',tmp);
          this.props.addcity(tmp);
        let s = this.props.listcities.length;
        this.props.select (s-1);

      }
    }).catch((err) => console.log(err))
        }}>
              Поиск
            </button>
            </div>
        )

    }
};

function mapStateToProps(state) {
    return {listcities: state.listcities, ind: state.selectcity}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addcity: addcity,
        select: select
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FindCity);