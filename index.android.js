import {
    AppRegistry,
} from 'react-native'
import {
    Dictionary
} from './src/Dictionary'


class DictionaryNative extends Dictionary {}

AppRegistry.registerComponent('DictionaryNative', () => DictionaryNative)
