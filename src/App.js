import React, { Component } from 'react';
import styled from 'styled-components';
import { Button as WButton, TextInput as WTextInput } from 'react-desktop/windows';
import { Button as MButton, TextInput as MTextInput } from 'react-desktop/macOs';

import logo from './assets/fptu-logo.png';

let Button;
let TextInput;
if (process.platform === 'win32') {
  Button = WButton; TextInput = WTextInput;
} else {
  Button = MButton; TextInput = MTextInput;
}

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
  margin-top: ${process.platform === 'win32' ? '0px' : '10px'};
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
  margin: ${process.platform === 'win32' ? '0px 0px 18px 0px' : '12px 0px'};
`;

class App extends Component {
  state = {
    day: '',
    month: '',
    year: '',
  }

  render() {
    const { day, month, year } = this.state;

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
                  value={day}
                  onChange={e => this.setState({ day: e.target.value })}
                />
              </TextField>
              <TextField>
                <FieldLabel>Month</FieldLabel>
                <TextInput
                  value={month}
                  onChange={e => this.setState({ month: e.target.value })}
                />
              </TextField>
              <TextField>
                <FieldLabel>Year</FieldLabel>
                <TextInput
                  value={year}
                  onChange={e => this.setState({ year: e.target.value })}
                />
              </TextField>
            </InputWrapper>
            <ButtonWrapper>
              <Button push>Clear</Button>
              <Button push color='#298EFF'>Check</Button>
            </ButtonWrapper>
          </Form>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
