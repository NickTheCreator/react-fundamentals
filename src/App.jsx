import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import componentsImg from "./assets/components.png";
import jsxImg from "./assets/jsx-ui.png";
import propsImg from "./assets/config.png";
import stateImg from "./assets/state-mgmt.png";

function App() {
	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						<CoreConcept
							title="Components"
							description="The core UI building block - compose the user interface by combining multiple components"
							image={componentsImg}
						/>
						<CoreConcept
							title="JSX"
							description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
							image={jsxImg}
						/>
						<CoreConcept
							title="Props"
							description="Makes components configurable (and therefrom reusable) by passing input data to them."
							image={propsImg}
						/>
						<CoreConcept
							title="State"
							description="React-managed data which, when changed, causes the component to re-render & the UI to update."
							image={stateImg}
						/>
					</ul>
				</section>
				<h2>Time to get started!</h2>
			</main>
		</div>
	);
}

export default App;
