// Importando a image 'react-core-concepts.png' como reactImg, basicamente criando uma variavel que "aponta" para o caminho da imagem
import reactImg from "../../assets/react-core-concepts.png";

const reactDescription = ["Fundamental", "Crucial", "Core"];

function genRandonDescription(description) {
	return Math.floor(Math.random() * (description + 1));
}

function Header() {
	const description = reactDescription[genRandonDescription(2)];
	return (
		<header>
			<img
				src={reactImg}
				alt="Stylized atom"
			/>
			<h1>React Essentials</h1>
			<p>{description} React concepts you will need for almost any app you are going to build!</p>
		</header>
	);
}

export default Header;
