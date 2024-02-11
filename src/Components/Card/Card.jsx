import classes from "./Card.module.css";
import halk from "/halk-steal.png";
import PropTypes from "prop-types";

const Card = ({ cardHolderInfo, numberCard, cvcNumber, expiredDate }) => {
	const formattedCardNumber = numberCard.replace(/(\d{4})/g, "$1 ");

	return (
		<div className={classes.container}>
			<div className={classes.bgImage}></div>
			<div className={classes.wrapper}>
				<div className={classes.frontCard}>
					<div className={classes.informations}>
						<div className={classes.client}>
							<img
								className={classes.logo}
								src={halk}
								alt="halklogo"
							/>
						</div>
						<h1 className={classes.cardNumber}>
							{formattedCardNumber}
						</h1>
						<div className={classes.clientInformations}>
							<p className={classes.name}>{cardHolderInfo}</p>
							<p className={classes.expiration}>{expiredDate}</p>
						</div>
					</div>
				</div>
				<div className={classes.backCard}>
					<div className={classes.cvcNumber}>
						<p className={classes.cvc}>{cvcNumber}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	cardHolderInfo: PropTypes.string.isRequired,
	numberCard: PropTypes.string.isRequired,
	cvcNumber: PropTypes.string.isRequired,
	expiredDate: PropTypes.string.isRequired,
};

export default Card;
