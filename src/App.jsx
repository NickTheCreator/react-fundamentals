import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

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
