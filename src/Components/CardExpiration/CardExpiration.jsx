import { useState } from "react";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import PropTypes from "prop-types";
import classes from "./CardExpiration.module.css";

const CardExpiration = ({ onChange, onChangeExpiredDate }) => {
	const [expDate, setExpDate] = useState("");
	const [mmYy, setMmYy] = useState("");

	const handleCvcChange = (event) => {
		const inputValue = event.target.value.replace(/\D/g, "").slice(0, 3);
		onChange(inputValue);
	};

	const handleExpDateChange = (event) => {
		let value = event.target.value.replace(/\D/g, "").slice(0, 2);

		if (value !== "") {
			value = Math.min(parseInt(value, 10), 31).toString();
		}
		setExpDate(value);
		onChangeExpiredDate(`${value} / ${mmYy}`);
	};

	const handleMmYyChange = (event) => {
		let value = event.target.value.replace(/\D/g, "").slice(0, 2);

		if (value !== "") {
			value = Math.min(parseInt(value, 10), 31).toString();
		}
		setMmYy(value);
		onChangeExpiredDate(`${expDate} / ${value}`);
	};

	return (
		<div className={classes.container}>
			<div className={classes.cardDate}>
				<FormControl variant="standard">
					<InputLabel htmlFor="input-expiration-date">
						EXP.DATE
					</InputLabel>
					<Input
						id="input-expiration-date"
						startAdornment={
							<InputAdornment position="start"></InputAdornment>
						}
						style={{
							border: "1px solid #ccc",
							borderRadius: "4px",
							width: "100px",
							height: "40px",
						}}
						value={expDate}
						onChange={handleExpDateChange}
					/>
				</FormControl>
				<div>
					<FormControl variant="standard">
						<InputLabel htmlFor="input-mm-yy">(MM/YY)</InputLabel>
						<Input
							id="input-mm-yy"
							startAdornment={
								<InputAdornment position="start"></InputAdornment>
							}
							style={{
								border: "1px solid #ccc",
								borderRadius: "4px",
								width: "80px",
								height: "40px",
							}}
							value={mmYy}
							onChange={handleMmYyChange}
						/>
					</FormControl>
				</div>
			</div>

			<div className={classes.cvc}>
				<FormControl variant="standard">
					<InputLabel htmlFor="input-cvc">CVC</InputLabel>
					<Input
						id="input-cvc"
						startAdornment={
							<InputAdornment position="start"></InputAdornment>
						}
						style={{
							border: "1px solid #ccc",
							borderRadius: "4px",
							width: "200px",
							height: "40px",
						}}
						inputProps={{ maxLength: 3 }}
						onChange={handleCvcChange}
					/>
				</FormControl>
			</div>
		</div>
	);
};

CardExpiration.propTypes = {
	onChange: PropTypes.func.isRequired,
	onChangeExpiredDate: PropTypes.func.isRequired,
};

export default CardExpiration;
