import React from "react";

export default function TeamMemberForm(props) {
	const { values, update, submit } = props;

	const onChange = (evt) => {
		const name = evt.target.name;
		const value = evt.target.value;
		update(name, value);
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		submit();
	};

	return (
		<form className="team Member Form container" onSubmit={onSubmit}>
			<div className="inputs">
				<label>
					Name
					<input
						type="Text"
						onChange={onChange}
						name="username"
						value={values.name}
					/>
				</label>
				<label>
					Email
					<input
						type="Text"
						onChange={onChange}
						name="email"
						value={values.email}
					/>
				</label>
			</div>
		</form>
	);
}
