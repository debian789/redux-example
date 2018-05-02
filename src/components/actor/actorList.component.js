import React, {Component} from 'react'
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {fetchDataActors} from '../../actions'
import ActorListStyle from './actorList.style'

class ActorListComponent extends Component {

    componentWillMount() {
            this
                .props
                .fetchDataActors()
        }
    
        getActors() {
            const {actors} = this.props;
            if (actors) {
                return actors
                    .dataPeople
                    .map((actor, index) => {
                        return (
                            
                                <View key={index} style={ActorListStyle.itemList}>
                                    <Text>{actor.person.name}</Text>
                                </View>
                        );
                    })
            }
        }
    
        render() {
            return (
                <View style={ActorListStyle.containerList}>
                <ScrollView>
                    {this.props.actors.isFeching && <Text>Loading</Text>}
                    {this.props.actors.data.length
                        ? this.getActors()
                        : null}
                        </ScrollView>
                </View>
            )
        }
    }

const mapStateToProps = state => {
    return {
        actors: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDataActors: () => {
            return dispatch(fetchDataActors())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActorListComponent);
