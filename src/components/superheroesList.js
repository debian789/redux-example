import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class SuperheroesList extends Component {

    getSuperheroes() {
        const {superheroes} = this.props; 
        if (superheroes) {
            return superheroes.map((superhero, index)=> {
                return (<View key={index}><Text>{superhero.superhero}</Text></View>);
            })
        }
    }


    render() {
        console.log(this.props)
        return(this.getSuperheroes())
    }
}

const mapStateToProps = state => {
    return {
        // state.superheroes es el nombre que se definio en 
        // reducer/superheroes.js
        superheroes: state.superheroes
    }
}

export default connect(mapStateToProps)(SuperheroesList);
