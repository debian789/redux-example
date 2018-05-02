import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../../actions'
import ShowListStyle from './showList.style'

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
                            <View key={index} style={ShowListStyle.itemList}>
                                <Text>{tv.show.name}</Text>
                            </View>
                    );
                })
        }
    }

    render() {
        return (
            <View style={ShowListStyle.containerList}>
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
    return {
        dataTvMaze: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => {
            return dispatch(fetchData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowListComponent);
