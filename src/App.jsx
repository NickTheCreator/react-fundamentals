import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton";

function App() {
	const [selectedTab, setSelectedTab] = useState("");

	function handleSelect(selectedButton) {
		setSelectedTab(selectedButton);
	}

	let selectedTopic = <p>Click a button.</p>;

	if (selectedTab) {
		selectedTopic = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTab].title}</h3>
				<p>{EXAMPLES[selectedTab].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTab].code}</code>
				</pre>
			</div>
		);
	}

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((coreConcept) => (
							<CoreConcept
								key={coreConcept.title}
								{...coreConcept}
							/>
						))}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton
							isSelected={selectedTab === "components"}
							onSelect={() => handleSelect("components")}
						>
							Components
						</TabButton>
						<TabButton
							isSelected={selectedTab === "jsx"}
							onSelect={() => handleSelect("jsx")}
						>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTab === "props"}
							onSelect={() => handleSelect("props")}
						>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTab === "state"}
							onSelect={() => handleSelect("state")}
						>
							State
						</TabButton>
					</menu>
					{selectedTopic}
				</section>
			</main>
		</div>
	);
}

export default App;
