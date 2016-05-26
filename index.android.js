/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'

const english2german = require('./english_german.json')

class DictionaryNative extends Component {

    constructor(props) {
        super(props)

        this.state = {
            input: '',
            output: ''
        }
    }

    // componentDidMount() {
    //     console.log(this.state)
    //


    render() {
        return (
            <View style={ styles.parent }>
                <Text>
                    Type something in English: {this.state.input}
                </Text>

                <TextInput text={ this.state.input }
                           onChangeText={(e) => this.setState({input: e})}
                           onSubmitEditing={(e) => this.showMeaning(e) }
                />

                <Text style={ styles.germanLabel }>
                    Its German equivalent is:
                </Text>

                <Text style={ styles.germanWord }>
                    { this.state.output }
                </Text>

            </View>
        )
    }

    showMeaning(e) {
        // Use the ternary operator to check if the word
        // exists in the dictionary.
        const meaning = this.state.input in english2german ?
            english2german[this.state.input] :
            "Not Found"

        // Update the state
        this.setState({output: meaning})
    }

}

const styles = StyleSheet.create({
    // For the container View
    parent: {
        padding: 16
    },

    // For the Text label
    germanLabel: {
        marginTop: 20,
        fontWeight: 'bold'
    },

    // For the Text meaning
    germanWord: {
        marginTop: 15,
        fontSize: 30,
        fontStyle: 'italic'
    }
})

AppRegistry.registerComponent('DictionaryNative', () => DictionaryNative)
// AppRegistry.registerComponent('Dictionary', () => DictionaryNative)
