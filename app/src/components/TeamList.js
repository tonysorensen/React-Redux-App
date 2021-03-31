import React from "react";
import { connect } from "react-redux";

import { getTeam } from "../actions";

const TeamList = (props) => {
  const fetchTeam = (e) => {
    e.preventDefault();
    props.getTeam();
  };

  return (
    <container className="teamList">
      <h1>Meet Our Team</h1>
      <button onClick={fetchTeam}>Fetch Team!</button>
      {props.isFetching && <p className="fetching">Fetching the team!</p>}
      <div className="team">
        {props.team.map((team) => (
          <div className="teamMember">
          <img src={team.avatar} alt="avatar"/>
         <div className="name">
            <h4 key={team.id}>{team.first_name} {team.last_name}</h4>
         </div>
          <p>{team.email}</p>
          </div>
       
        ))}
      </div>
      {props.error && <p className="error">{props.error}</p>}
    </container>
  );
};

const mapStateToProps = (state) => ({
  team: state.team,
  error: state.error,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps, { getTeam })(TeamList);
