// Dependencies
import React, { useState } from "react";
import { connect } from "react-redux";

// Objects
import { selectGrant } from "../../actions";
import Button from "@material-ui/core/Button";

// Styles

const Grant = props => {
  // console.log("Grant props", props);

  const selectGrant = () => {
    props.selectGrant(props.grant);
  };
  return (
    <div className="grant-card">
      <h2>{props.grant.competition_name}</h2>
      <div>{props.grant.amount}</div>
      <div>{props.grant.area_focus}</div>
      <Button onClick={selectGrant}>Select</Button>
    </div>
  );
};

export default connect(
  null,
  { selectGrant }
)(Grant);