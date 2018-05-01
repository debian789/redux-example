import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import type, {Route, NavigationState} from 'react-native-tab-view/types';
import {selected_tab} from '../actions'
import {connect} from 'react-redux';
import ShowListComponent from './showList.component.js'
import ActorListComponent from './actorList.component.js'

const initialLayout = {
    height: 0,
    width: Dimensions
        .get('window')
        .width
}

class TapBarComponent extends Component {
    _handleIndexChange = index => {
        this.props.tabsId.index = index
        this
            .props
            .selected_tab(this.props.tabsId)
    }

    _renderHeader = props => (<TabBar {...props}/>)

    _renderScene = SceneMap({shows: ShowListComponent, actors: ShowListComponent})

    render() {
        return (<TabViewAnimated
            style={[styles.container, this.props.style]}
            navigationState={this.props.tabsId}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onIndexChange={this._handleIndexChange}
            initialLayout={initialLayout}
            useNativeDriver/>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabbar: {
        backgroundColor: '#3f51b5'
    },
    tab: {
        width: 120
    },
    indicator: {
        backgroundColor: '#ffeb3b'
    },
    labe: {
        color: '#fff',
        fontWeight: '400'
    }
})

const mapStateToProps = state => {
    return {tabsId: state.tabId}
}

const mapDispatchToProps = dispatch => {
    return {
        selected_tab : (index) => {
            return dispatch(selected_tab(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TapBarComponent)