import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Product = (props) => {
	const handleName = (mark) => alert(`The product name is ${props.mark}`);
	// console.log(props)
	return (
		<div style={{ display: "flex" }}>
			<Card style={{ width: "18rem" }}>
				{props.children}
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<Card.Text>{props.price}</Card.Text>
					<Card.Text>{props.mark}</Card.Text>
					<Button variant='primary' onClick={handleName}>
						Click Me
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

Product.defaultProps = {
	title: "this is e title",
};

Product.propTypes = {
	age: PropTypes.number,
};

export default Product;
