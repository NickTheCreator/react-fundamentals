export default Header;

const reactDescription = ["Fundamental", "Crucial", "Core"];

function genRandonDescription(description) {
	return Math.floor(Math.random() * (description + 1));
}

function Header() {
	const description = reactDescription[genRandonDescription(2)];
	return (
		<header>
			<img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>{description} React concepts you will need for almost any app you are going to build!</p>
		</header>
	);
}
