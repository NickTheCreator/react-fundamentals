import { useState } from "react";
import { EXAMPLES } from "../data";

import TabButton from "./TabButton";

export default function Examples() {
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
	);
}
