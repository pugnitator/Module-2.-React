import './App.css';
import styled from 'styled-components';
import { useState } from 'react';

function App() {
  const Container = styled.div`
  `;
  const OutputBox = styled.output`
  `;
  const Keyboard = styled.div`
  `;
  const InputButtons = styled.div`
  `;
  const ResultButtons = styled.div`
  `;
  const InputButton = styled.button`
  `;
  const ResultButton = styled.button`
  `;

  const inputButtons = [
    ['1', 'number'],
    ['2', 'number'],
    ['3', 'number'],
    ['4', 'number'],
    ['5', 'number'],
    ['6', 'number'],
    ['7', 'number'],
    ['8', 'number'],
    ['9', 'number'],
    ['+', 'action'],
    ['0', 'number'],
    ['-', 'action'],
  ];

  const resultButton = ['C', '='];

  const [output, setOutput] = useState('0');
  
  return (
    <Container>
      <OutputBox>{output}</OutputBox>
      <Keyboard>
        <InputButtons>
          {inputButtons.map((element) => 
            <InputButton key={element[0]} buttonType={element[1]}>{element[0]}</InputButton>
          )}
        </InputButtons>
        <ResultButtons>
          {resultButton.map((element) =>
            <ResultButton key={element}>{element}</ResultButton>
          )}
        </ResultButtons>
      </Keyboard>

    </Container>
  );
}

export default App;
