import styled from "styled-components";
import { useState } from "react";

const StyledJobPopupWrapper = styled.div`
	display: grid;
	place-items: center;
	width: 100vw;
	height: 100%;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: var(--windowColor);
	width: 80%;
	max-width: 400px;
	text-align: center;
	box-shadow: 0px 0px 3px 1px var(--color2);
	border-radius: 20px;
	padding: 2rem 0;
	gap: 1rem;
	line-height: 1;

	& input {
		font-size: 1.15rem;
		padding: 0.25rem;
		color: var(--color2);
		text-align: center;
		border: 2px inset var(--color2);
		border-radius: 5px;
	}

	& button {
		width: 50%;
		font-size: 1rem;
		padding: 0.25rem;
		color: var(--color2);
		background-color: var(--color3);
		margin: 2rem 0 0 0;
		border: 3px inset transparent;
		border-radius: 5px;
		cursor: pointer;
	}

	& button:hover {
		background-color: var(--hover);
	}

	& button:active {
		border: 3px inset var(--windowColor);
	}
`;

const JobPopup = () => {
	const [jobDate, setjobDate] = useState("");
	const [jobName, setjobName] = useState("");
	const [jobContact, setjobContact] = useState("");
	const [jobAddress, setjobAddress] = useState("");
	const [jobDesc, setjobDesc] = useState("");

	const handleAddNewJob = (e) => {
		e.preventDefault();
		const jobData = { jobDate, jobName, jobContact, jobAddress, jobDesc };
		console.log(jobData);
	};

	return (
		<StyledJobPopupWrapper>
			<StyledForm id="jobPopup-form" className="jobPopup-wrapper" onSubmit={handleAddNewJob}>
				<input type="text" id="jobPopupDate" name="jobPopupDate" placeholder="Date" value={jobDate} onChange={(e) => setjobDate(e.target.value)} required />
				<input type="text" id="jobPopupCustomerName" name="jobPopupCustomerName" placeholder="Customer Name" value={jobName} onChange={(e) => setjobName(e.target.value)} required />
				<input type="text" id="jobPopupCustomerContact" name="jobPopupCustomerContact" placeholder="Customer Contact" value={jobContact} onChange={(e) => setjobContact(e.target.value)} required />
				<input type="text" id="jobPopupCustomerAddress" name="jobPopupCustomerAddress" placeholder="Customer Address" value={jobAddress} onChange={(e) => setjobAddress(e.target.value)} required />
				<input type="text" id="jobPopupDescription" name="jobPopupDescription" placeholder="Job Description" value={jobDesc} onChange={(e) => setjobDesc(e.target.value)} required />
				<button type="submit">Add to Schedule</button>
			</StyledForm>
		</StyledJobPopupWrapper>
	);
};

export default JobPopup;
