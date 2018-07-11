import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/actions';


const Cities = (props) => {     
    const {listcities, select} = props;
    if (listcities.length == 0) 
        return (
            <div></div>
        );
    else
        return(
        <select
            onChange=
            {() => { let i = document.getElementById("mySelect").selectedIndex; console.log ('select id', i); select (i); }}
            id="mySelect">
            {listcities.map((place, index) => (
                    <option key={index}>
                        {place.name}
                    </option>
                ))}
        </select>)
}

export default connect(state => ({listcities: state.listcities, ind: state.selectcity}), dispatch => (bindActionCreators({select: select},dispatch)))(Cities);