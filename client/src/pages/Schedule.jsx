import { useState, useEffect } from "react";
import LogoutButton from "../components/LogoutButton";
import JobPopup from "../components/JobPopup";

const Schedule = () => {
	const username = sessionStorage.getItem("username");
	const [jobs, setJobs] = useState([]);
	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		// todo: need to load jobs from the database here
		// todo: need to update the state of jobs here using setJobs
		// todo: need to display the jobs in the return statement below using the map function and figure out how to order them by date
	}, []);

	const togglePopup = () => {
		setShowPopup(!showPopup);
	};

	return (
		<>
			<h2>Schedule</h2>
			{username && (
				<>
					<div className="schedule-wrapper">
						<h3>
							Hello <span>{username}</span>
						</h3>
						<LogoutButton />
					</div>
					<button onClick={togglePopup}>Add New Job</button>
					{showPopup && <JobPopup togglePopup={togglePopup} />}
					<div className="schedule-todos">
						{/* todo: display the list of jobs */}
						{/* {jobs.map((job) => (
							<div key={job._id}>
								<p>Date: {job.date}</p>
								<p>Customer Name: {job.customerName}</p>
								<p>Customer Contact: {job.customerContact}</p>
								<p>Address: {job.address}</p>
								<p>Description: {job.description}</p>
							</div>
						))} */}
					</div>
					
				</>
			)}
		</>
	);
};

export default Schedule;
