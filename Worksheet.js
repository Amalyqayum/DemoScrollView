import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  Text,
  Body,
  CardItem,
  Card,
  Icon,
} from 'native-base';

export default class Worksheet extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text style={{fontWeight: 'bold'}}>View Cart</Text>
            </CardItem>
            <CardItem>
              <Image
                style={{height: 200, width: null, flex: 1}}
                source={require('./src/images/cart.jpg')}
              />
            </CardItem>
            <CardItem>
              <Body>
                <Text>Total items: 7</Text>
                <Text>Expected Amount: $400</Text>
                <View Style={{flexDirection: 'row', marginTop: 20}} />
                <Icon name="mail" />
                <Text>Send to Mail</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={{fontWeight: 'bold'}}>Make Payment</Text>
            </CardItem>
          </Card>
        </Content>
        <Footer />
      </Container>
    );
  }
}
