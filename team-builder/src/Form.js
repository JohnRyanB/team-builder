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
		<form className="FormContainer" onSubmit={onSubmit}>
			<div className="inputs">
				<label>
					Name
					<input
						type="Text"
						onChange={onChange}
						name="name"
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
				<label>
					Role
					<select onChange={onChange} name="role" value={values.role}>
						<option>-- Select Team Member's Main Raid Role --</option>
						<option value="tank">Tank</option>
						<option value="dps">DPS</option>
						<option value="healer">Healer</option>
					</select>
				</label>
				<div className="submit">
					<button>submit</button>
				</div>
			</div>
		</form>
	);
}
