import React, { Component } from 'react';
import styled from 'styled-components/native';
import ApplicationState from './store/Application.State.Mobx';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  backgroundColor: ${props => props.theme.BLACK}
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: ${props => props.theme.VIVIDWHITE};
`;

@observer
class BusStopsScreen extends Component {
  render() {
    return (
      <ContainerView>
        <TitleText>{this.props.navigation.state.routeName}</TitleText>
      </ContainerView>
    );
  }
}

export default BusStopsScreen;
