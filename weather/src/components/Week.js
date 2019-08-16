import React, { useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { getData } from "../actions";
import { connect } from "react-redux";
import Day from "./Day.js";
function Week(props) {
  useEffect(() => {
    props.getData();
  }, []);
  return (
    <div className="week-container">
      {props.isLoading ? (
        <Loader type="TailSpin" color="#00BFFF" height="15" width="100" />
      ) : (
        ""
      )}
      {props.consolidated_weather.map(day => (
        <Day day={day} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    consolidated_weather: state.consolidated_weather
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(Week);
