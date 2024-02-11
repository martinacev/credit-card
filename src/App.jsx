import { useState } from "react";
import Card from "./Components/Card/Card";
import Informations from "./Components/Informations/Informations";
import "./App.css";

function App() {
	const [cardHolderInfo, setCardHolderInfo] = useState("");
	const [numberCard, setNumberCard] = useState("");
	const [cvcNumber, setCvcNumber] = useState("");
	const [expiredDate, setExpiredDate] = useState("");

	const handleCardHolderChange = (newCardHolderInfo) => {
		setCardHolderInfo(newCardHolderInfo);
	};

	const handleChangeNumberChange = (newCardNumber) => {
		setNumberCard(newCardNumber);
	};

	const handleChangeCvcNumber = (newCvcNumber) => {
		setCvcNumber(newCvcNumber);
	};

	const handleChangeDateNumber = (newCardDate) => {
		setExpiredDate(newCardDate);
	};

	return (
		<div className="container">
			<Card
				cardHolderInfo={cardHolderInfo}
				numberCard={numberCard}
				cvcNumber={cvcNumber}
				expiredDate={expiredDate}
			/>
			<Informations
				onCardHolderChange={handleCardHolderChange}
				numberChange={handleChangeNumberChange}
				cvcNumberChange={handleChangeCvcNumber}
				expiredDate={handleChangeDateNumber}
			/>
		</div>
	);
}

export default App;
