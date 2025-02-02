import React from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

function WorkoutDetails({ workout }) {
  const {dispatch} = useWorkoutsContext();

  const handleDelete = async () => {
    const response = await fetch("api/workouts/"+ workout._id, {
      method: 'DELETE'
    })
    const json = await response.json();

    if(response.ok) {
      dispatch({type:"DELETE_WORKOUT", payload: json})

    }



  }
  
  return (
    <div className="workout-details">
      <h2>{workout.title}</h2>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
      <span className="material-symbols-outlined" onClick={handleDelete}>delete</span>
    </div>
  );
}

export default WorkoutDetails;
