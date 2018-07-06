import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/selectcity';

class Cities extends Component {

    render() {
        if (this.props.listcities.length == 0) 
            return (
                <div></div>
            );        
        else 
            return (
                <select
                    onChange=
                    {() => { let i = document.getElementById("mySelect").selectedIndex; console.log ('select id', i); this.props.select (i); }}
                    id="mySelect">
                    {this.props.listcities.map((place, index) => (
                            <option key={index}>
                                {place.name}
                            </option>
                        ))}
                </select>
            )
    }
};

function mapStateToProps(state) {
    return {listcities: state.listcities, ind: state.selectcity}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        select: select
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);