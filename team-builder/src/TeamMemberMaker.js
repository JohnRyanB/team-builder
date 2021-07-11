import React from "react";

export default function TeamMemberMaker(props) {
	const { details } = props;

	return (
		<div className="TeamMemberMakerContainer">
			<h2>{details.name}</h2>
			<p>Email: {details.email}</p>
			<p>Role: {details.role}</p>
		</div>
	);
}