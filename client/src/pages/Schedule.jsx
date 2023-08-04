import { useState, useEffect } from "react";
import styled from "styled-components";
import LogoutButton from "../components/LogoutButton";
import JobPopup from "../components/JobPopup";

const StyledJobListWrapper = styled.div`
	display: flex;
	width: 100vw;
	height: 100%;
`;

const StyledAddJobButton = styled.button`
	width: 250px;
	font-size: 1rem;
	padding: 0.25rem;
	color: var(--color2);
	background-color: var(--color3);
	margin: 2rem auto;
	border: 3px inset transparent;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: var(--hover);
	}

	&:active {
		border: 3px inset var(--windowColor);
	}
`;

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
					<div className="schedule-wrapper">
						<StyledAddJobButton onClick={togglePopup}>Create New Job</StyledAddJobButton>
					</div>
					{showPopup && <JobPopup togglePopup={togglePopup} />}
					<StyledJobListWrapper>
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
					</StyledJobListWrapper>
				</>
			)}
		</>
	);
};

export default Schedule;
