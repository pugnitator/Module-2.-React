import styled from "styled-components";
import { useState } from "react";
import "./App.css";

export function App() {
	const Container = styled.div`
		margin: auto;
		padding: 10px;
		width: 30vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5px;
		border: 2px solid #2e9aff;
    border-radius: 5px;
	`;
	const OutputConteiner = styled.div`
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 5px;
		width: 100%;
		border: 2px solid #2e9aff;
	`;
	const MathExpression = styled.output`
		height: 3vh;
		align-content: center;
    color: ${props => props.isResult ? 'red' : '#000'}
	`;
	const Keyboard = styled.div`
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 5px;
	`;
	const InputButtons = styled.div`
		display: grid;
		grid-template: repeat(3, 1fr) / repeat(3, 1fr);
		gap: 5px;
	`;
	const ResultButtons = styled.div`
		display: flex;
		flex-direction: column;
		gap: 5px;
	`;
	const InputButton = styled.button`
		margin: 0;
		height: 3vh;
	`;
	const ResultButton = styled.button``;

	const inputButtons = [
		["1", "number"],
		["2", "number"],
		["3", "number"],
		["4", "number"],
		["5", "number"],
		["6", "number"],
		["7", "number"],
		["8", "number"],
		["9", "number"],
		["+", "action"],
		["0", "number"],
		["-", "action"],
	];
	const resultButton = ["С", "="];
	const [output, setOutput] = useState("0");
  const [result, setResult] = useState("0");
  const [isResult, setIsResult] = useState(false)

	const onClickInputButton = (element) => {
    setIsResult(false);
    const [value, type] = element;
    if (type === "action") {
      setOutput(output === "0" ? output : output + ` ${value} `)
    } else {
      if (result === output) setOutput(value)
      else setOutput(output === "0" ? value : output + value)
    }
	};

	const onClickResult = (element) => {
		if (element === "=") {
      const value = eval(output);
      setResult(value);
			setOutput(value);
      setIsResult(true);
		} else if ((element = "С")) {
      setIsResult(false);
			setOutput("0");
			setResult("0");
		} else {
			setOutput("Неизвестная ошибка. Нажмите сброс");
			throw new Error("Неизвестное значение");
		}
	};

	return (
		<Container>
			<OutputConteiner>
				<MathExpression isResult={isResult}>{output}</MathExpression>
			</OutputConteiner>
			<Keyboard>
				<InputButtons>
					{inputButtons.map((element) => (
						<InputButton
							key={element[0]}
							onClick={() => onClickInputButton(element)}
						>
							{element[0]}
						</InputButton>
					))}
				</InputButtons>
				<ResultButtons>
					{resultButton.map((element) => (
						<ResultButton key={element} onClick={() => onClickResult(element)}>
							{element}
						</ResultButton>
					))}
				</ResultButtons>
			</Keyboard>
		</Container>
	);
}