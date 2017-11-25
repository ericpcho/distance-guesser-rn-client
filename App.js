import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'
import {API_BASE_URL} from './config'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'home',
      cityData: []
    }
  }

  fetchCities() {

    
    fetch(`${API_BASE_URL}/api/cities`)
    .then(res => {
      console.log(res);
      return res.json()
    })
      .then((cities) => {console.log(cities)})
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchCities();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>U.S. Geography Game</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
});
