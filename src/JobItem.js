import React, { useState } from "react";

function JobItem({ job }) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<tr className="row">
				<td>
					<h2
						onClick={() => {
							setOpen(!open);
						}}
					>
						{job.title}
					</h2>
				</td>
				<td>
					<h4>{job.category}</h4>
				</td>
				<td>{job.job_type.split("_").join(" ")}</td>
				<td>{job.publication_date.substring(0, 10)}</td>
				<td>{job.salary}</td>
			</tr>
			<tr>
				<td colSpan="5" className={open ? "show" : "hide"}>
					<div>
						<ul className="tags" id="tags">
							{job.tags.map((tag, i) => (
								<li key={i} className="tags__item">
									{tag}
								</li>
							))}
						</ul>
					</div>
					<div
						className="description"
						dangerouslySetInnerHTML={{ __html: job.description }}
					></div>
				</td>
			</tr>
		</>
	);
}

export default JobItem;
