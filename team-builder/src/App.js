import "./App.css";
import React, { useState } from "react";
import Form from "./Form";
import TeamMemberMaker from "./TeamMemberMaker";

const initialFormValues = {
	name: "",
	email: "",
	role: "",
};

function App() {
	const [teamMembers, setTeamMembers] = useState([]);
	const [formValues, setFormValues] = useState(initialFormValues);
	const updateForm = (inputName, inputValue) => {
		setFormValues({ ...formValues, [inputName]: inputValue });
	};

	const submitForm = () => {
		const { username, email, role } = formValues;
		setTeamMembers([...teamMembers], {
			username: username.trim(),
			email: email.trim(),
			role: role.trim(),
		});
		setFormValues(initialFormValues);
	};

	return (
		<div className="formContainer">
			<h1> Team Member Registration</h1>
			<Form values={formValues} update={updateForm} submit={submitForm} />

			{teamMembers.map((teamMember) => {
				return <TeamMemberMaker key={teamMember.id} details={teamMember} />;
			})}
		</div>
	);
}

export default App;
