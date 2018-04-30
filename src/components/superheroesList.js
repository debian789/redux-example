import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../actions'

class SuperheroesList extends Component {

    componentWillUnmount() {
        this.props.fetchData()
    }

    getTvShows() {
        const {dataTvMaze} = this.props; 
        if (dataTvMaze) {
            return dataTvMaze.map((tv, index)=> {
                return (<View key={index}><Text>{tv.show.name}</Text></View>);
            })
        }
    }


    //render() {
    //    console.log(this.props)
    //    //return(this.getSuperheroes())
    //    <View>
    //        {this.props.dataTvMaze}
    //    </View>
    //}

    render() {
        return (<View>
            {this.props.dataTvMaze.isFeching && <Text>Loading</Text>}
            {
                this.props.dataTvMaze.data.length ? 
                this.getTvShows()
                : null
            }

            </View>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        // state.superheroes es el nombre que se definio en 
        // reducer/superheroes.js
       // superheroes: state.superheroes
       dataTvMaze: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SuperheroesList);
