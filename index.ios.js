import React, {
    Component
} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View,
} from 'react-native'

const english2german = require('./english_german.json')
const german2english = require('./german_english.json')

class DictionaryNative extends Component {

    constructor(props) {
        super(props)

        this.state = {
            input: '',
            output: '',
            switchEn2De: true,
            from: 'English',
            to: 'German'
        }
    }

    render() {
        return (
            <View style={ styles.parent }>
                <Text>
                    Type something in {this.state.from} => {this.state.to}:
                </Text>

                <TextInput text={ this.state.input }
                           autoFocus={true}
                           onChangeText={(e) => this.setState({input: e})}
                           onSubmitEditing={(e) => this.showMeaning(e) }
                           style={styles.input}
                />

                <Switch onValueChange={(value) => this.switchLanguage(value)}
                        value={this.state.switchEn2De}/>

                <Text style={ styles.germanLabel }>
                    Its {this.state.to} equivalent is:
                </Text>

                <Text style={ styles.germanWord }>
                    { this.state.output }
                </Text>

            </View>
        )
    }


    switchLanguage(switchEn2De) {
        if (switchEn2De) {
            this.state.from = 'English'
            this.state.to = 'German'
            this.state.switchEn2De = false
        } else {
            this.state.to = 'English'
            this.state.from = 'German'
            this.state.switchEn2De = true
        }
        this.setState({switchEn2De})
    }

    showMeaning(e) {
        const input = this.state.input.toLowerCase()
        // Use the ternary operator to check if the word
        // exists in the dictionary.
        const meaning = input in english2german ?
            english2german[input] :
            null

        const meaningDe = input in german2english ?
            german2english[input] :
            null

        if (meaning) {
            this.switchLanguage(true)
        }

        if (meaningDe) {
            this.switchLanguage(false)
        }

        // Update the state
        this.setState({output: meaning || meaningDe || 'Not Found'})
    }

}

const styles = StyleSheet.create({
    // For the container View
    parent: {
        padding: 16
    },

    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0
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
