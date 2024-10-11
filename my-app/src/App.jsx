import "./data.json";
import "./App.css";
import { useState } from "react";
import styled from "styled-components";

export function App() {
	const Container = styled.div`
		text-align: center;
		max-width: 950px;
		margin: 0 auto;
	`;
	const Title = styled.h1``;
	const StepDescription = styled.div`
		margin-bottom: 30px;
		min-height: 100px;
		border: 2px solid
			hsl(var(--accent-color-hue), var(--accent-color-saturation), 92%);
		border-radius: 15px;
		padding: 15px 20px;
	`;
	const StepsList = styled.ul`
		list-style: none;
		margin: 0;
		margin-bottom: 30px;
		padding: 0;
		display: flex;
		justify-content: space-between;
		gap: 15px;
	`;
	const Step = styled.li`
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1 1 0px;
		font-size: 0.75rem;
	`;
	const StepNumber = styled.button`
		cursor: pointer;
		border-radius: 50%;
		padding: 0.75rem 1rem;
		background: ${props => props.isPassed ? `hsl(var(--accent-color-hue), var(--accent-color-saturation), 92%)` : `#cccc`};
		border: none;
		margin-bottom: 0.25rem;
	`;
	const StepName = styled.p``;
	const ButtonContainer = styled.div`
		display: flex;
		justify-content: center;
		gap: 10px;
	`;
	const Button = styled.button`
		padding: 0.5em 0.75em;
		background-color: hsl(
			var(--accent-color-hue),
			var(--accent-color-saturation),
			92%
		);
		font-size: 18px;
		border: none;
		transition: background-color 0.15s ease;
		&:hover {
			background-color: hsl(
				var(--accent-color-hue),
				var(--accent-color-saturation),
				87%
			);
		}
		&:disabled {
			background-color: var(--disabled-color);
		}
	`;

	const stepsList = require("./data.json");
  console.log(stepsList[1]);
	const [currentStep, setStep] = useState(stepsList[0]);

  const isStepPassed = (stepIndex) => {
    const currentStepIndex = stepsList.indexOf(currentStep);
    if (stepIndex <= currentStepIndex) return true
    else return false
  }

	return (
		<Container>
			<Title>Инструкция по приготовлению пельменей</Title>
			<StepDescription>{currentStep.content}</StepDescription>
			<StepsList>
					{stepsList.map((step, index) =>
          <Step key={step.id}>
						<StepNumber isPassed={isStepPassed(index)}>{index + 1}</StepNumber>
						<StepName>{step.title}</StepName>
          </Step>
          )}
			</StepsList>
			<ButtonContainer>
				<Button>Назад</Button>
				<Button>Вперед</Button>
			</ButtonContainer>
		</Container>
	);
}