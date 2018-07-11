import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addcity } from '../actions/actions';
import { select } from '../actions/actions';

Object.prototype.equalsObj = function (b) {
    var a = this;
    let i;
    for (i in a) {
        if (JSON.stringify(b) === JSON.stringify(a[i])) {
            return true;
        }
    }
    return false;
}

function getWeather(searchStr) {
    let keyAPI = "c34ddd8ea7eee215842cbf7f4273e6e8";
    let xhr = "http://api.openweathermap.org/data/2.5/weather?q=" + searchStr + "&units=metric&lang=ru&APPID=" + keyAPI;
    return fetch(xhr).then(res => res.json());
}

class FindCity extends Component {

    render() {
        return (
            <div>
                <input type="text" size="40" id="myFind" />
                <button onClick={() => {

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
                            console.log('added ', tmp);
                            this.props.addcity(tmp);
                            let s = this.props.listcities.length;
                            this.props.select(s - 1);

                        }
                    }).catch((err) => console.log(err))
                }}>
                    Поиск
            </button>
            </div>
        )

    }
};

export default connect(state => ({listcities: state.listcities, ind: state.selectcity}), dispatch => (bindActionCreators({addcity: addcity,select: select},dispatch)))(FindCity);
