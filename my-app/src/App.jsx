import { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
	const Container = styled.div`
		text-align: center;
		max-width: 700px;
		margin: 0 auto;
		padding: 20px;
	`;
	const Title1 = styled.h1`
		margin: 0;
	`;
	const Title2 = styled.h1`
		font-size: 20px;
		font-weight: bold;
		margin: 0 0 0.5rem;
	`;
	const Error = styled.div`
		color: var(--error-color);
		font-weight: bold;
	`;
	const ButtonContainer = styled.div`
		margin-top: 1.5rem;
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
	`;
	const ListContainer = styled.div`
		margin-top: 1.5rem;
	`;
	const List = styled.ul`
		text-align: left;
		margin: 0 auto;
		max-width: 300px;
	`;
	const ListItem = styled.li`
		margin-bottom: 0.5em;
		&last-child {
			margin-bottom: 0;
		}
	`;

	const [value, setValue] = useState("0");
	const [list, setList] = useState([]);
	const [error, setError] = useState("");
	const [isValueValid, setIsValueValid] = useState(false);

	const onInputButtonClick = () => {
		const promptValue = prompt(
			"Введите значение. Должно быть минимум 3 символа"
		);
		if (promptValue.length < 3) {
			setError("Было введено знаение, в котором менее 3х символов");
			setIsValueValid(false);
			console.log(isValueValid);
		} else {
			setError("");
			setIsValueValid(true);
			setValue(promptValue);
			console.log(isValueValid);
		}
	};

	const onAddButtonClick = () => {
		setList([
			...list,
			{ id: Date.now(), value: value },
		]);
		setValue('');
		setIsValueValid(false);
	};

	return (
		<Container>
			<Title1>Ввод значения</Title1>
			<p class="no-margin-text">
				Текущее значение <code>value</code>: "
				<output class="current-value">{value}</output>"
			</p>
			{error && <Error>{error}</Error>}
			<ButtonContainer>
				<Button onClick={onInputButtonClick}>Ввести новое</Button>
				<Button disabled={!isValueValid} onClick={onAddButtonClick}>
					Добавить в список
				</Button>
			</ButtonContainer>
			<ListContainer>
				<Title2>Список:</Title2>
				{!list[0] && <p class="no-margin-text">Нет добавленных элементов</p>}
				{list[0] && <List>
					{list.map((listItem) => <ListItem>{listItem.value}</ListItem>)}
				</List>}
			</ListContainer>
		</Container>
	);
}

export default App;
