import React from 'react';
import {Image, StyleSheet, View, TouchableHighlight} from 'react-native';
import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Text,
  Left,
  Right,
} from 'native-base';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      house: '',
      name: '',
    };
  }

  GenerateRandom = () => {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let randomNumber = Math.floor(Math.random() * data.length);

        this.setState({image: data[randomNumber].image});
        this.setState({house: data[randomNumber].house});
        this.setState({name: data[randomNumber].name});
      });
  };

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#740001'}}>
          <Text style={{color: '#EEBA30', fontSize: 24}}>
            FANOID: Harry Potter
          </Text>
        </Header>
        <Content style={{padding: 10}}>
          <View style={styles.buttonLayout}>
            <TouchableHighlight
              style={styles.button}
              onPress={() => this.GenerateRandom()}>
              <Text style={styles.buttonText}>Random Character</Text>
            </TouchableHighlight>
          </View>
          <Card>
            <CardItem cardBody style={{flexDirection: 'row'}}>
              <Image
                style={styles.imageStyle}
                source={{uri: this.state.image}}
              />
              <CardItem style={{flexDirection: 'column', flex: 1}}>
                <Text>{this.state.name}</Text>
                <Text>{this.state.house}</Text>
              </CardItem>
            </CardItem>
            <CardItem footer>
              <Left />
              <Body />
              <Right style={{flexDirection: 'row', marginLeft: 50}}>
                <Icon name="star" />
                <Text style={{marginLeft: 5}}>Favourite</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: null,
    flex: 1,
  },

  button: {
    width: 300,
    height: 60,
    backgroundColor: '#EEBA30',
    borderRadius: 30,
    justifyContent: 'center',
  },

  buttonLayout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 50,
  },

  buttonText: {
    alignSelf: 'center',
    color: '#740001',
  },
});

export default App;
