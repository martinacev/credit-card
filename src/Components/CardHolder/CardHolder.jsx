import { AccountCircle } from "@mui/icons-material";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import PropTypes from "prop-types";

const CardHolder = ({ onChange }) => {
	const handleInputChange = (event) => {
		const inputValue = event.target.value.replace(/[0-9]/g, "");
		onChange(inputValue);
	};

	return (
		<div>
			<FormControl variant="standard">
				<InputLabel htmlFor="input-with-icon-adornment">
					CARDHOLDER NAME
				</InputLabel>

				<Input
					id="input-with-icon-adornment"
					startAdornment={
						<InputAdornment position="start">
							<AccountCircle />
						</InputAdornment>
					}
					onChange={handleInputChange}
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

CardHolder.propTypes = {
	onChange: PropTypes.func.isRequired,
};

export default CardHolder;
