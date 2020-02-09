import React from 'react';
import {View, Text, Button} from 'react-native';

class FirstScreen extends React.Component {
  render() {
    const navigation = this.props.navigation;
    const randomNum = Math.floor(Math.random() * 100);
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button title="More Info" />
      </View>
    );
  }
}

class SecondScreen extends React.Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>

        </Text>
      </View>
    );
  }
}

//export default App;
