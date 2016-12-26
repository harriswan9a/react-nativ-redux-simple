import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Button
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//載入所有ACTION
import * as counterAction from './actions/counterAction';

class App extends Component {

    render() {
        const {number, actions} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    使用redux, 透過actions來更新state,{'\n'}
                    並且通知畫面rerender
                </Text>
                <Text>
                    {number}
                </Text>
                <Button onPress={actions.incrementAction} title="+" color="red"/>
                <Button onPress={actions.decrementAction} title="-" color="red"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

//從store接收state更新通知
const mapStateToProps = (state) => {
    return {number: state.counterReducer.number}
}

//綁定Action、Dispatch傳給props
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(counterAction, dispatch)
    }
}

//綁定store
module.exports = connect(mapStateToProps, mapDispatchToProps)(App);