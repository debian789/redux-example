import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import type, {Route, NavigationState} from 'react-native-tab-view/types';
import {selected_tab} from '../../actions'
import {connect} from 'react-redux';
import ShowListComponent from '../show/showList.component.js'
import ActorListComponent from '../actor/actorList.component.js'
import TabBarStyle from './tabBar.style'

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

    _renderScene = SceneMap({shows: ShowListComponent, actors: ActorListComponent})

    render() {
        return (<TabViewAnimated
            style={[TabBarStyle.container, this.props.style]}
            navigationState={this.props.tabsId}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onIndexChange={this._handleIndexChange}
            initialLayout={initialLayout}
            useNativeDriver/>)
    }
}

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