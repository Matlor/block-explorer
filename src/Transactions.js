const Transactions = ({ block }) => {
	if (block.length > 0) {
		let findIndex = () => {
			let idx;
			for (let i = 0; i < block.length; i++) {
				if (Object.keys(block[i])[0] === "transactions") {
					idx = i;
				}
			}
			return idx;
		};

		let index = findIndex();
		let transactions = JSON.parse(block[index].transactions);

		let printTransaction = () => {
			if (transactions.length > 0) {
				let list = transactions.map((transaction, index) => {
					let strTransaction = JSON.stringify(transaction);
					return (
						<div style={{ padding: "10px 10px" }} key={index}>
							{strTransaction}
						</div>
					);
				});
				return list;
			} else {
				return "";
			}
		};

		return <div>{printTransaction()}</div>;
	} else {
		return <div></div>;
	}
};

export default Transactions;
