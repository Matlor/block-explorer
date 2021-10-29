import { useState, useEffect } from "react";
import {
	BrowserRouter as BrowserRouter,
	Switch,
	Route,
} from "react-router-dom";
import Transactions from "./Transactions";
import Block from "./Block";
import axios from "axios";

const App = () => {
	const [block, setBlock] = useState([]);

	const INFURA_ENDPOINT =
		"https://rinkeby.infura.io/v3/d07111083ea64dd7a803abdd28d13bc1";

	useEffect(() => {
		const request = async () => {
			const response = await axios.post(INFURA_ENDPOINT, {
				jsonrpc: "2.0",
				id: 1,
				method: "eth_getBlockByNumber",
				params: ["0x918B07", true],
			});

			const data = response.data.result;
			let dataArray = [];

			for (let key in data) {
				let pair = { [key]: JSON.stringify(data[key]) };
				dataArray.push(pair);
			}
			setBlock(dataArray);
		};

		request();
	}, []);

	return (
		<div>
			<main>
				<Switch>
					<Route exact path="/">
						<Block block={block} />
					</Route>
					<Route exact path="/transactions">
						<Transactions block={block} />
					</Route>
				</Switch>
			</main>
		</div>
	);
};

export default App;
