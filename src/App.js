import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, TextInput } from 'react-desktop/windows';

import logo from './assets/fptu-logo.png';

const Wrapper = styled.div``;

const Logo = styled.img`
  max-width: 150px;
  margin-left: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 30px;
  color: #298EFF;
  font-weight: 300;
  font-family: Arial;
  letter-spacing: 0.5px;
`;

const InputWrapper = styled.div`
  padding: 0px 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Form = styled.form`
  min-width: 250px;
  max-width: 350px;
`;

const FieldLabel = styled.p`
  font-family: Arial;
  margin: 0px 0px 18px 0px;
`;

class App extends Component {
  state = {
    day: '',
    month: '',
    year: '',
    clear: false,
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { day, month, year, clear } = this.state;
    return (clear ||
      (nextState.day === day &&
      nextState.month === month &&
      nextState.year === year));
  }

  handleClear = () => {
    this.setState({
      day: '',
      month: '',
      year: '',
      clear: true,
    });
  }

  handleCheck = () => {
    const { day, month, year } = this.state;
    console.log(day, month, year);
  }

  render() {
    return (
      <Wrapper>
        <Logo src={logo} />
        <Container>
          <Title>Date Time Checker</Title>
          <Form>
            <InputWrapper>
              <TextField>
                <FieldLabel>Day</FieldLabel>
                <TextInput
                  onChange={e => this.setState({ day: e.target.value, clear: false })}
                />
              </TextField>
              <TextField>
                <FieldLabel>Month</FieldLabel>
                <TextInput
                  onChange={e => this.setState({ month: e.target.value, clear: false })}
                />
              </TextField>
              <TextField>
                <FieldLabel>Year</FieldLabel>
                <TextInput
                  onChange={e => this.setState({ year: e.target.value, clear: false })}
                />
              </TextField>
            </InputWrapper>
            <ButtonWrapper>
              <Button push onClick={this.handleClear}>Clear</Button>
              <Button push color='#298EFF' onClick={this.handleCheck}>Check</Button>
            </ButtonWrapper>
          </Form>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
