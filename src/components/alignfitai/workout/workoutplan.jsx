import React from "react";
import { useLocation, Link } from "react-router-dom";

const WorkoutPlan = () => {
  const location = useLocation();
  const workoutPlan = location.state?.workoutPlan; // ✅ Safe handling of state

  if (!workoutPlan) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">⚠ No workout plan found. Please generate one first.</p>
        <Link to="/" className="text-blue-600 underline">Go back</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">{workoutPlan.description}</h2>
      <p><strong>Goal:</strong> {workoutPlan.goal}</p>
      <p><strong>Level:</strong> {workoutPlan.level}</p>
      <p><strong>Days per week:</strong> {workoutPlan.daysPerWeek}</p>

      <h3 className="font-semibold mt-4">Schedule:</h3>
      <ul className="list-disc pl-5">
        {Object.entries(workoutPlan.schedule).map(([day, workout]) => (
          <li key={day}><strong>{day}:</strong> {workout}</li>
        ))}
      </ul>

      <Link to="/" className="block text-center mt-4 text-blue-600">Back to Form</Link>
    </div>
  );
};

export default WorkoutPlan;
