import "./App.css";
import React, { useState } from "react";
import Form from "./Form";
import TeamMemberMaker from "./TeamMemberMaker";

const initialFormValues = {
	name: "",
	email: "",
	role: "",
};

const initialTeamMember = [
	{ id: 1, name: "Gulrak", email: "gulrak@gulrak.com", role: "DPS" },
];

export default function App() {
	const [teamMembers, setTeamMembers] = useState(initialTeamMember);
	const [formValues, setFormValues] = useState(initialFormValues);

	const updateForm = (inputName, inputValue) => {
		setFormValues({ ...formValues, [inputName]: inputValue });
	};

	const submitForm = () => {
		const { name, email, role } = formValues;
		setTeamMembers([
			...teamMembers,
			{
				name: name,
				email: email,
				role: role,
			},
		]);
		console.log(teamMembers);
		setFormValues(initialFormValues);
	};

	return (
		<div className="formContainer">
			<h1> Team Member Registration</h1>
			<Form values={formValues} update={updateForm} submit={submitForm} />

			{teamMembers.map((teamMembers) => {
				return <TeamMemberMaker key={teamMembers.id} details={teamMembers} />;
			})}
		</div>
	);
}
