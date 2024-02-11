import { Button } from "@mui/material";
import CardExpiration from "../CardExpiration/CardExpiration";
import CardHolder from "../CardHolder/CardHolder";
import CardNumber from "../CardNumber/CardNumber";
import classes from "./Informations.module.css";
import CheckIcon from "@mui/icons-material/Check";
import PropTypes from "prop-types";
import { useState } from "react";

const Informations = ({
	onCardHolderChange,
	numberChange,
	cvcNumberChange,
	expiredDate,
}) => {
	const [showModal, setShowModal] = useState(true);

	const buttonClick = () => {
		setShowModal(false);
	};

	return (
		<div className={classes.container}>
			{showModal && (
				<div className={classes.clientInformations}>
					<CardHolder onChange={onCardHolderChange} />
					<CardNumber onChange={numberChange} />
					<CardExpiration
						onChange={cvcNumberChange}
						onChangeExpiredDate={expiredDate}
					/>
					<div className={classes.btn}>
						<Button
							onClick={buttonClick}
							className={classes.width}
							variant="contained"
						>
							confirm
						</Button>
					</div>
				</div>
			)}

			{!showModal && (
				<div className={classes.appreciation}>
					<div>
						<CheckIcon
							style={{ fontSize: "100px", color: "purple" }}
						/>
					</div>
					<h1 className={classes.thanks}>THANK YOU!</h1>
					<h4 className={classes.text}>
						We&lsquo;ve added your card details
					</h4>
					<div className={classes.btn}>
						<Button className={classes.width} variant="contained">
							continue
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

Informations.propTypes = {
	onCardHolderChange: PropTypes.func.isRequired,
	numberChange: PropTypes.func.isRequired,
	cvcNumberChange: PropTypes.func.isRequired,
	expiredDate: PropTypes.func.isRequired,
};

export default Informations;
