import React, {Component} from 'react'
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {fetchDataActors} from '../../actions'
import {ActorListStyle} from './actorList.style'

class ActorListComponent extends Component {

    componentWillMount() {
            this
                .props
                .fetchDataActors()
        }
    
        getTvShows() {
            const {people} = this.props;
            if (people) {
                return people
                    .dataPeople
                    .map((person, index) => {
                        return (
                            
                                <View key={index}>
                                    <Text>{person.person.name}</Text>
                                </View>
                        );
                    })
            }
        }
    
        render() {
            return (
                <View >
                <ScrollView>
                    {this.props.people.isFeching && <Text>Loading</Text>}
                    {this.props.people.data.length
                        ? this.getTvShows()
                        : null}
                        </ScrollView>
                </View>
            )
        }
    }

const mapStateToProps = state => {
    return {
        people: state.data
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
