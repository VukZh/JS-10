import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/actions';
import {fav} from '../actions/actions';

const favStyle = {
    display: 'inline-block',
    align: 'center',
    fontSize: '14px',
    color: 'red',
    padding: '10px',
    border: '3px outset #FFDEAD ',
    margin: '10px'
};

class FavorCity extends Component {
    render() {
        if (this.props.favor == -1) 
            return (
                <div>
                    <button onClick= {() => { if (this.props.listcities.length > 0) {this.props.fav (this.props.ind); console.log ('favor id', this.props.ind);}}}>
                        Добавить в избранное
                    </button>
                    <br/>
                    <br/>
                </div>
            );        
        else 
            return (
                <div>
                    <button onClick= {() => { if (this.props.listcities.length > 0) {this.props.fav (this.props.ind); console.log ('favor id', this.props.ind);}}}>
                        Добавить в избранное
                    </button>
                    <div onClick= {()=>{this.props.select (this.props.favor);}}>
                        <h3 style={favStyle}>
                            Избранное: {this.props.listcities[this.props.favor].name}
                        </h3>
                    </div>
                </div>
            )
    }
};
export default connect(state => ({listcities: state.listcities, favor: state.favor, ind: state.selectcity}), dispatch => (bindActionCreators({fav: fav,select: select},dispatch)))(FavorCity);