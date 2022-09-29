import { Component } from 'react';
import { MainBox } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  render() {
    return <MainBox></MainBox>;
  }
}
