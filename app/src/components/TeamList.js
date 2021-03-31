import React from "react";
import { connect } from "react-redux";

import { getTeam } from "../actions";

const TeamList = (props) => {
  const fetchTeam = (e) => {
    e.preventDefault();
    props.getTeam();
  };

  return (
    <>
      <h2>Meet Our Team</h2>
      {props.isFetching && <p>Fetching the team!</p>}
      <div>
        {props.team.map((team) => (
          <container className="team">
          <img src={team.avatar} alt="avatar"/>
         <div className="name">
            <h4 key={team.id}>{team.first_name}</h4>
            <h4 key={team.id}>{team.last_name}</h4>
         </div>
          <p>{team.email}</p>
          </container>
       
        ))}
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={fetchTeam}>Fetch Team!</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  team: state.team,
  error: state.error,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps, { getTeam })(TeamList);
