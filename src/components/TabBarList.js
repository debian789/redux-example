import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import type, {Route, NavigationState} from 'react-native-tab-view/types';

const initialLayout = {
    height: 0,
    width: Dimensions
        .get('window')
        .width
}

const Article = () => <View style={[styles.container, styles.tabbar]}>
    <Text>hola</Text>
</View>

const Contact = () => <View style={[styles.container, styles.tabbar]}>
    <Text>data</Text>
</View>

export default class TopBarList extends Component {
    state = {
        index: 1,
        routes: [
            {
                key: 'article',
                title: 'Article'
            }, {
                key: 'contact',
                title: 'Contact'
            }
        ]
    }

    _handleIndexChange = index => this.setState({index})

    _renderHeader = props => (<TabBar
        {...props}/>)

    _renderScene = SceneMap({article: Article, contact: Contact})

    render() {
        return (<TabViewAnimated
            style={[styles.container, this.props.style]}
            navigationState={this.state}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onIndexChange={this._handleIndexChange}
            initialLayout={initialLayout}/>)
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