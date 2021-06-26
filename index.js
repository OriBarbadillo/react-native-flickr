/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import {AppRegistry, StyleSheet} from 'react-native';
import {name as appName} from './app.json';
import AlbumList from './src/components/AlbumList';
import PhotoList from './src/components/PhotoList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

// Create a component
const App = () => (
  <NavigationContainer style={styles.scrollView}>
    <Stack.Navigator>
      <Stack.Screen
        name="albumList"
        component={AlbumList}
        options={{title: 'Albums'}}
      />
      <Stack.Screen
        name="photoList"
        component={PhotoList}
        options={{title: 'Photos'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.blue,
    color: Colors.red
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.red,
    color: Colors.red
  },
});

AppRegistry.registerComponent(appName, () => App);
