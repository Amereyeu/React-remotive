import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Pagination from "./Pagination";
import JobList from "./JobList";

function Jobs() {
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);

      const res = await fetch(
        "https://cors-anywhere.herokuapp.com/https://remotive.io/api/remote-jobs"
      );

      const data = await res.json();

      setJobs(data.jobs);
      setIsLoading(false);
    };

    fetchJobs();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(50);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = jobs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const previousPage = () => setCurrentPage(currentPage - 1);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="company">
            <img
              src="https://remotive.io/web/image/res.company/1/logo?unique=ba45210"
              alt="Remotive.io"
            />
          </div>

          <JobList jobs={currentPosts} />

          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={jobs.length}
            paginate={paginate}
            nextPage={nextPage}
            previousPage={previousPage}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
}

export default Jobs;
