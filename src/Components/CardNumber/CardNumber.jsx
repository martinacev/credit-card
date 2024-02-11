/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import classes from "./CardNumber.module.css";
import PropTypes from "prop-types";

const CardNumber = ({ onChange }) => {
	const [inputValue, setInputValue] = useState("");
	const [displayValue, setDisplayValue] = useState("");

	const handleInputChange = (event) => {
		const newInputValue = event.target.value
			.replace(/\D/g, "")
			.slice(0, 16);
		setDisplayValue(formatCardNumber(newInputValue));
		setInputValue(newInputValue);
		onChange(newInputValue);
	};

	const formatCardNumber = (cardNumber) => {
		return cardNumber
			.replace(/\D/g, "")
			.slice(0, 16)
			.replace(/(\d{4})/g, "$1 ")
			.trim();
	};
	return (

		
		<div className={classes.container}>
			<FormControl variant="standard">
				<InputLabel htmlFor="input-with-icon-adornment">
					CARD NUMBER
				</InputLabel>
				<Input
					id="input-with-icon-adornment"
					startAdornment={
						<InputAdornment position="start"></InputAdornment>
					}
					maxLength="19"
					onChange={handleInputChange}
					value={displayValue}
					style={{
						border: "1px solid #ccc",
						borderRadius: "4px",
						width: "450px",
						height: "40px",
					}}
				/>
			</FormControl>
		</div>
	);
};

CardNumber.propTypes = {
	onChange: PropTypes.func.isRequired,
};

export default CardNumber;
