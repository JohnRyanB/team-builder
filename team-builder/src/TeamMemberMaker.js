import React from "react";

export default function TeamMemberMaker(props) {
	const { details } = props;
	if (!details) {
		return <h3>Loading...</h3>;
	}

	return (
		<div className="TeamMemberMaker container">
			<h2>{details.name}</h2>
			<p>{details.email}</p>
			<p>{details.role}</p>
		</div>
	);
}
