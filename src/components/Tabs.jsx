export default function Tabs({ children, button, ButtonContainer }) {
	// const ButtonContainer = buttonContainer;
	return (
		<>
			<ButtonContainer>{button}</ButtonContainer>
			{children}
		</>
	);
}
