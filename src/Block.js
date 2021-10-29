import { Table, Tbody, Tr, Td } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Block = ({ block }) => {
	let blockContent = JSON.parse(JSON.stringify(block));

	let findIndex = () => {
		let idx;
		for (let i = 0; i < blockContent.length; i++) {
			if (Object.keys(blockContent[i])[0] === "transactions") {
				idx = i;
			}
		}
		return idx;
	};

	let index = findIndex();

	if (blockContent.length > 0) {
		if (JSON.parse(blockContent[index].transactions).length > 0) {
			blockContent[index].transactions = (
				<Link key={index} to="/transactions">
					click here
				</Link>
			);
		} else {
			blockContent[index].transactions = "no transactions";
		}
	}

	let table = () => {
		if (blockContent.length > 0) {
			return (
				<Table variant="striped">
					<Tbody>
						{blockContent.length ? (
							blockContent.map((item) => {
								return (
									<Tr key={Object.keys(item)}>
										<Td>{Object.keys(item)}</Td>
										<Td isNumeric>{Object.values(item)}</Td>
									</Tr>
								);
							})
						) : (
							<Tr></Tr>
						)}
					</Tbody>
				</Table>
			);
		} else {
			return <div></div>;
		}
	};

	return <div style={{ padding: "0px 10px" }}>{table()}</div>;
};

export default Block;
