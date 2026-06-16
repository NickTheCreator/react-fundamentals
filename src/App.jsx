import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcept";
import Examples from "./components/Example";

function App() {
	return (
		//<div></div> ->  Create an extra DOM element
		//<Fragment></Fragment> -> Don't create an extra DOM element

		// Shortest version
		<>
			<Header />
			<main>
				<CoreConcepts />
				<Examples />
			</main>
		</>
	);
}

export default App;
