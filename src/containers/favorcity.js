import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/selectcity';
import {fav} from '../actions/fav';

const favStyle = {
    fontSize: '14px',
    color: 'red'
};

class FavorCity extends Component {
    render() {
        if (this.props.favor == -1) 
            return (
                <div>
                    <button onClick= {() => { let i = this.props.ind; this.props.fav (i); console.log ('favor id', i);}}>
                        Добавить в избранное
                    </button>
                    <br/>
                    <br/>
                </div>
            );        
        else 
            return (
                <div>

                    <button onClick= {() => { let i = this.props.ind; this.props.fav (i); console.log ('favor id', i);}}>
                        Добавить в избранное
                    </button>
                    <div onClick= {()=>{let i = this.props.favor; this.props.select (i);}}>
                        <h3 style={favStyle}>
                            Избранное: {this.props.listcities[this.props.favor].name}
                        </h3>
                    </div>
                </div>
            )
    }
};

function mapStateToProps(state) {
    return {listcities: state.listcities, favor: state.favor, ind: state.selectcity}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fav: fav,
        select: select
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FavorCity);