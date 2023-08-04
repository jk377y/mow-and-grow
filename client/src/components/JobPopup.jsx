import { useState } from "react";

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
		<div>
			<form id="jobPopup-form" className="jobPopup-wrapper" onSubmit={handleAddNewJob}>
				<input type="text" id="jobPopup" name="jobPopup" placeholder="Date" value={jobDate} onChange={(e) => setjobDate(e.target.value)} required />
				<input type="text" id="jobPopup" name="jobPopup" placeholder="Customer Name" value={jobName} onChange={(e) => setjobName(e.target.value)} required />
				<input type="text" id="jobPopup" name="jobPopup" placeholder="Customer Contact" value={jobContact} onChange={(e) => setjobContact(e.target.value)} required />
				<input type="text" id="jobPopup" name="jobPopup" placeholder="Customer Address" value={jobAddress} onChange={(e) => setjobAddress(e.target.value)} required />
				<input type="text" id="jobPopup" name="jobPopup" placeholder="Job Description" value={jobDesc} onChange={(e) => setjobDesc(e.target.value)} required />
				<button type="submit">Add to Schedule</button>
			</form>
		</div>
	);
};

export default JobPopup;
