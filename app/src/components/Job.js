import React, { useState } from "react";
import { connect } from "react-redux";
import JobCard from "./JobCard";
import { fetchData } from "../actions";

const Job = (props) => {
  const [search, setSearch] = useState("");

  console.log("props from Job.js", props);
  const getJobs = (e) => {
    e.preventDefault();
    props.fetchData(search);
    setSearch("");
  };
  const onChange = (e) => {
    e.persist();
    console.log("input changed!", e.target.value);
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="form">
        <h2>Search for jobs near you</h2>
        <form>
          <input
            type="text"
            placeholder="Enter your location"
            value={search}
            onChange={onChange}
          />
          <button onClick={getJobs} type="submit">
            Find Me a Job!
          </button>
        </form>
      </div>
      {props.isFetching ? (
        <div>**Finding jobs**</div>
      ) : props.error ? (
        <div>{props.error}</div>
      ) : (
        <>
          {props.jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs,
  error: state.error,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps, { fetchData })(Job);
