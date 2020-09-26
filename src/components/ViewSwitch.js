import React from 'react';
import styled from 'styled-components';
import { VIEWS } from '../Constants';

const Container = styled.div`
  display: flex;
  button: { 
    margin: 10px;
  }
`;

const Button = styled.button`
  margin: 0 10px;
`;

export default function ViewSwitch({
  onViewChange
}) {
  return (
    <Container>
      <Button onClick={() => onViewChange(VIEWS.PATIENT)}>Patient</Button>
      <Button onClick={() => onViewChange(VIEWS.QUESTIONNAIRE)}>Questionnaire</Button>
      <Button onClick={() => onViewChange(VIEWS.PRACTITIONER)}>Practitioner</Button>
    </Container>
  )
}
