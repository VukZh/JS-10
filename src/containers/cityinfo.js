import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addcity} from '../actions/actions';
class CityInfo extends Component {
    render() {
        if (this.props.listcities.length == 0) 
            return (
                <div></div>
            );
        else 
            return (
                <div>
                    <h2>
                        Город {this.props.listcities[this.props.ind].name}
                    </h2>
                    <h3>
                        Температура {this.props.listcities[this.props.ind].temp}
                    </h3>
                    <h3>
                        Влажность {this.props.listcities[this.props.ind].humidity}
                    </h3>
                    <h3>
                        Описание {this.props.listcities[this.props.ind].description}
                    </h3>
                </div>
            )
    }
};

export default connect(state => ({listcities: state.listcities, ind: state.selectcity}), dispatch => (bindActionCreators({addcity: addcity},dispatch)))(CityInfo);