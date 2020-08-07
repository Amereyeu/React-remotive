import React from "react";
import JobItem from "./JobItem";

function JobList({ jobs }) {
	return (
		<div>
			<table id="table">
				<thead>
					<tr>
						<th>Position</th>
						<th>Category</th>
						<th>Job Type</th>
						<th>Published</th>
						<th>Salary</th>
					</tr>
				</thead>
				<tbody>
					{jobs.map((job) => (
						<JobItem key={job.id} job={job} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default JobList;
