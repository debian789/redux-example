import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../../actions'

class ShowListComponent extends Component {
    componentWillMount() {
        this
            .props
            .fetchData()
    }

    getTvShows() {
        const {dataTvMaze} = this.props;
        if (dataTvMaze) {
            return dataTvMaze
                .data
                .map((tv, index) => {
                    return (
                        
                            <View key={index}>
                                <Text>{tv.show.name}</Text>
                            </View>
                    );
                })
        }
    }

    render() {
        return (
            <View style={{
                backgroundColor: 'red'
            }}>
            <ScrollView>
                {this.props.dataTvMaze.isFeching && <Text>Loading</Text>}
                {this.props.dataTvMaze.data.length
                    ? this.getTvShows()
                    : null}
                    </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    debugger
    return {
        // state.superheroes es el nombre que se definio en reducer/superheroes.js
        // superheroes: state.superheroes
        dataTvMaze: state.data
    }
}

const mapDispatchToProps = dispatch => {
    debugger
    return {
        fetchData: () => {
            return dispatch(fetchData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowListComponent);
